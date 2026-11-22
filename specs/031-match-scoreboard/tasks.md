# Tasks — Placar de partida

## Issue 1 — Modelar formato e estado da partida
- **Status:** Concluída · **Estimativa:** 2h
- **Dependências:** nenhuma
- Definir regras configuráveis, estado da partida/set, saque inicial, lados e histórico de ações reversíveis.

## Issue 2 — Construir placar e fluxo de pontos
- **Status:** Concluída · **Estimativa:** 3h
- **Dependências:** Issue 1
- Implementar equipes, alvos grandes, contagem, indicador de saque, desfazer e persistência após cada ponto.

## Issue 3 — Implementar sets, troca de lado e formatos
- **Status:** Concluída · **Estimativa:** 3h
- **Dependências:** Issues 1–2
- Aplicar presets de melhor de três/cinco e treino, vantagem de dois, fechamento de set e preparação do próximo.

## Issue 4 — Implementar controles de reset e recuperação
- **Status:** Concluída · **Estimativa:** 2h
- **Dependências:** Issues 2–3
- Separar reset do set de nova partida, confirmar ações destrutivas e restaurar partida em andamento.

## Issue 5 — Validar regras, acessibilidade e Android
- **Status:** Concluída; teste Android manual pendente · **Estimativa:** 2h
- **Dependências:** Issues 1–4
- Testar limite do set, empate, desfazer em transições, persistência, orientação, acesso assistivo e builds; atualizar docs.

## Ordem
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
