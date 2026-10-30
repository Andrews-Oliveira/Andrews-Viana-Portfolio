# PROCAR — versão pública do portfólio

A rota `/case/procar` agora exibe um estudo de caso baseado no código real recuperado do PROCAR. A logo original foi preservada.

Este pacote é **apenas o portfólio Angular**. A página do PROCAR é um estudo de caso navegável, não um deploy operacional do sistema da oficina.

## Para disponibilizar o PROCAR funcionando

O sistema original recuperado tem frontend Angular, Django REST, autenticação e PostgreSQL. A Vercel hospeda o portfólio, mas não passa a hospedar automaticamente a API Django e o banco.

Use uma instalação pública separada do PROCAR, com banco e usuários fictícios, isolamento dos dados da oficina e proteção administrativa. Depois adicione o endereço de demonstração no card. Não publique tokens, senhas ou bancos reais.

## Compilação local do portfólio

`npm.cmd install` -> `npm.cmd run check` -> `npm.cmd run test:api` -> `npm.cmd run build`

Após testar, `git add .`, `git commit` e `git push origin main` para disparar o deploy na Vercel.
