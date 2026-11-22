# Tasks — Glossário de vôlei

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Definir modelo e categorias

- **Status:** Implementada no frontend · **Estimativa:** 1h
- **Dependências:** nenhuma
- **Objetivo:** tipar termo, sinônimos, categoria, definição, exemplo e links internos.
- **Critérios de conclusão:** IDs estáveis, categorias limitadas e validação de links possível.

## Issue 2 — Preparar e revisar catálogo inicial

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issue 1
- **Objetivo:** cadastrar pelo menos 30 termos de regras, fundamentos, posições e treino.
- **Critérios de conclusão:** definições simples e originais; exemplos e sinônimos revisados; links têm destinos existentes.

## Issue 3 — Implementar busca e filtros

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issues 1 e 2
- **Objetivo:** criar busca normalizada e seleção por categoria.
- **Critérios de conclusão:** caixa/acentos/sinônimos funcionam; vazio e sem resultado são claros.

## Issue 4 — Criar página de termo e relações

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issue 3
- **Objetivo:** exibir definição, exemplo e links relacionados.
- **Critérios de conclusão:** link quebrado é omitido ou informa ausência de destino; detalhe oferece retorno à lista.

## Issue 5 — Validar catálogo e acessibilidade

- **Status:** Parcial; testes de catálogo, navegação e acessibilidade pendentes · **Estimativa:** 1h30
- **Dependências:** Issues 1–4
- **Objetivo:** testar integridade do catálogo, busca e navegação.
- **Critérios de conclusão:** testes, lint e build passam; teclado, leitores de tela, tema e telas pequenas revisados.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
```
