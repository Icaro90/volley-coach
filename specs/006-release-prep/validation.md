# Validação — Preparação de release do MVP

## Status

**Preview aprovado. Produção pendente de nova publicação após o merge da Spec 006 na `main`.**

## Evidências de preview

- **URL de preview:** `https://volley-coach-plxlgnh0o-noventa.vercel.app/`
- **CI:** workflow `Frontend quality` corrigido e aprovado antes da validação manual.
- **Rotas diretas:** as rotas abaixo responderam HTTP `200` no preview, confirmando o rewrite da SPA:
  - `/`
  - `/rules`
  - `/rules/block`
  - `/search?q=saque`
  - `/rotation`
  - `/quiz`
- **Verificação manual:** concluída no preview para Home, busca, regras, rodízio, quiz e responsividade.

## Produção

- **URL estável:** `https://volley-coach-rho.vercel.app/`
- Antes do merge, somente `/` responde com sucesso; rotas profundas retornam `404`, pois a produção ainda representa a `main` sem `frontend/vercel.json`.
- Após o merge, a Vercel deve publicar novamente a `main`. Repetir as rotas de preview e a verificação manual na URL estável antes de marcar esta spec como concluída.

## Critérios de aceite

| Critério | Evidência atual | Resultado |
| --- | --- | --- |
| CI em Pull Requests e `main` | Workflow com Node 24.11.0, `npm ci`, testes, lint e build; execução corrigida e aprovada | Aprovado |
| Sem secrets no repositório | Workflow usa somente `contents: read`; Vercel usa integração Git | Aprovado por inspeção |
| Fallback de rotas da SPA | Preview responde `200` em todas as rotas diretas testadas | Aprovado no preview |
| Home, busca, regras, rodízio e quiz | Smoke test manual realizado no preview | Aprovado no preview |
| Responsividade | Smoke test manual realizado em celular e desktop no preview | Aprovado no preview |
| Produção pública com HTTPS | Domínio estável existe, mas aguarda publicação da `main` com a configuração de fallback | Pendente após merge |
| Smoke test em produção | Depende da nova publicação de produção | Pendente após merge |

## Limitações conhecidas

- O MVP continua sem backend, banco de dados, variáveis de ambiente ou autenticação.
- A validação final depende da publicação automática da Vercel após o merge; não requer tokens versionados nem deploy via CLI.
