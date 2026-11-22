# Spec 021 — Presença e disponibilidade

## Objetivo

Permitir que a comissão registre a disponibilidade dos atletas para treinos e jogos e acompanhe presenças e ausências.

## Usuários

Treinadores que organizam atividades recorrentes de uma equipe.

## Escopo

- Criar uma chamada associada a uma atividade e data, com estados **presente**, **ausente**, **justificado** e **pendente**.
- Exibir a lista de atletas ativos e permitir marcar estados com poucos toques.
- Permitir registrar observação curta de ausência e atualizar a chamada depois de salva.
- Mostrar resumo por atividade e histórico individual com contagens e percentual de presença.
- Persistir localmente e funcionar sem conexão.

## Fora de escopo

Notificações automáticas, confirmação pelo próprio atleta, sincronização entre dispositivos e controle de justificativas formais.

## Critérios de aceite

1. Uma chamada pertence a uma atividade, data e grupo de atletas.
2. Atletas sem marcação permanecem como pendentes e não entram no percentual de presença.
3. Resumos distinguem ausência justificada e não justificada.
4. Editar e excluir uma chamada mantém os históricos consistentes.
5. Estados e controles têm rótulos acessíveis e uso adequado em telas pequenas.

## Dependências

Spec 022 (ficha dos atletas). Requer entidade de atividade; poderá integrar Diário de treino (015).

## Dados e privacidade

Registros ficam no dispositivo e são removidos quando o usuário apaga os dados locais. Não coletar dados sensíveis desnecessários.
