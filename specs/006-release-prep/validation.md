# Validação — Preparação de release do MVP

## Status

**Concluída — preview, CI, rotas diretas e smoke test manual de produção aprovados.**

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
- A publicação da `main` após a PR #12 responde HTTP `200` nas rotas `/`, `/rules`, `/rules/block`, `/search?q=saque`, `/rotation` e `/quiz`.
- O fallback de SPA está ativo em produção. A verificação visual e interativa foi repetida e aprovada no domínio estável.

## Critérios de aceite

| Critério | Evidência atual | Resultado |
| --- | --- | --- |
| CI em Pull Requests e `main` | Workflow com Node 24.11.0, `npm ci`, testes, lint e build; execução corrigida e aprovada | Aprovado |
| Sem secrets no repositório | Workflow usa somente `contents: read`; Vercel usa integração Git | Aprovado por inspeção |
| Fallback de rotas da SPA | Preview responde `200` em todas as rotas diretas testadas | Aprovado no preview |
| Home, busca, regras, rodízio e quiz | Smoke test manual realizado no preview | Aprovado no preview |
| Responsividade | Smoke test manual realizado em celular e desktop no preview | Aprovado no preview |
| Produção pública com HTTPS | `https://volley-coach-rho.vercel.app/` publicada a partir da `main` após a PR #12 | Aprovado |
| Rotas diretas em produção | `/`, `/rules`, `/rules/block`, `/search?q=saque`, `/rotation` e `/quiz` respondem HTTP `200` | Aprovado |
| Smoke test manual em produção | Home, busca, rodízio, quiz e responsividade confirmados no domínio estável | Aprovado em verificação manual |

## Limitações conhecidas

- O MVP continua sem backend, banco de dados, variáveis de ambiente ou autenticação.
- A validação final depende da publicação automática da Vercel após o merge; não requer tokens versionados nem deploy via CLI.
