# Andrews Viana — Portfolio v2.1

Portfólio pessoal de **Andrews Viana de Oliveira**. Uma experiência **dark-first** com alternância entre temas e layout responsivo, feita com **Angular standalone + TypeScript** e um laboratório independente de IA aplicada à Engenharia de Software.

> **Esta é uma versão redesenhada do zero na apresentação visual.** O funcionamento dos analisadores do projeto anterior foi preservado, incluindo os cinco testes da API. O modo demonstrativo funciona com exemplos fictícios; análises verdadeiras com Gemini exigem configuração serverless separada.

## Atualização 2.1 — tema e experiências reais

- Tema escuro por padrão, opção **Claro / Escuro** na barra superior e preferência salva localmente no navegador.
- **PROCAR:** seu primeiro sistema comercial vendido a um cliente real.
- **FOTA AI Agent e FOTA Log Analyzer:** ferramentas de apoio à análise técnica utilizadas internamente pela web e pelo terminal, descritas em alto nível sem publicar dados da empresa.
- GitHub pessoal configurado como contato, sem links fictícios para LinkedIn ou e-mail.
- As imagens dos projetos corporativos continuam ilustrativas. Não substitua por capturas internas sem autorização e revisão de confidencialidade.

## Experiência do site

- **/** — home editorial com apresentação, trajetória, formação, projetos, tecnologias e contato.
- **/overview** — visão geral do laboratório GenAI Engineering Studio.
- **/workspace** — Commit Analyzer e Log Analyzer, com exemplos sintéticos e resultado estruturado.
- **/history** — histórico local de análises do navegador.
- **/about** — arquitetura, segurança e restrições do laboratório.

### Estrutura de engenharia

```text
src/
  app/
    core/
      data/portfolio.data.ts         <- conteúdo público: altere aqui
      data/demo-fixtures.ts          <- exemplos totalmente fictícios
      models/                       <- modelos tipados
      services/                     <- HTTP e histórico local
    features/
      portfolio/                     <- home e componentes editoriais
        components/
          portfolio-hero.component.ts
          career-timeline.component.ts
          project-gallery.component.ts
      overview/                      <- sobre o laboratório
      workspace/                     <- fluxo de análise
      history/                       <- últimos resultados
      about/                         <- arquitetura
    shared/
      lab-nav/                       <- navegação secundária
      result-panel/                  <- relatório reutilizável
  styles/
    tokens.css                       <- cores, tipografia, botões
    shell.css                        <- cabeçalho, navegação responsiva
    portfolio.css                    <- landing pessoal, projetos, cards
    laboratory.css                   <- laboratório e seus componentes
    responsive.css                   <- breakpoints
    dark.css                         <- tema escuro, sem alterar o tema claro
api/analyze.ts                      <- função de servidor com Gemini opcional
tests/analyze.test.ts                <- testes automatizados da API
vercel.json                         <- hospedagem estática + function + SPA fallback
```

## Executar no Windows (PowerShell)

É recomendado Node.js compatível com as versões declaradas em `package.json` (22.12+ ou 24+).

```powershell
cd C:\Users\andre\Documents\andrews-viana-portfolio-premium
npm.cmd install
npm.cmd run check
npm.cmd run test:api
npm.cmd run build
npm.cmd start
```

Abra **http://localhost:4200**. Use `npm.cmd`, pois o PowerShell do Windows pode bloquear `npm.ps1`.

### Ajuste antes da publicação

Edite **`src/app/core/data/portfolio.data.ts`** para corrigir qualquer texto da sua trajetória e informar suas URLs profissionais reais em `social`:

```typescript
social: {
  github: 'https://github.com/SEU-USUARIO',
  linkedin: 'https://www.linkedin.com/in/SEU-PERFIL/',
  email: 'voce@exemplo.com'
}
```

Esses links são **apenas exemplos no README**. Nenhum URL foi inventado dentro da aplicação. Remova links sem conteúdo ou que não queira publicar. Para disponibilizar o currículo, coloque um PDF público seu em `public/curriculo.pdf` e configure `resume: '/curriculo.pdf'`.

## IA / API opcional

O modo **Demo estática** aceita amostras sintéticas já disponíveis e apresenta saídas determinísticas. Não gera relatórios inéditos com IA real.

Para o modo real, a função `api/analyze.ts` exige `LIVE_AI_ENABLED=true`, `GEMINI_API_KEY`, `PORTFOLIO_ACCESS_CODE` (mínimo 12 caracteres) e `GEMINI_MODEL` configurados **somente no servidor**. Em desenvolvimento, o Angular (`npm start`) **não executa a função**; utilize o Vercel CLI (`npx.cmd vercel dev`) para testar a rota de API.

**Antes de ativar live**, confirme que o modelo desejado existe na sua conta/provedor, revise limites de cota, custos e proteção contra abusos. Não coloque a chave no `environment.ts`, nos serviços Angular, no Git ou no código cliente.

## Vercel

O `vercel.json` declara:

- `npm run build`
- `dist/andrews-viana-portfolio/browser` como pasta pública
- redirecionamento SPA para rotas Angular
- função `api/analyze.ts`

Publique o repositório pessoal e importe-o na Vercel. Mantenha a função live desabilitada até concluir a revisão de segurança e configurar os segredos no painel do servidor. Verifique se o plano de hospedagem atende ao seu uso.

## Segurança e transparência

- **FOTA AI Agent / FOTA Log Analyzer**: apresentados como experiências profissionais de alto nível. Não publicamos código, logs, dados nem arquitetura internos.
- **GenAI Engineering Studio**: implementação pessoal independente, construída como demonstração pública com dados sintéticos.
- **PROCAR**: apresentação como projeto; sem dados reais de clientes ou acesso ao sistema privado.
- Os cartões de projeto e a arte do hero são **ilustrações de interface**, não capturas de sistemas corporativos.
- Links de contato são opcionais e exibidos apenas se forem preenchidos.

## Verificação desta entrega

- Foram executados localmente **5 testes de API**, todos passando.
- Foram geradas e inspecionadas prévias estáticas da composição visual para desktop e celular, sem overflow horizontal nas larguras testadas.
- O `npm install` **não concluiu neste ambiente**, portanto `npm run check` e o build Angular completo desta versão precisam ser validados no seu Windows. Não confundir a prévia estática com um build Angular final.

## Próximos aprimoramentos

Adicionar URL de GitHub e LinkedIn, currículo, screenshots ou imagens autorizadas dos projetos, avaliações mensuráveis do LLM e domínio próprio opcional.
