/**
 * Public portfolio API. Live mode is OFF unless explicitly activated in Vercel.
 * No proprietary data, credentials or internal URLs belong in this repository.
 */
import {randomUUID, timingSafeEqual} from 'node:crypto';

type Kind = 'commit' | 'log';
type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';
interface Finding {title: string; severity: Severity; explanation: string; evidence: string;}
interface ModelReport {title: string; summary: string; severity: Severity; findings: Finding[]; recommendations: string[];}

const HEADERS = {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store'};
const MAX_CHARS = 14_000;
const ALLOWED_SEVERITY = new Set<Severity>(['critical','high','medium','low','info']);

function response(status: number, body: object): Response {return new Response(JSON.stringify(body), {status, headers: HEADERS});}
function safeCompare(left: string, right: string): boolean {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}
function isFinding(value: unknown): value is Finding {
  if (!value || typeof value !== 'object') return false;
  const f = value as Record<string, unknown>;
  return typeof f['title'] === 'string' && typeof f['explanation'] === 'string' && typeof f['evidence'] === 'string' && ALLOWED_SEVERITY.has(f['severity'] as Severity);
}
function validateModelReport(value: unknown): ModelReport {
  if (!value || typeof value !== 'object') throw new Error('Resposta inválida do modelo.');
  const body = value as Record<string, unknown>;
  if (typeof body['title'] !== 'string' || typeof body['summary'] !== 'string' || !ALLOWED_SEVERITY.has(body['severity'] as Severity) || !Array.isArray(body['findings']) || !Array.isArray(body['recommendations']) || !body['findings'].every(isFinding) || !body['recommendations'].every(v => typeof v === 'string')) {
    throw new Error('O modelo retornou dados fora do contrato previsto.');
  }
  return {
    title: body['title'].slice(0, 150), summary: body['summary'].slice(0, 2500),
    severity: body['severity'] as Severity,
    findings: body['findings'].slice(0, 8).map((f: Finding) => ({title: f.title.slice(0, 160),severity: f.severity,explanation:f.explanation.slice(0, 1500),evidence:f.evidence.slice(0, 600)})),
    recommendations: (body['recommendations'] as string[]).slice(0, 8).map(item => item.slice(0, 450))
  };
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') return response(405, {error: 'Método não permitido.'});
    if (process.env['LIVE_AI_ENABLED'] !== 'true') return response(503, {error: 'Análise ao vivo desativada. Utilize o modo demo.'});
    const key = process.env['GEMINI_API_KEY'];
    const code = process.env['PORTFOLIO_ACCESS_CODE'];
    if (!key || !code || code.length < 12) return response(503, {error: 'Integração ao vivo não configurada. Consulte o administrador.'});
    if (!safeCompare(request.headers.get('X-Portfolio-Code') || '', code)) return response(401, {error: 'Código de acesso inválido.'});
    if (Number(request.headers.get('content-length') || 0) > 60_000) return response(413, {error: 'Entrada muito grande.'});

    let kind: Kind, content: string;
    try {
      const rawBody = await request.text();
      if (rawBody.length > 60_000) return response(413, {error: 'Entrada muito grande.'});
      const input: unknown = JSON.parse(rawBody);
      if (!input || typeof input !== 'object') return response(400, {error: 'Formato de entrada inválido.'});
      const payload = input as Record<string, unknown>;
      if (payload['kind'] !== 'commit' && payload['kind'] !== 'log') return response(400, {error: 'Tipo de análise inválido.'});
      if (typeof payload['content'] !== 'string' || payload['content'].trim().length < 20 || payload['content'].length > MAX_CHARS) return response(400, {error: 'O conteúdo deve ter entre 20 e 14.000 caracteres.'});
      kind = payload['kind']; content = payload['content'];
    } catch {return response(400, {error: 'JSON inválido.'});}

    const model = process.env['GEMINI_MODEL'] || 'gemini-3.5-flash-lite';
    if (!/^gemini-[a-z0-9.-]{3,50}$/.test(model)) return response(503, {error: 'Modelo Gemini inválido na configuração.'});
    const systemInstruction = kind === 'commit'
      ? 'Você é um engenheiro de software revisando um diff fictício. Identifique alterações, riscos verificáveis, evidências extraídas do diff e próximos testes. Não invente arquivos ou linhas. Seja conciso e em português brasileiro.'
      : 'Você é um analista de observabilidade. Examine logs fictícios, separe sintomas de hipóteses, cite apenas evidências presentes no texto e recomende validações. Não afirme causas sem evidências. Responda em português brasileiro.';
    const schema = {
      type: 'OBJECT',
      properties: {
        title:{type:'STRING'}, summary:{type:'STRING'}, severity:{type:'STRING', enum:['critical','high','medium','low','info']},
        findings:{type:'ARRAY', items:{type:'OBJECT',properties:{title:{type:'STRING'},severity:{type:'STRING',enum:['critical','high','medium','low','info']},explanation:{type:'STRING'},evidence:{type:'STRING'}},required:['title','severity','explanation','evidence']}},
        recommendations:{type:'ARRAY', items:{type:'STRING'}}
      }, required:['title','summary','severity','findings','recommendations']
    };
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 23_000);
    try {
      const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST', signal: controller.signal,
        headers: {'Content-Type': 'application/json', 'x-goog-api-key': key},
        body: JSON.stringify({
          systemInstruction: {parts:[{text: systemInstruction}]},
          contents:[{role:'user', parts:[{text:`Analise somente este material fornecido pelo usuário:\n\n${content}`}]}],
          generationConfig: {responseMimeType:'application/json', responseSchema:schema, temperature:0.2, maxOutputTokens:1800}
        })
      });
      if (!upstream.ok) {
        if (upstream.status === 429) return response(429, {error:'Limite da API Gemini atingido. Tente novamente mais tarde.'});
        return response(502, {error: 'O provedor de IA não conseguiu concluir a análise.'});
      }
      const payload: unknown = await upstream.json();
      const raw = (payload as {candidates?: {content?: {parts?: {text?: string}[]}}[]})?.candidates?.[0]?.content?.parts?.map(p => p.text ?? '').join('') ?? '';
      const report = validateModelReport(JSON.parse(raw) as unknown);
      return response(200, {id: randomUUID(), kind, mode:'live', ...report, generatedAt:new Date().toISOString(), model});
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return response(504,{error:'A análise excedeu o tempo limite.'});
      return response(502, {error:'Não foi possível validar a resposta do modelo. Tente novamente.'});
    } finally {clearTimeout(timeout);}
  }
};
