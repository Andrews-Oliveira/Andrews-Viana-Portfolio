# Personalização antes de publicar

1. Revise todos os fatos profissionais em `src/app/core/data/portfolio.data.ts`.
2. Insira seu GitHub, LinkedIn e e-mail REAL no objeto `social`. No site público, nenhum desses dados é preenchido automaticamente.
3. Se desejar um PDF, salve `public/curriculo.pdf` e coloque `resume: '/curriculo.pdf'` em `social`.
4. As cores ficam em `src/styles/tokens.css`: `--violet`, `--coral`, `--teal`, `--page`, `--ink`.
5. O hero é um componente próprio (`features/portfolio/components/portfolio-hero.component.ts`), e os demais blocos seguem padrão standalone.
6. Não suba `.env.local` ou segredos. Confira `git status` antes do push.
7. Mantenha descrições dos projetos internos em nível alto e sem material confidencial.
8. Antes de enviar a candidatura ao iFood, verifique textos, rotas, responsividade, links e relatórios demonstrativos.
