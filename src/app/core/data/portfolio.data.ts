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
    linkedin: 'https://www.linkedin.com/in/andrews-viana/',
    whatsapp: 'https://wa.me/5592981704823',
    phone: '+55 (92) 98170-4823',
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
  languages: [{ name: 'Inglês', level: 'Intermediário' }],
  projects: [
    {index: '01', category: 'PROJETO COMERCIAL · FULL STACK', title: 'PROCAR', summary: 'Sistema de gestão desenvolvido para uma oficina real, com clientes, veículos, orçamentos, ordens de serviço, inspeções, pagamentos e estoque. Explore a demonstração pública em modo somente leitura, com dados fictícios e infraestrutura isolada.', tags: ['Angular', 'Django', 'PostgreSQL', 'Docker'], status: 'Demo pública disponível', internalRoute: '/case/procar', demoUrl: 'https://procar-portfolio-demo.vercel.app/', notice: 'Ambiente de demonstração independente, somente leitura, sem dados da oficina.'},
    {index: '02', category: 'ENGENHARIA COM IA · FOTA / ODM', title: 'FOTA AI Agent', summary: 'Analisador técnico de commits, diffs e mudanças em regras FOTA e firmware ODM/Android. Organiza evidências, impacto, riscos e verificações de QA. Experimente a versão pública com processamento local e exemplos fictícios.', tags: ['Python', 'Django', 'FOTA', 'ODM', 'Git'], internalRoute: '/case/fota-ai-agent', demoUrl: 'https://fota-engineering-suite-demo.vercel.app/fota-ai-agent/', status: 'Demo pública disponível', notice: 'A demo é isolada: não utiliza logs internos, integrações corporativas ou LLMs externos.'},
    {index: '03', category: 'DIAGNÓSTICO TÉCNICO · FOTA / OTA', title: 'FOTA Log Analyzer', summary: 'Ferramenta especializada em investigação de falhas de atualização OTA. Processa logs FOTA, identifica padrões de erro e apresenta evidências e ações de diagnóstico. Teste com cenários sintéticos.', tags: ['Python', 'Django', 'FOTA', 'Logs', 'Debugging'], internalRoute: '/case/fota-log-analyzer', demoUrl: 'https://fota-engineering-suite-demo.vercel.app/fota-log-analyzer/', status: 'Demo pública disponível', notice: 'Versão demonstrativa com parser local, sem histórico compartilhado ou envio a LLM.'},
    {index: '04', category: 'LABORATÓRIO EXPERIMENTAL · GENAI', title: 'GenAI Engineering Studio', summary: 'Laboratório interativo para analisar commits e logs com exemplos sintéticos, relatórios estruturados e uma API serverless preparada para integrar LLMs.', tags: ['Angular', 'TypeScript', 'Gemini API', 'Vercel'], status: 'Laboratório experimental', internalRoute: '/workspace', notice: 'Projeto pessoal independente, com entradas e dados fictícios.'},
  ]
};
