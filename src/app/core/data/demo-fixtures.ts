import {AnalysisKind, AnalysisResult, Sample} from '../models/analysis.model';

export const SAMPLES: Record<AnalysisKind, Sample[]> = {
  commit: [
    {
      id: 'commit-discount', label: 'Validação de desconto', description: 'Diff TypeScript · lógica de pagamentos',
      content: `diff --git a/src/cart/calculate-total.ts b/src/cart/calculate-total.ts
index f2a1c90..ab311ae 100644
--- a/src/cart/calculate-total.ts
+++ b/src/cart/calculate-total.ts
@@ -1,8 +1,10 @@
 export function calculateTotal(subtotal: number, shipping: number, discount: number) {
-  const validDiscount = Math.min(Math.max(discount, 0), subtotal);
-  return subtotal + shipping - validDiscount;
+  return subtotal + (shipping ?? 0) - discount;
 }
+
+export function applyCoupon(code: string, discount: number) {
+  return { code, discount };
+}
`
    },
    {
      id: 'commit-timeout', label: 'Timeout e fallback', description: 'Diff Python · cliente HTTP',
      content: `diff --git a/app/clients/catalog.py b/app/clients/catalog.py
index 15b2a00..72c4bde 100644
--- a/app/clients/catalog.py
+++ b/app/clients/catalog.py
@@ -7,8 +7,12 @@
 def fetch_catalog(client, product_id):
-    response = client.get(f"/products/{product_id}", timeout=5)
-    response.raise_for_status()
-    return response.json()
+    try:
+        response = client.get(f"/products/{product_id}")
+        return response.json()
+    except Exception:
+        return {}
`
    }
  ],
  log: [
    {
      id: 'log-timeout', label: 'Falha de conexão', description: 'Logs fictícios · serviço de pedidos',
      content: `2026-10-12T10:31:11.120Z INFO  [orders-worker] Starting order sync. batch=demo-42
2026-10-12T10:31:11.912Z INFO  [orders-worker] Request GET /v1/catalog, attempt=1
2026-10-12T10:31:17.927Z WARN  [orders-worker] upstream request timeout after 5000ms
2026-10-12T10:31:17.930Z INFO  [orders-worker] retry=1 backoff=100ms
2026-10-12T10:31:23.049Z ERROR [orders-worker] TimeoutError: upstream unavailable
2026-10-12T10:31:23.050Z ERROR [orders-worker] Sync aborted; fallback unavailable. batch=demo-42
2026-10-12T10:31:23.052Z INFO  [healthcheck] service healthy; upstream status=unknown`
    },
    {
      id: 'log-db', label: 'Pool do banco', description: 'Logs fictícios · PostgreSQL',
      content: `2026-10-12T14:15:01.018Z INFO  [api] POST /checkout request_id=req_demo_19
2026-10-12T14:15:03.012Z WARN  [postgres] pool waiting_count=21 active=10 idle=0
2026-10-12T14:15:06.014Z ERROR [postgres] connection acquisition timeout (5000ms)
2026-10-12T14:15:06.016Z ERROR [api] DatabaseConnectionError during checkout
2026-10-12T14:15:06.019Z INFO  [api] response=503 duration=5001ms request_id=req_demo_19`
    }
  ]
};

export function buildDemoResult(kind: AnalysisKind, sampleId: string): AnalysisResult {
  const now = new Date().toISOString();
  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `demo-${Date.now()}`;
  const isCommit = kind === 'commit';
  const isAlternate = sampleId === (isCommit ? 'commit-timeout' : 'log-db');
  const base = isCommit
    ? isAlternate ? {
      title: 'Tratamento de exceções e timeout',
      summary: 'O diff remove o timeout explícito da requisição e substitui diferentes falhas por um retorno vazio. Isso pode aumentar a latência e dificultar diagnósticos.',
      findings: [
        {title: 'Timeout removido da requisição', severity: 'high' as const, explanation: 'Sem limite de tempo explícito, uma chamada externa pode ficar pendente por mais tempo que o esperado.', evidence: 'client.get(f"/products/{product_id}")'},
        {title: 'Captura ampla de exceções', severity: 'medium' as const, explanation: 'O bloco except Exception oculta a causa do erro e retorna um objeto indistinguível de uma resposta válida.', evidence: 'except Exception: return {}'}
      ],
      recommendations: ['Restaurar timeout e tratamento de status HTTP.', 'Registrar causas de falha sem expor dados sensíveis.', 'Testar erros 4xx, 5xx e indisponibilidade do upstream.']
    } : {
      title: 'Validação de descontos no checkout',
      summary: 'O novo cálculo subtrai diretamente o desconto, sem limitar valores negativos ou superiores ao subtotal. Dependendo das entradas, o total pode ficar inconsistente.',
      findings: [
        {title: 'Desconto não limitado ao subtotal', severity: 'high' as const, explanation: 'A remoção da normalização pode produzir totais negativos.', evidence: 'return subtotal + (shipping ?? 0) - discount;'},
        {title: 'Entrada de cupom sem validação', severity: 'medium' as const, explanation: 'O novo método repassa o valor do desconto sem validação de domínio.', evidence: 'return { code, discount };'}
      ],
      recommendations: ['Restaurar validação de faixa para descontos.', 'Adicionar testes para desconto negativo e maior que subtotal.', 'Definir regras de negócio para cupons e frete.']
    }
    : isAlternate ? {
      title: 'Esgotamento de conexões do PostgreSQL',
      summary: 'As requisições falham durante a aquisição de conexões com o banco. O pool registra dez conexões ativas, nenhuma ociosa e fila crescente.',
      findings: [
        {title: 'Pool esgotado', severity: 'high' as const, explanation: 'Não há conexões ociosas e o número de requisições aguardando conexão aumenta.', evidence: 'pool waiting_count=21 active=10 idle=0'},
        {title: 'Timeout no checkout', severity: 'high' as const, explanation: 'A chamada ultrapassa o limite de aquisição de conexão e responde com indisponibilidade.', evidence: 'connection acquisition timeout (5000ms)'}
      ],
      recommendations: ['Inspecionar conexões abertas e transações longas.', 'Confirmar dimensionamento do pool e limites do banco.', 'Adicionar métricas para espera por conexão e testes de carga autorizados.']
    } : {
      title: 'Indisponibilidade de serviço upstream',
      summary: 'O worker falha após tentativas de comunicação com o catálogo. Há evidências de timeout e ausência de fallback, mas os logs não comprovam a causa raiz do upstream.',
      findings: [
        {title: 'Timeout no serviço externo', severity: 'high' as const, explanation: 'A requisição ao catálogo excede o limite configurado.', evidence: 'upstream request timeout after 5000ms'},
        {title: 'Fallback indisponível', severity: 'medium' as const, explanation: 'O processamento foi interrompido quando a repetição da chamada falhou.', evidence: 'Sync aborted; fallback unavailable.'}
      ],
      recommendations: ['Validar disponibilidade e latência do upstream.', 'Aplicar retries com backoff e limites explícitos.', 'Definir fallback seguro e observabilidade por solicitação.']
    };
  return {id, kind, mode: 'demo', title: base.title, summary: base.summary, severity: 'high', findings: base.findings, recommendations: base.recommendations, generatedAt: now, model: 'Cenário estático · dados fictícios'};
}
