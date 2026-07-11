# Plano de tarefas — Busca de regras

Todas as tarefas pertencem à branch `feat/003-search` e começam na coluna **Backlog** do GitHub Projects. Mover uma tarefa para **Doing** somente quando suas dependências estiverem concluídas.

## Issue 1 — Configurar testes unitários no frontend

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** adicionar Vitest e um script de teste ao frontend, com uma verificação inicial executável no projeto Vite + TypeScript.
- **Aprendizado:** testes unitários verificam uma unidade isolada de código, de forma parecida com testes de service no Spring; eles são mais rápidos e específicos que uma validação manual da página inteira.
- **Critérios de conclusão:** existe um comando `npm run test`, ele executa pelo menos um teste de exemplo e lint/build continuam funcionando.
- **Commit sugerido:** `chore(frontend): configure unit testing`

## Issue 2 — Implementar e testar a lógica local de busca

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** criar a função pura `searchRules` para normalizar texto e filtrar título, resumo e explicação das regras, com testes para maiúsculas/minúsculas, acentos, nenhum resultado e termo vazio.
- **Aprendizado:** funções puras não dependem de React, URL ou DOM; recebem dados e retornam dados, o que as torna simples de testar e reutilizar.
- **Critérios de conclusão:** `pontuacao` encontra `Pontuação`, buscas não diferenciam caixa, termos vazios não retornam resultados e os testes cobrem os cenários definidos.
- **Commit sugerido:** `feat(search): add normalized rules search`

## Issue 3 — Transformar o campo da Home em formulário de busca

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 2
- **Objetivo:** evoluir o campo atual para um formulário acessível que envia termos válidos para `/search?q=...` e apresenta orientação local para envio vazio.
- **Aprendizado:** inputs controlados usam estado local apenas enquanto a pessoa digita; após o envio, a URL assume o papel de estado compartilhável da busca.
- **Critérios de conclusão:** Enter e botão de envio iniciam a busca; espaço em branco não navega; o campo possui label, mensagem de orientação e foco adequado.
- **Commit sugerido:** `feat(search): submit queries from home`

## Issue 4 — Criar a página de resultados de busca

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 2
- **Objetivo:** criar a rota `/search`, ler `q` com `useSearchParams` e apresentar resultado, nenhum resultado ou instrução para termo vazio.
- **Aprendizado:** parâmetros de consulta são como query parameters em um controller Spring, mas ficam no navegador e descrevem o estado da tela.
- **Critérios de conclusão:** a página mostra o termo e a quantidade de resultados; resultados levam ao detalhe; estados vazio e sem resultado são claros e incluem caminho para `/rules`.
- **Commit sugerido:** `feat(search): add rules search results page`

## Issue 5 — Validar fluxo completo da busca

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issues 3 e 4
- **Objetivo:** validar busca pela Home, URLs diretas, teclado, celular/desktop, testes unitários, lint e build; registrar evidências.
- **Aprendizado:** testes unitários e validação de fluxo se complementam: um protege regras de comparação, o outro confirma que as partes integradas atendem a pessoa usuária.
- **Critérios de conclusão:** todos os critérios de aceite são registrados como aprovados ou possuem limitação explícita; `npm run test`, `npm run lint` e `npm run build` passam.
- **Commit sugerido:** `docs(spec): add search validation record`

## Ordem de execução

```text
Issue 1
  |
Issue 2
  |\
  | Issue 3
  |
Issue 4
  |
Issue 5
```

## Definição de pronto para cada Issue

- Critérios de conclusão atendidos.
- Testes relevantes executados quando a base de testes estiver disponível.
- Lint e build executados quando houver alteração no frontend.
- Alteração revisada antes do commit.
- Commit segue Conventional Commits.
