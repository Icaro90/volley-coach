# Plano de tarefas — Quiz rápido

Todas as tarefas pertencem à branch `feat/005-quiz` e começam na coluna **Backlog** do GitHub Projects. Mover uma tarefa para **Doing** apenas quando suas dependências estiverem concluídas.

## Issue 1 — Modelar o conteúdo do quiz

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** revisar o conteúdo contra a FIVB e criar cinco perguntas estáticas tipadas, com alternativas, resposta correta, explicação e metadados de fonte.
- **Aprendizado:** conteúdo também é dado de domínio. Um tipo explícito impede perguntas sem alternativa correta, explicação ou referência, como uma validação de contrato em um DTO Java.
- **Critérios de conclusão:** existem exatamente cinco perguntas; cada uma trata um tema da Spec 002; todas têm alternativas únicas, resposta correta, explicação simples e fonte revisada; um teste protege a integridade do catálogo.
- **Commit sugerido:** `feat(quiz): add reviewed quiz questions`

## Issue 2 — Implementar e testar o reducer do quiz

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** criar o modelo de estado e o reducer puro que controla início, seleção de resposta, confirmação, avanço, resultado e reinício.
- **Aprendizado:** `useReducer` aplica o padrão reducer: a interface envia ações e uma função pura decide o próximo estado. É semelhante a centralizar transições de um caso de uso em vez de espalhá-las por controllers.
- **Critérios de conclusão:** ações inválidas não avançam o quiz; confirmar resposta incrementa a pontuação somente quando correto; a quinta resposta leva ao resultado; reiniciar restaura o estado inicial; testes cobrem todas as transições.
- **Commit sugerido:** `feat(quiz): add quiz state reducer`

## Issue 3 — Criar os componentes de pergunta e feedback

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 1 e 2
- **Objetivo:** criar componentes acessíveis para apresentar uma pergunta, selecionar uma alternativa e mostrar feedback após a confirmação.
- **Aprendizado:** componentes recebem estado e callbacks por props; eles não devem conhecer a pontuação total ou decidir transições do quiz. Isso mantém a interface parecida com uma camada de apresentação.
- **Critérios de conclusão:** alternativas usam `fieldset` e controles de seleção semânticos; não há avanço sem seleção; feedback deixa clara a resposta correta e a explicação; teclado e foco funcionam; componentes possuem testes de comportamento relevantes.
- **Commit sugerido:** `feat(quiz): add question and feedback components`

## Issue 4 — Integrar a página do quiz e o resultado final

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 2 e 3
- **Objetivo:** substituir o placeholder de `/quiz` por `QuizPage`, conectando introdução, pergunta, feedback, resultado, reinício e link para regras básicas.
- **Aprendizado:** a página compõe dados, reducer e componentes; ela é o equivalente mais próximo de um controller de interface, mas sem colocar regras de transição dentro do JSX.
- **Critérios de conclusão:** rota abre a página real; uma pergunta é exibida por vez; resultado mostra `0` a `5` acertos; reinício não recarrega a página; link para `/rules` funciona; testes cobrem o fluxo essencial.
- **Commit sugerido:** `feat(quiz): add interactive quick quiz page`

## Issue 5 — Validar o fluxo completo do quiz

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 4
- **Objetivo:** validar conteúdo, estados, teclado, celular/desktop, testes, lint e build; registrar evidências.
- **Aprendizado:** testes unitários protegem transições específicas; a validação manual verifica que o fluxo completo continua compreensível para a pessoa usuária.
- **Critérios de conclusão:** todos os critérios de aceite são aprovados ou têm limitação explícita; `npm run test`, `npm run lint` e `npm run build` passam; evidências são registradas em `validation.md`.
- **Commit sugerido:** `docs(spec): add quiz validation record`

## Ordem de execução

```text
Issue 1
  |
Issue 2
  |
Issue 3
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
