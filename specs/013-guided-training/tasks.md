# Tasks — Treinos guiados

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Definir o modelo e revisar o conteúdo inicial

- **Status:** Catálogo implementado; revisão por especialista de vôlei pendente · **Estimativa:** 2h
- **Dependências:** nenhuma
- **Objetivo:** definir os campos de exercício e preparar doze exercícios iniciais, dois por fundamento.
- **Critérios de conclusão:** IDs estáveis, níveis consistentes, todos os campos da spec preenchidos, fontes e revisão de conteúdo registradas.

## Issue 2 — Criar catálogo, filtros e estado vazio

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issue 1
- **Objetivo:** criar a rota `/training` com lista e filtros por fundamento, nível e duração.
- **Critérios de conclusão:** filtros combinam corretamente, podem ser limpos e exibem estado vazio claro; controles são acessíveis.

## Issue 3 — Criar detalhe de exercício

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issue 2
- **Objetivo:** exibir objetivo, preparação, materiais, participantes, passos, duração e variações.
- **Critérios de conclusão:** ID inválido apresenta não encontrado; detalhe tem retorno e é legível em celular.

## Issue 4 — Integrar exercícios aos favoritos

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Specs 012 e Issues 1–3
- **Objetivo:** generalizar o tipo de item favoritado e incluir exercícios na lista `/favorites`.
- **Critérios de conclusão:** identificadores de regra e exercício não colidem; item abre o detalhe correto e pode ser removido.

## Issue 5 — Validar catálogo e experiência móvel

- **Status:** Parcial; revisão especializada do conteúdo e validação móvel pendentes · **Estimativa:** 1h30
- **Dependências:** Issues 1–4
- **Objetivo:** cobrir busca/filtros, integridade do catálogo, favoritos e acessibilidade.
- **Critérios de conclusão:** testes, lint e build passam; layout e conteúdo revisados em celular e no APK.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
```
