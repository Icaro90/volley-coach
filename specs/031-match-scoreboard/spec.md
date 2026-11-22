# Spec 031 — Placar de partida

## Objetivo

Oferecer um placar de vôlei rápido e legível durante treinos e jogos, com pontos e sets, correção de erros e reinício seguro.

## Usuários

Treinadores, jogadores, árbitros e pessoas que acompanham a pontuação em jogos recreativos ou de equipe.

## Escopo

- Iniciar partida com nomes editáveis para as duas equipes e escolha de quem saca primeiro.
- Somar ponto tocando em um dos dois placares grandes e exibir o time que tem o saque.
- Acompanhar pontuação do set atual, sets vencidos e estado da partida.
- Desfazer a última ação de pontuação, restaurando pontos, sets, saque, lados e estado de partida afetados.
- Encerrar um set manualmente ou automaticamente quando o formato configurado for alcançado; preparar o próximo set.
- Trocar lados manualmente e, quando habilitado pelo formato, automaticamente.
- Oferecer formato padrão de quadra (melhor de cinco, sets regulares a 25 e decisivo a 15, sempre com dois pontos de vantagem), melhor de três e formato de treino configurável.
- Permitir resetar o set atual ou iniciar nova partida; pedir confirmação e indicar claramente o que será apagado.
- Salvar a partida em andamento localmente após cada ação e recuperá-la ao reabrir o app.
- Funcionar offline; manter a tela ativa enquanto o placar estiver aberto quando o sistema permitir e o usuário habilitar.

## Fora de escopo

Scout detalhado, súmula oficial, gestão de escalação/substituições, transmissão pública ao vivo e sincronização entre dispositivos. A integração opcional com histórico e scout é especificada em 032.

## Critérios de aceite

1. A tela de placar mantém pontos e sets como informação principal, com alvos grandes e contraste adequado.
2. Um ponto pode ser atribuído a qualquer equipe e a ação de desfazer restaura corretamente todo o estado derivado.
3. Ganhar set exige atingir o alvo configurado e manter a diferença mínima; empate na pontuação não encerra indevidamente o set.
4. Novo set preserva o resultado anterior; reset de set e nova partida têm efeitos distintos e confirmação explícita.
5. Encerrar ou reabrir o app não perde uma partida em andamento.
6. Formatos de treino podem ser ajustados sem alterar o preset padrão.
7. Controles são acessíveis por teclado e leitor de tela e funcionam em telas pequenas, orientação retrato e paisagem.

## Regras e referências

O preset padrão segue as regras oficiais FIVB 2025–2028: rally point, sets regulares a 25 e set decisivo a 15, com diferença mínima de dois pontos. O formato é configurável para regras locais, recreativas e de treino. Referências de mercado consideradas: [VBScore](https://play.google.com/store/apps/details?id=com.glitchlab.volleyscore) e [Volleyball Score Simple](https://play.google.com/store/apps/details?id=com.wespiapps.volleyballscore), que apresentam pontuação por toque, desfazer, gestão de sets e indicação de saque/troca de lado. Regras oficiais: [FIVB — Basic Rules](https://www.fivb.com/volleyball/the-game/basic-rules/) e [Official Volleyball Rules 2025–2028](https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN-1.pdf).

## Dependências

Independente das features de histórico e scout. Integração futura prevista em spec 032. Usar armazenamento local compatível com a arquitetura existente.

## Privacidade

Dados da partida permanecem no dispositivo enquanto não forem compartilhados ou vinculados explicitamente pelo usuário a recursos que os armazenem.
