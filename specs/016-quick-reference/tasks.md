# Tasks — Consulta rápida

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Selecionar e revisar situações

- **Status:** Itens selecionados; precisão editorial pendente de revisão · **Estimativa:** 1h30
- **Dependências:** nenhuma
- **Objetivo:** escolher dez situações recorrentes e associar cada resumo a uma regra existente.
- **Critérios de conclusão:** texto direto, decisão, consequência, ID da regra e referência revisados.

## Issue 2 — Definir dados e apresentação compacta

- **Status:** Implementada no frontend · **Estimativa:** 1h
- **Dependências:** Issue 1
- **Objetivo:** criar tipo de dado e componente de cartão compacto, com link para detalhe.
- **Critérios de conclusão:** página não duplica o conteúdo integral e cada cartão expõe sua resposta de forma clara.

## Issue 3 — Criar rota e busca curta

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issues 1 e 2
- **Objetivo:** criar `/quick-reference` com lista e busca por situação/termo.
- **Critérios de conclusão:** busca normalizada, estado sem resultado e acesso direto à rota.

## Issue 4 — Integrar atalhos

- **Status:** Implementada no frontend · **Estimativa:** 1h
- **Dependências:** Specs 001 e 012; Issue 3
- **Objetivo:** adicionar entrada na Home e link para favoritos.
- **Critérios de conclusão:** atalhos preservam a hierarquia de navegação e não duplicam favoritos.

## Issue 5 — Revisar precisão e consulta em quadra

- **Status:** Parcial; revisão editorial e teste em celular pendentes · **Estimativa:** 1h30
- **Dependências:** Issues 1–4
- **Objetivo:** validar os resumos contra as regras completas e revisar legibilidade móvel.
- **Critérios de conclusão:** testes de dados e busca, lint e build passam; contraste, áreas de toque e fluxo rápido revisados.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
```
