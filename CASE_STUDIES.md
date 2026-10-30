# Portfólio — Estudos de caso de IA (v2.2)

Adicionadas páginas independentes para demonstrar sua experiência profissional com dois agentes de IA:

- `/case/fota-ai-agent`: contexto, problema, solução, processamento de diffs, contribuições, resultados e tecnologias.
- `/case/fota-log-analyzer`: investigação de logs, triagem, hipóteses de causa, contribuições, entregas e limitações.

Os cards 03 e 04 na home apontam diretamente para essas páginas. O PROCAR mantém o destaque de primeira venda comercial. O modo dark da v2.1 é preservado.

## Executar

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run test:api
npm.cmd run build
npm.cmd start
```

Acesse `/case/fota-ai-agent` e `/case/fota-log-analyzer` e confira também a navegação ao clicar em **Explorar** na home. Os caminhos devem continuar funcionando após uma atualização da página (roteamento SPA configurado no `vercel.json`).

## Inserir capturas reais autorizadas

Consulte `public/screenshots/README.md`. Os estudos de caso suportam uma galeria opcional, com arquivos no diretório `public/screenshots/`, sem necessidade de modificar componentes Angular.

**Cuidado:** use apenas imagens cujo conteúdo público esteja abrangido pela autorização; evite dados pessoais, chaves e identificadores sensíveis. Não são apresentadas métricas de produtividade não medidas.

## Situação da validação

Os cinco testes automatizados da API passaram no ambiente de geração. A validação de build Angular não foi concluída devido à indisponibilidade da instalação de dependências neste ambiente. Antes de enviar ao GitHub, rode `npm.cmd run check`, `npm.cmd run test:api` e `npm.cmd run build` no Windows.
