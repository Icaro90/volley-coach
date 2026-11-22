# Spec 025 — Plano de jogo

## Objetivo

Organizar a estratégia e os pontos de atenção para uma partida específica, em um formato consultável antes e durante o jogo.

## Usuários

Treinadores e comissão técnica.

## Escopo

- Criar plano associado a adversário opcional, data e competição opcional.
- Registrar estratégia de saque, recepção, bloqueio/defesa, combinações e observações.
- Separar plano editável de notas realizadas durante a partida.
- Consultar, editar, duplicar e arquivar planos.
- Funcionar offline e permitir abrir scout relacionado quando disponível.

## Fora de escopo

Análise automática de vídeo, envio de instruções aos atletas e scouting de adversários externos.

## Critérios de aceite

1. Campos são opcionais, com estrutura que permita leitura rápida e texto livre.
2. Plano pode ser associado a scout sem exigir sua existência.
3. Alterações e arquivamento preservam histórico e data.
4. Interface de consulta usa alto contraste e leitura rápida em celular.
5. Conteúdo fica local e é incluído em exportação futura.

## Dependências

Spec 022 para elenco e spec 026 para formações são integrações opcionais. Integração com 018 Scout prevista.

## Dados e privacidade

Planos táticos são dados privados da equipe e não devem ser indexados por busca pública.
