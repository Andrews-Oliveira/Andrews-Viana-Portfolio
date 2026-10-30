# Publicar na Vercel

## Pré-requisitos

- Repositório GitHub do projeto (com `.env.local` excluído)
- Node.js compatível com `package.json`
- Build validado localmente

## Validação

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run test:api
npm.cmd run build
```

Ao importar o repositório na Vercel, mantenha o `vercel.json` versionado. Ele especifica a saída Angular em `dist/andrews-viana-portfolio/browser`, rewrites para SPA e a função `api/analyze.ts`.

O site e o modo demo funcionam sem Gemini API key. **Não é necessário ativar o modo live para apresentar o portfólio.**

## Gemini no servidor (opcional)

Use, quando tiver validado o modelo disponível:

- `LIVE_AI_ENABLED=true`
- `GEMINI_API_KEY` (secreta)
- `GEMINI_MODEL` (identificador válido e autorizado na conta)
- `PORTFOLIO_ACCESS_CODE` (segredo forte de pelo menos 12 caracteres)

Teste com `npx.cmd vercel dev` e confirme limite de consumo e custos antes de liberar acessos. Um código compartilhado não é uma solução completa de identidade/rate limiting; mantenha o modo live restrito para uso pessoal.

## Pós-deploy

Valide `https://SEU-SITE/`, `/workspace`, `/history`, `/about` e refresh direto em rotas profundas. Confira a ausência de chaves no JavaScript entregue ao navegador e dos arquivos `.env` no GitHub.
