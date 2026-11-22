# Tasks — Atalhos essenciais na Home

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Executar na ordem de dependência.

## Issue 1 — Definir os atalhos principais e secundários

- **Status:** Concluída · **Estimativa:** 30 min
- **Dependências:** nenhuma
- **Objetivo:** separar os quatro atalhos essenciais dos recursos listados em **Mais**.
- **Critérios de conclusão:** destinos sem duplicidade indevida, rótulos consistentes e lista completa de rotas mantida.

## Issue 2 — Simplificar o conteúdo da Home

- **Status:** Concluída · **Estimativa:** 1h
- **Dependências:** Issue 1
- **Objetivo:** reduzir o texto inicial e apresentar busca, quatro atalhos e link **Ver tudo**.
- **Critérios de conclusão:** só Regras, Treinos, Quiz e Favoritos aparecem como cartões principais; links abrem suas rotas.

## Issue 3 — Substituir a faixa superior por navegação inferior

- **Status:** Concluída · **Estimativa:** 1h30
- **Dependências:** Issue 1
- **Objetivo:** manter no cabeçalho a marca/tema e criar navegação Início, Buscar, Treinos e Mais.
- **Critérios de conclusão:** estado atual tem semântica acessível, controles são legíveis e área segura Android é respeitada.

## Issue 4 — Criar a página Mais e conectar a busca

- **Status:** Concluída · **Estimativa:** 1h30
- **Dependências:** Issues 2 e 3
- **Objetivo:** reunir os recursos secundários em `/more` e oferecer busca funcional ao abrir Buscar sem consulta.
- **Critérios de conclusão:** Rodízio, Diário, Consulta rápida, Glossário e Scout apontam para as rotas existentes; busca sem query permite iniciar uma pesquisa.

## Issue 5 — Validar frontend e APK

- **Status:** Testes, lint, builds frontend e Android concluídos; teste manual Android pendente · **Estimativa:** 1h30
- **Dependências:** Issues 2–4
- **Objetivo:** verificar navegação, acessibilidade, responsividade, teste automatizado e build Android.
- **Critérios de conclusão:** testes, lint e build frontend passam; APK debug compila; validação manual Android é registrada separadamente se não houver dispositivo.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
```
