import assert from 'node:assert/strict';
import {after, before, test} from 'node:test';
import analyze from '../api/analyze.ts';

const OLD_ENV = {
  LIVE_AI_ENABLED: process.env['LIVE_AI_ENABLED'],
  GEMINI_API_KEY: process.env['GEMINI_API_KEY'],
  PORTFOLIO_ACCESS_CODE: process.env['PORTFOLIO_ACCESS_CODE'],
  GEMINI_MODEL: process.env['GEMINI_MODEL']
};
const originalFetch = globalThis.fetch;
const ACCESS_CODE = 'exampleSecretKey123';

function post(input: unknown, code = ACCESS_CODE): Request {
  return new Request('https://example.vercel.app/api/analyze', {
    method: 'POST', headers: {'Content-Type':'application/json','X-Portfolio-Code': code},body: JSON.stringify(input)
  });
}
function envOn(): void {
  process.env['LIVE_AI_ENABLED'] = 'true';
  process.env['GEMINI_API_KEY'] = 'fake-test-api-key';
  process.env['PORTFOLIO_ACCESS_CODE'] = ACCESS_CODE;
  process.env['GEMINI_MODEL'] = 'gemini-3.5-flash-lite';
}

before(() => {process.env['LIVE_AI_ENABLED'] = 'false';});
after(() => {
  for (const [key, value] of Object.entries(OLD_ENV)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
  globalThis.fetch = originalFetch;
});

test('rejeita chamadas quando o modo live está desligado', async () => {
  process.env['LIVE_AI_ENABLED'] = 'false';
  const response = await analyze.fetch(post({kind:'commit',content:'Conteúdo sintético de teste com mais de vinte caracteres.'}));
  assert.equal(response.status,503);
});
test('não permite métodos não autorizados', async () => {
  const response = await analyze.fetch(new Request('https://example.vercel.app/api/analyze',{method:'GET'}));
  assert.equal(response.status,405);
});
test('rejeita código de acesso incorreto', async () => {
  envOn();
  const response = await analyze.fetch(post({kind:'commit',content:'Conteúdo sintético com tamanho mínimo suficiente.'},'errado'));
  assert.equal(response.status,401);
});
test('valida entradas inválidas sem acessar provedor', async () => {
  envOn();
  for (const input of [{kind:'wrong',content:'longo o suficiente aqui 1234567890'}, {kind:'log', content:'curto'}]) {
    const response = await analyze.fetch(post(input));
    assert.equal(response.status,400);
  }
});
test('encaminha conteúdo sintético e valida resposta estruturada', async () => {
  envOn();
  globalThis.fetch = async (_url, options) => {
    assert.equal((options?.headers as Record<string,string>)['x-goog-api-key'], 'fake-test-api-key');
    return new Response(JSON.stringify({candidates:[{content:{parts:[{text: JSON.stringify({
      title:'Análise sintética',summary:'O tempo de resposta excedeu o limite esperado.',severity:'medium',
      findings:[{title:'Timeout',severity:'medium',explanation:'Upstream demorou.',evidence:'TimeoutError: 5000ms'}],
      recommendations:['Adicionar timeout explícito.']
    })}]}}]}),{status:200,headers:{'Content-Type':'application/json'}});
  };
  const result = await analyze.fetch(post({kind:'log',content:'2026-10-12 01:00:00 ERROR TimeoutError: 5000ms [sintético]'}));
  assert.equal(result.status,200);
  const body = await result.json();
  assert.equal(body.mode,'live');
  assert.equal(body.kind,'log');
  assert.equal(body.findings.length,1);
  assert.ok(body.id);
});
