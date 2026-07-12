# Plano de tarefas — Rodízio

Todas as tarefas pertencem à branch `feat/004-rotation` e começam na coluna **Backlog** do GitHub Projects. Mover uma tarefa para **Doing** apenas quando suas dependências estiverem concluídas.

## Issue 1 — Modelar e testar a sequência de rodízio

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** registrar a fonte oficial consultada, modelar as seis posições da formação inicial e criar uma função pura que devolve a próxima formação no sentido horário.
- **Aprendizado:** separar dados e transformação da interface equivale a manter uma regra de domínio fora de um controller ou componente. A função recebe uma formação e devolve outra, sem depender de React ou DOM.
- **Critérios de conclusão:** posições e sentido de avanço são verificados contra a fonte FIVB; tipos representam as seis posições; a função preserva os seis participantes e gera a sequência correta; testes cobrem uma rotação, seis rotações e imutabilidade da entrada.
- **Commit sugerido:** `feat(rotation): add rotation sequence model`

## Issue 2 — Criar o diagrama de quadra acessível

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** criar um componente de quadra em HTML/CSS que posicione as seis pessoas da formação, identifique frente/fundo e indique que se trata do lado da própria equipe.
- **Aprendizado:** um componente de apresentação recebe dados por props e não decide a regra de rodízio. Isso é parecido com uma camada de view que apenas projeta um estado calculado pela aplicação.
- **Critérios de conclusão:** seis posições são visíveis e numeradas; frente, fundo e lado da equipe são compreensíveis; não há imagem, canvas ou dependência nova; o componente é legível em 320 px e desktop; informações essenciais possuem alternativa textual adequada.
- **Commit sugerido:** `feat(rotation): add accessible court diagram`

## Issue 3 — Implementar a página e os controles de rodízio

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 1 e 2
- **Objetivo:** substituir o placeholder de `/rotation` por `RotationPage`, integrando explicação, diagrama, avanço de rodízio e reinício com estado local.
- **Aprendizado:** `useState` é adequado para estado transitório que pertence a uma tela. Valores como a formação exibida devem ser derivados desse estado, evitando duplicação e inconsistência.
- **Critérios de conclusão:** rota abre a página real; texto deixa explícito que a equipe gira ao recuperar o saque; `Avançar rodízio` move uma única vez e atualiza o estado informado; `Reiniciar` restaura a formação inicial; botões funcionam com teclado e mantêm foco visível.
- **Commit sugerido:** `feat(rotation): add interactive rotation page`

## Issue 4 — Revisar responsividade e acessibilidade do fluxo

- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 3
- **Objetivo:** revisar o fluxo completo em celular e desktop, corrigir problemas de semântica, foco, contraste ou quebra visual encontrados e registrar a evidência de validação.
- **Aprendizado:** acessibilidade não é apenas uma propriedade de componentes isolados; ela é validada no fluxo real com teclado, zoom e diferentes tamanhos de viewport.
- **Critérios de conclusão:** não há rolagem horizontal em 320 px; o fluxo funciona somente com teclado; o estado da formação é compreensível; testes, lint e build são executados; os resultados ficam registrados em `validation.md`.
- **Commit sugerido:** `docs(spec): add rotation validation record`

## Ordem de execução

```text
Issue 1
  |
Issue 2
  |
Issue 3
  |
Issue 4
```

## Definição de pronto para cada Issue

- Critérios de conclusão atendidos.
- Testes relevantes executados quando a base de testes estiver disponível.
- Lint e build executados quando houver alteração no frontend.
- Alteração revisada antes do commit.
- Commit segue Conventional Commits.
