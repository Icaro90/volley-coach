# Plano de tarefas — Regras adicionais

Todas as tarefas pertencem à branch `feat/007-additional-rules` e começam na coluna **Backlog** do GitHub Projects. Mover uma tarefa para **Doing** apenas quando suas dependências estiverem concluídas.

## Issue 1 — Revisar fontes e preparar conteúdo das novas regras

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** revisar o regulamento FIVB vigente para invasão, bloqueio, substituição e ataque de fundo; definir textos, exemplos, consequências, termos de busca e referências antes de alterar o catálogo.
- **Aprendizado:** conteúdo educativo é uma regra de domínio. Separar pesquisa de fonte da interface evita que decisões de produto sejam escondidas dentro de componentes ou SVGs.
- **Critérios de conclusão:** cada tema possui regra FIVB, URL, data de revisão e texto simplificado revisado; a regra de substituição registra a orientação oficial vigente aplicável; termos alternativos planejados cobrem dúvidas naturais.
- **Commit sugerido:** `docs(content): review additional volleyball rules`

## Issue 2 — Adicionar invasão e bloqueio ao catálogo

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** adicionar as regras de invasão e bloqueio em `rules.ts`, com SVGs locais consistentes, metadados de fonte e termos de busca.
- **Aprendizado:** ampliar um modelo tipado existente é mais seguro que criar uma estrutura paralela; TypeScript aponta todos os campos obrigatórios de uma nova regra.
- **Critérios de conclusão:** `/rules` passa a exibir oito regras; os dois detalhes possuem todos os campos do contrato; diagramas deixam clara a linha central ou a rede; testes de catálogo e busca cobrem os dois itens.
- **Commit sugerido:** `feat(rules): add invasion and block rules`

## Issue 3 — Adicionar substituição e ataque de fundo ao catálogo

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** adicionar as regras de substituição e ataque de jogadores da linha de trás, com seus diagramas, fontes e termos de busca.
- **Aprendizado:** exemplos precisam delimitar o que a regra ensina. Em vez de reproduzir todo o regulamento, o conteúdo apresenta o cenário básico e indica suas fronteiras.
- **Critérios de conclusão:** `/rules` passa a exibir dez regras; detalhes e diagramas explicam a situação inicial; termos de busca encontram os dois itens; testes de catálogo e busca cobrem os dois temas.
- **Commit sugerido:** `feat(rules): add substitution and back-row attack rules`

## Issue 4 — Validar integração de lista, detalhe e busca

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issues 2 e 3
- **Objetivo:** revisar o catálogo final de dez regras, URLs diretas, busca por termos alternativos e comportamento das páginas existentes sem introduzir nova rota ou estado global.
- **Aprendizado:** uma extensão de dados deve ser testada nos consumidores reais. Isso é semelhante a validar que um novo registro de domínio passa por todos os casos de uso existentes sem precisar reescrevê-los.
- **Critérios de conclusão:** testes unitários verificam dez identificadores únicos, quatro novos termos de busca e detalhes acessíveis; lint e build passam; nenhuma regra anterior muda de URL ou perde conteúdo.
- **Commit sugerido:** `test(rules): cover additional rules integration`

## Issue 5 — Validar fluxo completo das regras adicionais

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 4
- **Objetivo:** validar visualmente lista, detalhes, diagramas, busca, teclado e responsividade; registrar evidências e limitações.
- **Aprendizado:** testes de dados garantem o contrato; validação manual confirma se o diagrama e a explicação realmente comunicam a regra para iniciantes.
- **Critérios de conclusão:** todos os critérios de aceite estão aprovados ou possuem limitação explícita; `npm run test`, `npm run lint` e `npm run build` passam; `validation.md` registra as evidências.
- **Commit sugerido:** `docs(spec): add additional rules validation record`

## Ordem de execução

```text
Issue 1
  |\
  | Issue 2
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
