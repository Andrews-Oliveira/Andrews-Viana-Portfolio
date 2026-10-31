<div align="center">

# Andrews Viana · Developer Portfolio

**Android/AOSP · Full Stack · IA aplicada à Engenharia de Software**

Portfólio profissional de **Andrews Viana de Oliveira**, desenvolvido com **Angular, TypeScript e CSS**.

[![Site](https://img.shields.io/badge/Abrir_portf%C3%B3lio-6654E8?style=for-the-badge&logo=vercel&logoColor=white)](https://andrews-viana-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Andrews--Oliveira-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Andrews-Oliveira)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrews-viana/)

</div>

---

## ✨ Sobre o projeto

Site pessoal que reúne trajetória profissional, formação, tecnologias e estudos de caso. A experiência é responsiva, oferece **modo claro/escuro** e permite testar demonstrações públicas de sistemas e ferramentas.

O objetivo é mostrar **o problema, as decisões de engenharia e o resultado** de cada projeto, indo além de uma lista de frameworks.

## 🚀 Projetos em destaque

| Projeto | Descrição | Demonstração |
| --- | --- | --- |
| **🔧 PROCAR** | Gestão para oficina mecânica: clientes, veículos, orçamentos, OS, inspeções, pagamentos e estoque. **Angular + Django REST + PostgreSQL + Docker**. | [Experimentar PROCAR](https://procar-portfolio-demo.vercel.app/) |
| **🤖 FOTA AI Agent** | Apoio à análise de commits e diffs, com impactos, riscos e orientações de validação. | [Experimentar o agente](https://fota-engineering-suite-demo.vercel.app/fota-ai-agent/) |
| **🔍 FOTA Log Analyzer** | Triagem de logs e organização de evidências e hipóteses de falha em atualizações OTA/FOTA. | [Experimentar o analisador](https://fota-engineering-suite-demo.vercel.app/fota-log-analyzer/) |
| **💡 GenAI Engineering Studio** | Laboratório independente de análise de commits e logs com exemplos sintéticos. | [Explorar o laboratório](https://andrews-viana-portfolio.vercel.app/workspace) |

> **Transparência:** PROCAR, FOTA Engineering Suite e este portfólio são implantações independentes. O PROCAR demonstrativo utiliza **banco isolado, dados fictícios e acesso somente leitura**. As versões públicas dos agentes FOTA são demonstrações com exemplos sintéticos, sem conexão a ferramentas ou dados internos de empresas.

## 🧩 Stack do portfólio

![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?style=flat-square&logo=css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)

- **Angular standalone** com rotas carregadas sob demanda e componentes separados por funcionalidades.
- **TypeScript** e modelos tipados para os dados públicos do portfólio.
- **CSS modular**, responsividade, temas claro/escuro e navegação acessível.
- **Vercel** para hospedagem do frontend e uma API serverless opcional do laboratório.
- **Histórico local no navegador** para experiências do laboratório, sem armazenamento de dados de visitantes no portfólio.

## 📂 Organização

```text
src/
├── app/
│   ├── core/
│   │   ├── data/                 # Perfil público e exemplos sintéticos
│   │   ├── models/               # Interfaces e tipos
│   │   └── services/             # Integrações e histórico local
│   ├── features/
│   │   ├── portfolio/            # Home, projetos e trajetória
│   │   ├── case-study/           # Estudos de caso
│   │   ├── overview/             # Apresentação do laboratório
│   │   ├── workspace/            # Experimentação
│   │   ├── history/              # Histórico local
│   │   └── about/                # Arquitetura e limites
│   └── shared/                   # Componentes reutilizáveis
├── styles/                       # Design system, temas e responsividade
api/analyze.ts                    # API serverless opcional
tests/analyze.test.ts             # Testes da API
vercel.json                       # Build, funções, rotas e headers
```

## ▶️ Executar localmente

**Requisitos:** Node.js compatível com `package.json` (22.12+ ou 24+) e npm.

```bash
git clone https://github.com/Andrews-Oliveira/Andrews-Viana-Portfolio.git
cd Andrews-Viana-Portfolio
npm install
npm run check
npm run test:api
npm start
```

Abra **http://localhost:4200**. Para gerar uma build de produção, execute `npm run build`.

No PowerShell com restrição de execução de scripts, pode ser necessário usar `npm.cmd` em vez de `npm`.

### Personalização

Os dados públicos ficam em [`src/app/core/data/portfolio.data.ts`](src/app/core/data/portfolio.data.ts). Alterações no texto dos projetos, links de demonstração, experiência e contatos podem ser feitas nesse arquivo.

A pasta `public/` contém os recursos estáticos autorizados para publicação. Não adicione dados pessoais de clientes, logs internos, credenciais ou código privado.

### Modo de IA opcional

O laboratório possui um **modo demonstrativo** baseado em amostras fictícias. A integração opcional com Gemini é implementada na função `api/analyze.ts`, não no navegador.

As variáveis de ambiente para esse modo devem ser configuradas **somente no servidor**, conforme [`.env.example`](.env.example) e [`docs/DEPLOY_VERCEL.md`](docs/DEPLOY_VERCEL.md). **Nunca** publique tokens, chaves de API ou códigos de acesso no frontend ou no Git.

## 🔐 Privacidade e responsabilidade técnica

- Os estudos de caso apresentam os projetos de alto nível, sem reproduzir materiais internos.
- As telas ilustrativas do portfólio não devem ser confundidas com capturas de sistemas corporativos.
- As demos FOTA públicas não executam integrações corporativas nem representam as ferramentas privadas.
- O backend e o banco da demonstração PROCAR são externos a este repositório.

---

<div align="center">

**Desenvolvido por Andrews Viana de Oliveira — Manaus, Amazonas**

[Portfólio](https://andrews-viana-portfolio.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/andrews-viana/) · [E-mail](mailto:andrewsviana2003@gmail.com)

</div>
