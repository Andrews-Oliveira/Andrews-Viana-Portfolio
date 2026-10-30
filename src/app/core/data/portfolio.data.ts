import {PortfolioProfile} from '../models/portfolio.model';

/**
 * Conteúdo público editável. Antes de publicar, preencha SOMENTE links reais.
 * Nunca incluir informações restritas ou pertencentes a terceiros.
 */
export const PORTFOLIO_PROFILE: PortfolioProfile = {
  name: 'Andrews Viana de Oliveira',
  initials: 'AV',
  role: 'Desenvolvedor de Software · Android/AOSP & GenAI',
  location: 'Manaus, Amazonas · Brasil',
  introduction: 'Desenvolvedor de Software com experiência em Android/AOSP, aplicações full stack e integração de inteligência artificial generativa.',
  about: [
    'Sou estudante de Engenharia de Software na UNINTER e atuo com desenvolvimento Android/AOSP na Positivo Tecnologia. Meu dia a dia envolve investigação técnica, Git, Linux e desafios reais de engenharia de software.',
    'Além da atuação profissional, construo aplicações web e soluções com IA generativa. Tenho interesse especial em conectar bons fundamentos de desenvolvimento à capacidade dos modelos de linguagem para criar ferramentas que façam sentido para quem usa.'
  ],
  social: {
    github: 'https://github.com/Andrews-Oliveira',
    // linkedin: 'https://www.linkedin.com/in/SEU-PERFIL/',
    // email: 'SEU-EMAIL',
    // resume: '/curriculo.pdf'
  },
  experience: [
    { period: 'FEV 2026 — ATUAL', company: 'Positivo Tecnologia', position: 'Estagiário de Desenvolvimento de Software · Android/AOSP',
      description: 'Atuação em projetos Android/AOSP com análise técnica de código, investigação de falhas e fluxos de atualização de dispositivos.',
      highlights: [
        'Análise de logs, código-fonte e comportamento de sistemas Android.',
        'Desenvolvimento e integração de agentes com LLMs para apoiar análises de commits e logs conforme demandas técnicas.',
        'Prática com Git, Linux, debugging, validação e processos de atualização FOTA/OTA.'
      ]
    }
  ],
  education: [
    {period: 'EM ANDAMENTO', program: 'Engenharia de Software', institution: 'UNINTER · Bacharelado', detail: 'Fundamentos de engenharia, arquitetura e qualidade de software.'},
    {period: 'CONCLUÍDO', program: 'Técnico em Desenvolvimento de Software', institution: 'Formação técnica', detail: 'Desenvolvimento, lógica de programação e aplicações.'},
    {period: 'CONCLUÍDO', program: 'Técnico em Informática', institution: 'Formação técnica', detail: 'Ênfase em programação e fundamentos de TI.'}
  ],
  skillGroups: [
    {label: 'Front-end & Apps', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Android / AOSP', 'Java']},
    {label: 'Back-end & Dados', skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'PostgreSQL', 'SQL', 'Spring Boot (estudos)']},
    {label: 'Engenharia & Infra', skills: ['Git', 'Linux', 'Docker', 'Testes', 'Debugging', 'Arquitetura de software']},
    {label: 'GenAI & LLMs', skills: ['Gemini', 'Ollama', 'Qwen', 'Prompt Engineering', 'Structured Output', 'LLM Integration']}
  ],
  projects: [
    {index: '01', category: 'PROJETO INDEPENDENTE · GENAI', title: 'GenAI Engineering Studio', summary: 'Laboratório interativo para analisar commits e logs com exemplos sintéticos, relatórios estruturados e uma API serverless preparada para integrar LLMs.', tags: ['Angular', 'TypeScript', 'Gemini API', 'Vercel'], status: 'Demonstração disponível', internalRoute: '/workspace', notice: 'Projeto pessoal independente, com entradas e dados fictícios.'},
    {index: '02', category: 'PRIMEIRO PROJETO COMERCIAL · FULL STACK', title: 'PROCAR', summary: 'Meu primeiro sistema vendido a um cliente real. Desenvolvi uma plataforma de gestão para oficinas com cadastro de clientes e veículos, orçamentos, ordens de serviço, inspeções, pagamentos e estoque.', tags: ['Angular', 'Django', 'PostgreSQL', 'Docker'], status: 'Primeira venda de software', notice: 'Projeto comercial independente, apresentado sem dados privados do cliente.'},
    {index: '03', category: 'PROJETO INTERNO · ENGENHARIA COM IA', title: 'FOTA AI Agent', summary: 'Desenvolvi uma ferramenta para melhorar a análise técnica de commits e diffs nos projetos da empresa. A solução é utilizada internamente por interface web e por comandos no terminal, gerando resumos, impactos e sugestões de validação conforme a demanda.', tags: ['Python', 'Django', 'LLMs', 'Git'], internalRoute: '/case/fota-ai-agent', status: 'Em uso interno · Web + CLI', notice: 'Experiência profissional descrita sem código, dados ou integrações confidenciais.'},
    {index: '04', category: 'PROJETO INTERNO · DIAGNÓSTICO COM IA', title: 'FOTA Log Analyzer', summary: 'Criei uma ferramenta para otimizar a análise de logs e a investigação de falhas em projetos da empresa. Em utilização interna via site e terminal, ela organiza evidências e propõe hipóteses para apoiar o diagnóstico técnico.', tags: ['Python', 'LLMs', 'Logs', 'Debugging'], internalRoute: '/case/fota-log-analyzer', status: 'Em uso interno · Web + CLI', notice: 'Case descritivo, sem logs reais, arquitetura privada ou dados corporativos.'}
  ]
};
