# Tasks — Quiz por tema e nível

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Expandir o modelo de perguntas

- **Status:** Implementada no frontend · **Estimativa:** 1h
- **Dependências:** nenhuma
- **Objetivo:** adicionar dificuldade tipada e revisar cobertura do catálogo atual.
- **Critérios de conclusão:** cada pergunta tem tema e dificuldade válidos; função de integridade detecta categorias sem o mínimo de perguntas.

## Issue 2 — Escrever e revisar perguntas por combinação

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issue 1
- **Objetivo:** garantir três perguntas por tema e nível que serão oferecidos no seletor.
- **Critérios de conclusão:** texto, gabarito, dificuldade, explicação e referência FIVB revisados; não há combinações incompletas publicadas.

## Issue 3 — Criar seleção de tema e nível

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issues 1 e 2
- **Objetivo:** adicionar filtros e estado de disponibilidade antes da tela de perguntas.
- **Critérios de conclusão:** combinações válidas mostram quantidade; combinações vazias ficam indisponíveis com orientação.

## Issue 4 — Adaptar sessão e resultado

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issue 3
- **Objetivo:** iniciar sessão com o conjunto filtrado e calcular o resultado usando esse total.
- **Critérios de conclusão:** sem perguntas repetidas, transições protegidas contra cliques fora de ordem e opção de reiniciar ou ajustar filtros.

## Issue 5 — Validar seletor, conteúdo e responsividade

- **Status:** Parcial; testes automatizados passam, revisão manual visual e Android pendentes · **Estimativa:** 1h30
- **Dependências:** Issues 1–4
- **Objetivo:** testar seleções, sessão, resultado e acessibilidade no navegador e Android.
- **Critérios de conclusão:** testes unitários e de interface, lint e build passam; uso por teclado e telas pequenas revisados.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
```
