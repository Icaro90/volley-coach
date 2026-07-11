# Plano de tarefas — Regras básicas

Todas as tarefas pertencem à branch `feat/002-rules` e começam na coluna **Backlog** do GitHub Projects. Mover uma tarefa para **Doing** somente quando suas dependências estiverem concluídas.

## Issue 1 — Validar conteúdo e modelar as regras básicas

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** consultar a edição 2025–2028 das regras oficiais da FIVB, escrever explicações voltadas a iniciantes para as seis regras e criar o modelo TypeScript estático com metadados de fonte e revisão.
- **Aprendizado:** separar o modelo de conteúdo dos componentes é semelhante a definir um DTO/contrato antes de escrever uma camada de apresentação.
- **Critérios de conclusão:** há seis itens com identificador estável, título, resumo, explicação, exemplo, resultado da jogada, referência FIVB e data de revisão; o texto não reproduz o regulamento integralmente.
- **Commit sugerido:** `feat(rules): add reviewed rules content`

## Issue 2 — Criar a página de lista de regras

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** substituir o placeholder de `/rules` por uma lista clara dos seis temas, com links para os detalhes.
- **Aprendizado:** renderização de listas tipadas no React e composição de componentes orientada a dados.
- **Critérios de conclusão:** a página apresenta as seis regras, cada item exibe título e resumo e todos os links levam ao identificador correto.
- **Commit sugerido:** `feat(rules): add rules list page`

## Issue 3 — Criar diagramas SVG para pontuação, saque e três toques

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** criar três diagramas SVG simples e consistentes para apoiar as regras de pontuação, saque e três toques.
- **Aprendizado:** SVG é um formato vetorial adequado para diagramas de produto: leve, escalável e versionável no Git.
- **Critérios de conclusão:** existem três SVGs locais com representação clara da situação, sem texto essencial embutido apenas na imagem.
- **Commit sugerido:** `feat(rules): add first rules diagrams`

## Issue 4 — Criar diagramas SVG para faltas e bola dentro/fora

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** criar três diagramas SVG simples para condução/dois toques, toque na rede e bola dentro ou fora.
- **Aprendizado:** consistência visual e texto alternativo fazem parte da acessibilidade de conteúdo ilustrado.
- **Critérios de conclusão:** existem três SVGs locais consistentes com os anteriores e cada uso planejado possui texto alternativo descritivo.
- **Commit sugerido:** `feat(rules): add remaining rules diagrams`

## Issue 5 — Implementar rota de detalhe da regra

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 1, 3 e 4
- **Objetivo:** criar a rota `/rules/:ruleId`, buscar a regra nos dados estáticos e apresentar explicação, exemplo, resultado, diagrama, fonte e retorno à lista.
- **Aprendizado:** parâmetros de rota são equivalentes aos valores recebidos em `@PathVariable` no Spring; a página converte o identificador da URL no conteúdo correspondente.
- **Critérios de conclusão:** cada um dos seis links abre o detalhe correto, diagramas têm texto alternativo e um identificador inválido mostra conteúdo não encontrado com retorno para `/rules`.
- **Commit sugerido:** `feat(rules): add rule detail pages`

## Issue 6 — Validar lista e detalhes de regras

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issues 2 e 5
- **Objetivo:** validar todos os critérios de aceite em celular e desktop, navegação por teclado, foco visível, referências de conteúdo, lint e build; registrar a evidência.
- **Aprendizado:** qualidade é verificável por critérios objetivos, não apenas por impressão visual.
- **Critérios de conclusão:** todos os critérios da spec são registrados como aprovados ou possuem uma limitação explicitamente documentada; `npm run lint` e `npm run build` passam.
- **Commit sugerido:** `docs(spec): add rules validation record`

## Ordem de execução

```text
Issue 1
 ├─ Issue 2
 ├─ Issue 3
 └─ Issue 4
      \   /
      Issue 5
        |
      Issue 6
```

## Definição de pronto para cada Issue

- Critérios de conclusão atendidos.
- Conteúdo de regra confrontado com a fonte oficial indicada.
- Lint e build executados quando houver alteração no frontend.
- Alteração revisada antes do commit.
- Commit segue Conventional Commits.
