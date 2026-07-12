# Validação — Homologação e navegação de retorno

## Status

**Em validação — verificações locais aprovadas; evidências de GitHub e Vercel pendentes.**

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Qualidade em todo commit | Workflow usa o evento `push` sem filtro de branch e executa testes, lint e build | Aprovado por inspeção; pendente confirmar execução remota em uma branch de feature |
| Promoção de `hom` | Job `promote-hom` depende de `quality`, só executa em `hom` e consulta PR aberta antes de criar outra | Aprovado por inspeção; pendente confirmar criação remota |
| Sem merge automático | Workflow usa apenas `gh pr create`; não possui comando ou permissão de merge | Aprovado por inspeção |
| Deploys Vercel controlados | `vercel.json` desabilita `**` e habilita `hom` e `main` | Aprovado por inspeção; pendente confirmar no painel da Vercel |
| Retornos consistentes | `BackLink` é reutilizado em regras, detalhe, busca, rodízio e quiz | Aprovado por teste e inspeção; pendente validação visual |
| Link semântico e destino correto | `BackLink` renderiza `Link` do React Router com texto acessível e `href` recebido | Aprovado por teste unitário |
| Sem dependências ou backend | Alterações usam React Router, GitHub Actions e Vercel já existentes | Aprovado por inspeção |

## Verificações automatizadas

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Lint | Aprovado | `npm run lint` executado com sucesso nesta Issue. |
| Testes | Aprovado | 17 arquivos e 62 testes aprovados nesta Issue. |
| Build de produção | Aprovado | `npm run build` executado com sucesso nesta Issue. |

## Roteiro de validação manual e externa

1. Confirme que `hom` foi criada a partir de `main` e que ambas possuem ruleset com bloqueio de exclusão.
2. Envie um commit para uma branch de feature e confirme no GitHub Actions que o job `quality` executou testes, lint e build, sem job de promoção.
3. Confirme na Vercel que essa branch de feature não gerou deploy automático.
4. Faça merge de uma Pull Request em `hom` e confirme que a Vercel publicou a homologação.
5. Confirme que o workflow abriu uma única Pull Request de `hom` para `main` após o job `quality` passar.
6. Envie outro commit para `hom` enquanto a PR estiver aberta e confirme que o job não criou uma duplicata.
7. Revise e faça merge manual da PR em `main`; confirme o deploy de produção na Vercel.
8. Em celular e desktop, abra regras, detalhe, busca, rodízio e quiz; confirme o botão de retorno, o foco visível com `Tab` e os destinos contextuais.

## Limitações conhecidas

- O workflow não faz merge automático de `hom` em `main`.
- A URL estável de homologação, se desejada, depende de configuração do projeto no painel da Vercel.
- A validação de eventos GitHub e deploys Vercel exige pushes e merges reais; não é reproduzível apenas com testes unitários locais.
