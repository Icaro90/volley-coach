# Plano de tarefas — Preparação de release do MVP

Todas as tarefas pertencem à branch `chore/006-release-prep`. Elas devem passar pelo fluxo **Backlog → Todo → Doing → Review → Done** no GitHub Projects.

**Status da execução:** todas as quatro issues foram concluídas e a release do MVP está publicada em produção.

## Issue 1 — Configurar fallback de rotas para a SPA na Vercel

- **Status:** Concluída
- **Estimativa:** 30 min a 1h
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** adicionar `frontend/vercel.json` para que acessos diretos às rotas do React Router retornem a aplicação, em vez de uma página 404 da hospedagem.
- **Aprendizado:** uma SPA é diferente de uma aplicação Spring MVC: o servidor não possui controllers para cada rota de tela. O host precisa devolver o `index.html`, e o React Router decide qual página renderizar no navegador.
- **Critérios de conclusão:** rewrite para `index.html` cobre rotas diretas; não altera rotas do React Router, build nem comportamento local; a configuração está coerente com a ADR 006.
- **Commit sugerido:** `chore(vercel): configure spa route fallback`

## Issue 2 — Criar workflow de qualidade no GitHub Actions

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** criar workflow para Pull Requests direcionadas à `main` e pushes na `main`, executando instalação reproduzível, testes, lint e build do frontend.
- **Aprendizado:** o workflow é o equivalente a uma pipeline de CI: cada execução começa em ambiente limpo, instala dependências pelo lockfile e só aprova o artefato se todas as verificações passarem.
- **Critérios de conclusão:** workflow usa Node 24, `npm ci`, cache npm e diretório `frontend/`; executa `npm run test`, `npm run lint` e `npm run build`; possui permissão mínima de leitura; não contém secrets.
- **Commit sugerido:** `ci(frontend): add quality workflow`

## Issue 3 — Documentar processo de deploy e smoke test

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issues 1 e 2
- **Objetivo:** atualizar o README com pré-requisitos, configuração inicial da Vercel, URL de produção como campo a preencher e checklist de smoke test após deploy.
- **Aprendizado:** documentação operacional transforma decisões implícitas em um processo reproduzível; é a versão leve de um runbook de produção.
- **Critérios de conclusão:** README explica raiz do projeto Vercel (`frontend/`), comandos de qualidade, comportamento de preview e produção, e smoke test para Home, busca, regras, rodízio, quiz e rotas diretas; nenhum token é documentado ou versionado.
- **Commit sugerido:** `docs(release): add deployment and smoke test guide`

## Issue 4 — Configurar Vercel e validar a publicação pública

- **Status:** Concluída
- **Estimativa:** 1h a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 1, 2 e 3
- **Objetivo:** conectar o repositório à Vercel, configurar o diretório raiz como `frontend/`, obter a URL pública e executar o smoke test de produção.
- **Aprendizado:** parte da infraestrutura é configuração gerenciada fora do Git. O repositório documenta o contrato; a plataforma mantém credenciais e publicação.
- **Critérios de conclusão:** produção em HTTPS acessível pela `main`; rotas diretas funcionam; workflow aparece no GitHub para uma Pull Request ou push elegível; URL de produção é registrada no README; smoke test é concluído.
- **Commit sugerido:** `docs(release): record production deployment validation`

## Ordem de execução

```text
Issues 1 e 2
      |
      v
   Issue 3
      |
      v
   Issue 4
```

## Definição de pronto para cada issue

- Critérios de conclusão atendidos.
- Mudanças revisadas antes do commit.
- Lint, testes e build executados quando houver alteração no frontend ou workflow.
- Documentação atualizada quando a configuração depender de ação fora do repositório.
- Commit segue Conventional Commits.
