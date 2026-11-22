# Tasks — Histórico e scout vinculados ao placar

## Issue 1 — Definir entidade compartilhada de partida
- **Status:** Concluída · **Estimativa:** 2h
- **Dependências:** spec 031 e inspeção do modelo 018
- Definir ID estável, origem, resultado por set, formato, vínculos e versionamento sem duplicar dados existentes.

## Issue 2 — Implementar escolha opcional de integração
- **Status:** Concluída · **Estimativa:** 2h
- **Dependências:** Issue 1
- Oferecer somente placar, salvar no histórico e vincular/iniciar scout no momento adequado, com estado inicial claro.

## Issue 3 — Salvar resultado e sincronizar reaberturas
- **Status:** Concluída · **Estimativa:** 3h
- **Dependências:** Issue 2; histórico de partidas disponível
- Persistir placar final, atualizar a mesma partida ao reabrir e prevenir registros duplicados.

## Issue 4 — Integrar scout e gerenciar vínculos
- **Status:** Concluída · **Estimativa:** 3h
- **Dependências:** Issue 3 e estrutura do scout 018
- Pré-preencher/iniciar scout, associar scout existente e permitir desvincular sem apagar outros dados.

## Issue 5 — Validar opt-in, falhas e migrações
- **Status:** Concluída; teste Android manual pendente · **Estimativa:** 2h
- **Dependências:** Issues 1–4
- Testar placar autônomo, vínculos, duplicatas, reabertura, falha de storage, dados legados e atualização das docs/build Android.

## Ordem
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
