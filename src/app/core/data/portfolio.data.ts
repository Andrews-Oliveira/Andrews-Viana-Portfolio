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
    // github: 'https://github.com/SEU-USUARIO',
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
    {index: '02', category: 'PROJETO FULL STACK · GESTÃO', title: 'PROCAR', summary: 'Sistema de gestão para oficinas: clientes, veículos, orçamentos, ordens de serviço, inspeções, pagamentos e controle de estoque.', tags: ['Angular', 'Django', 'PostgreSQL', 'Docker'], status: 'Case de projeto', notice: 'Projeto real; apresentação sem dados privados do cliente.'},
    {index: '03', category: 'EXPERIÊNCIA PROFISSIONAL · IA', title: 'FOTA AI Agent', summary: 'Desenvolvimento de agente de apoio à engenharia para interpretar commits e diffs, explicar alterações e sugerir verificações de qualidade.', tags: ['Python', 'Django', 'LLMs', 'Análise de código'], status: 'Case profissional', notice: 'Experiência profissional descrita em alto nível. Código e integrações internas não são divulgados.'},
    {index: '04', category: 'EXPERIÊNCIA PROFISSIONAL · IA', title: 'FOTA Log Analyzer', summary: 'Ferramenta de apoio à investigação de logs técnicos, organização de evidências e geração de hipóteses para análise humana.', tags: ['Python', 'LLMs', 'Logs', 'Debugging'], status: 'Case profissional', notice: 'Estudo de caso descritivo, sem logs, arquitetura ou dados internos.'}
  ]
};
