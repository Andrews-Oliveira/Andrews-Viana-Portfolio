/** Estudos de caso públicos: descrições de alto nível, sem dados internos ou métricas não verificadas. */
export interface TechnicalCase {
  slug: string;
  ordinal: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  state: string;
  highlights: string[];
  problem: string[];
  solution: string[];
  workflow: { number: string; title: string; description: string }[];
  contributions: string[];
  deliverables: string[];
  stack: string[];
  implementation: string;
  disclosure: string;
  screenshots?: {src: string; alt: string; caption: string}[];
  nextSlug: string;
  nextTitle: string;
}

export const TECHNICAL_CASES: Record<string, TechnicalCase> = {
  'fota-ai-agent': {
    slug: 'fota-ai-agent', ordinal: '03', eyebrow: 'ESTUDO DE CASO · ENGENHARIA DE IA',
    title: 'FOTA AI Agent', subtitle: 'De alterações de código a análises técnicas mais claras.',
    description: 'Desenvolvi uma ferramenta para apoiar a análise de commits e diffs em projetos de software da Positivo Tecnologia. O agente recebe informações de alterações de código e organiza uma análise técnica orientada à demanda, com resumos, impactos e recomendações de validação.',
    state: 'Ferramenta em utilização interna · Interface web e terminal',
    highlights: ['Análise contextual de commits e diffs', 'Relatórios técnicos estruturados', 'Acesso via web e terminal'],
    problem: [
      'Investigar mudanças de código pode exigir leitura manual de diffs extensos, identificação dos módulos afetados e tradução dos detalhes técnicos em informações úteis para validação.',
      'O desafio era tornar esse processo mais organizado e facilitar a preparação de resumos e verificações de qualidade, sem substituir a análise do desenvolvedor.'
    ],
    solution: [
      'Implementei um agente que recebe os dados de um commit, processa as alterações e utiliza modelos de linguagem para elaborar uma leitura estruturada do que foi modificado.',
      'A resposta apresenta o objetivo da mudança, possíveis impactos, sugestões de release notes e um checklist de QA. A ferramenta pode ser utilizada por interface web ou comandos no terminal, de acordo com a necessidade.'
    ],
    workflow: [
      {number: '01', title: 'Entrada técnica', description: 'O usuário informa um commit ou fornece dados de diff para iniciar uma análise.'},
      {number: '02', title: 'Preparação do contexto', description: 'O código organiza as alterações e prepara uma entrada adequada ao modelo de linguagem.'},
      {number: '03', title: 'Interpretação com LLM', description: 'O modelo elabora a análise, destacando propósito, possíveis impactos e pontos de atenção.'},
      {number: '04', title: 'Entrega orientada ao QA', description: 'O resultado é apresentado em formato consultável, com resumo, release notes e verificações sugeridas.'}
    ],
    contributions: [
      'Desenvolvimento da ferramenta e das interfaces de utilização.',
      'Integração de modelos de linguagem ao processamento de alterações de código.',
      'Estruturação das respostas conforme a demanda de engenharia e validação.',
      'Ajustes para lidar com entradas extensas e falhas de comunicação com provedores.'
    ],
    deliverables: ['Resumo técnico da alteração', 'Mapa de mudanças e impactos possíveis', 'Release notes sugeridas', 'Checklist de validação de QA'],
    stack: ['Python', 'Django', 'Git', 'Gemini', 'Ollama', 'Qwen', 'LLMs'],
    implementation: 'Projeto desenvolvido no contexto profissional e utilizado internamente. O conteúdo desta página descreve capacidades e decisões em alto nível; não apresenta código de propriedade da empresa nem integrações internas.',
    disclosure: 'As recomendações geradas pelo modelo são apoio à análise humana e devem ser verificadas por quem conhece o contexto do código.',
    nextSlug: 'fota-log-analyzer', nextTitle: 'FOTA Log Analyzer'
  },
  'fota-log-analyzer': {
    slug: 'fota-log-analyzer', ordinal: '04', eyebrow: 'ESTUDO DE CASO · DIAGNÓSTICO ASSISTIDO POR IA',
    title: 'FOTA Log Analyzer', subtitle: 'Logs extensos transformados em evidências para investigar falhas.',
    description: 'Criei uma ferramenta para auxiliar a investigação de falhas técnicas em projetos da Positivo Tecnologia. Ela recebe logs, identifica sinais relevantes e utiliza LLMs para organizar hipóteses de causa e possíveis próximos passos de diagnóstico.',
    state: 'Ferramenta em utilização interna · Interface web e terminal',
    highlights: ['Leitura de logs técnicos', 'Hipóteses e evidências organizadas', 'Acesso via web e terminal'],
    problem: [
      'Logs de execução podem reunir grande volume de mensagens, avisos e erros. Encontrar o trecho útil e construir uma hipótese técnica costuma exigir pesquisa e correlação manual de eventos.',
      'O objetivo era apoiar a triagem, tornar as evidências mais fáceis de consultar e ajudar a decidir o próximo passo de investigação.'
    ],
    solution: [
      'Desenvolvi uma ferramenta que recebe logs, prepara o conteúdo para análise e utiliza um modelo de linguagem para sugerir interpretações técnicas de trechos relevantes.',
      'A saída organiza o erro principal, possíveis causas, evidências e ações recomendadas. A solução pode ser utilizada por site ou terminal, conforme o fluxo de trabalho.'
    ],
    workflow: [
      {number: '01', title: 'Recebimento do log', description: 'O usuário fornece uma amostra do log ou um arquivo de diagnóstico.'},
      {number: '02', title: 'Organização dos eventos', description: 'A aplicação prepara o material e destaca o contexto disponível para análise.'},
      {number: '03', title: 'Diagnóstico assistido', description: 'O LLM propõe hipóteses com base nas mensagens e evidências fornecidas.'},
      {number: '04', title: 'Próximas verificações', description: 'A ferramenta retorna um relatório que apoia a investigação e a validação humana.'}
    ],
    contributions: [
      'Desenvolvimento da ferramenta para análise de logs e apoio ao debugging.',
      'Integração de modelos de linguagem para interpretação de mensagens técnicas.',
      'Definição de uma saída com erro principal, evidências, hipóteses e recomendações.',
      'Disponibilização de formas de uso pela interface web e pelo terminal.'
    ],
    deliverables: ['Erro principal identificado', 'Trechos relevantes do log', 'Hipóteses de causa', 'Sugestões de próximos passos'],
    stack: ['Python', 'LLMs', 'Análise de logs', 'Debugging', 'Web', 'CLI'],
    implementation: 'Projeto desenvolvido no contexto profissional e utilizado internamente. Os detalhes internos de infraestrutura, códigos e registros corporativos não são reproduzidos nesta página.',
    disclosure: 'Um diagnóstico de IA é uma hipótese de trabalho, não uma confirmação automática de causa raiz. A validação final depende da análise técnica.',
    nextSlug: 'fota-ai-agent', nextTitle: 'FOTA AI Agent'
  }
};
