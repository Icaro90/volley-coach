# Validação — Homologação e navegação de retorno

## Status

**Concluída — verificações automatizadas, validação externa e roteiro manual aprovados.**

**Publicação:** homologação confirmada em `hom` e produção confirmada após o merge manual em `main`.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Qualidade em todo commit | Workflow usa o evento `push` sem filtro de branch e executa testes, lint e build | Aprovado por execução remota em branch de feature e em `hom` |
| Promoção de `hom` | Job `promote-hom` depende de `quality`, só executa em `hom` e consulta PR aberta antes de criar outra | Aprovado: GitHub Actions autorizado a criar PRs e uma PR de `hom` para `main` foi aberta automaticamente |
| Sem merge automático | Workflow usa apenas `gh pr create`; não possui comando ou permissão de merge | Aprovado por inspeção |
| Deploys Vercel controlados | `vercel.json` desabilita `**` e habilita `hom` e `main` | Aprovado: branch de feature não publicou; `hom` publicou homologação e `main`, produção |
| Retornos consistentes | `BackLink` é reutilizado em regras, detalhe, busca, rodízio e quiz | Aprovado por teste, inspeção e validação visual em celular e desktop |
| Link semântico e destino correto | `BackLink` renderiza `Link` do React Router com texto acessível e `href` recebido | Aprovado por teste unitário |
| Sem dependências ou backend | Alterações usam React Router, GitHub Actions e Vercel já existentes | Aprovado por inspeção |

## Verificações automatizadas

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Lint | Aprovado | `npm run lint` executado com sucesso nesta Issue. |
| Testes | Aprovado | 17 arquivos e 62 testes aprovados nesta Issue. |
| Build de produção | Aprovado | `npm run build` executado com sucesso nesta Issue. |

## Roteiro de validação manual e externa executado

1. `hom` foi criada a partir de `main`; `hom` e `main` receberam ruleset com bloqueio de exclusão.
2. A opção para GitHub Actions criar Pull Requests foi habilitada nas configurações do repositório.
3. Um push em branch de feature executou o job `quality` com sucesso e não executou o job de promoção.
4. A Vercel não publicou deploy automático para a branch de feature.
5. O merge em `hom` publicou a homologação na Vercel.
6. Após a qualidade passar, o workflow abriu uma única Pull Request de `hom` para `main`.
7. A PR foi revisada e mesclada manualmente em `main`; a Vercel publicou a produção.
8. Em celular e desktop, regras, detalhe, busca, rodízio e quiz exibiram retorno com foco visível e destinos contextuais corretos.

## Limitações conhecidas

- O workflow não faz merge automático de `hom` em `main`.
- A URL estável de homologação, se desejada, depende de configuração do projeto no painel da Vercel.
- A validação de eventos GitHub e deploys Vercel exige pushes e merges reais; não é reproduzível apenas com testes unitários locais.
