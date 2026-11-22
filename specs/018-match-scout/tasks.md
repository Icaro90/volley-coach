# Tasks — Scout simples de partida

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Modelar partida e transições puras

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** nenhuma
- **Objetivo:** definir tipos de partida, sets e eventos e funções puras para pontuar, encerrar sets e determinar vencedor.
- **Critérios de conclusão:** regras configuráveis 25/15 por dois pontos, formato melhor de três/cinco, IDs e transições inválidas protegidas.

## Issue 2 — Criar partida e armazenamento local

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issue 1
- **Objetivo:** criar formulário com nomes/formato e persistir partidas em andamento e encerradas.
- **Critérios de conclusão:** dados inválidos são rejeitados; partida pode ser reaberta após reiniciar o app; falha local recebe mensagem clara.

## Issue 3 — Implementar placar de uma mão

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issues 1 e 2
- **Objetivo:** mostrar set atual, placar e controles para atribuir ponto a qualquer equipe.
- **Critérios de conclusão:** placar, sets e encerramento seguem o modelo; controles têm rótulos acessíveis e áreas de toque amplas.

## Issue 4 — Classificar eventos e desfazer

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issue 3
- **Objetivo:** associar tipo e equipe responsável ao ponto e permitir desfazer o último evento.
- **Critérios de conclusão:** resumo atribui evento à equipe correta; desfazer restaura placar, sets e evento sem corromper a ordem.

## Issue 5 — Criar histórico e resumo de partida

- **Status:** Parcial; remoção atual não pede confirmação · **Estimativa:** 1h30
- **Dependências:** Issues 2–4
- **Objetivo:** listar partidas e apresentar resultado por set e eventos agregados.
- **Critérios de conclusão:** partidas ativas e encerradas distinguíveis; exclusão confirmada; contagens derivadas dos eventos.

## Issue 6 — Validar cenários e uso em quadra

- **Status:** Parcial; cenários de set decisivo, limites, desfazer após set e persistência precisam de cobertura · **Estimativa:** 2h
- **Dependências:** Issues 1–5
- **Objetivo:** testar limites de sets, placar, classificação e recuperação local; revisar fluxo no Android.
- **Critérios de conclusão:** testes cobrem jogo normal, set decisivo, vitória por dois, desfazer e reinício; lint/build passam e controles são legíveis em quadra.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5 → Issue 6
```
