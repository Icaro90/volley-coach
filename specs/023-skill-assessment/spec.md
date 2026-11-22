# Spec 023 — Avaliação por fundamento

## Objetivo

Registrar avaliações técnicas para orientar o desenvolvimento individual e coletivo sem reduzir o atleta a uma nota isolada.

## Usuários

Treinadores que acompanham evolução em diferentes fundamentos.

## Escopo

- Registrar avaliação datada por atleta e fundamento: saque, recepção, levantamento, ataque, bloqueio e defesa.
- Usar escala configurável claramente explicada, acompanhada de observação qualitativa.
- Consultar histórico cronológico por atleta e fundamento.
- Permitir corrigir ou excluir avaliações e filtrar por período.
- Persistir localmente e funcionar offline.

## Fora de escopo

Ranking automático de atletas, inferência de potencial, avaliação pública ou pontuação gerada por IA.

## Critérios de aceite

1. Avaliação sempre indica atleta, fundamento, data e escala utilizada.
2. Observação é opcional; uma nota sem contexto não é apresentada como diagnóstico.
3. Histórico compara somente registros compatíveis e evita afirmar evolução com amostras insuficientes.
4. Exclusão e edição são confirmadas e refletem nos resumos.
5. Controles e gráficos têm alternativa textual acessível.

## Dependências

Spec 022 (ficha dos atletas). Poderá alimentar metas (024) e relatório pós-jogo.

## Dados e privacidade

Informações privadas da equipe, guardadas localmente; sem compartilhamento público ou exposição em ranking.
