# Tasks — Favoritos

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Definir o contrato e armazenamento local

- **Status:** Implementada no frontend · **Estimativa:** 1h
- **Dependências:** nenhuma
- **Objetivo:** tipar favoritos por identificador de regra e isolar a leitura/escrita de `localStorage`.
- **Critérios de conclusão:** leitura defensiva, versão/chave namespaced, falhas de armazenamento não derrubam o app e itens desconhecidos podem ser filtrados.

## Issue 2 — Adicionar ação de favorito às regras

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issue 1
- **Objetivo:** criar botão de favorito e integrá-lo às linhas e à página de detalhe.
- **Critérios de conclusão:** alternância imediata, nome acessível e estado selecionado coerente em todas as rotas.

## Issue 3 — Criar página de favoritos

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issues 1 e 2
- **Objetivo:** criar rota `/favorites` com regras salvas e estado vazio.
- **Critérios de conclusão:** a lista deriva do catálogo atual; cada item abre seu detalhe e pode ser removido.

## Issue 4 — Integrar entrada de navegação e validar persistência

- **Status:** Implementada; teste de interface e persistência em Android pendentes · **Estimativa:** 1h30
- **Dependências:** Issues 2 e 3
- **Objetivo:** disponibilizar a página no menu e cobrir armazenamento, acessibilidade e layout em celular.
- **Critérios de conclusão:** testes unitários e de interface cobrem carga inicial, alternância, dados inválidos, atualização e vazio; validar no navegador e no APK.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4
```
