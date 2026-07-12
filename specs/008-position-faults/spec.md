# Spec 008 — Faltas de posição e ordem de saque

## Objetivo

Ensinar jogadores iniciantes a diferenciar posição, rodízio e movimentação em quadra, explicando quando ocorre falta de posição e qual pessoa deve sacar após a equipe recuperar o direito de saque.

## Problema

Mesmo após entender a ordem do rodízio, é comum acreditar que atletas devem permanecer parados em suas posições durante todo o rally ou não saber quem deve sacar depois de ganhar o direito de saque. Isso gera dúvidas e discussões frequentes em treinos recreativos.

## Usuário

Jogador ou jogadora iniciante de vôlei de quadra que quer verificar rapidamente se a formação está correta no momento do saque e entender a ordem de saque da equipe.

## Fluxo principal

1. A pessoa abre `Entender rodízio` em `/rotation`.
2. Consulta uma explicação curta sobre o momento em que posições são conferidas.
3. Compara exemplos visuais de formação válida e falta de posição.
4. Vê que, após o golpe de saque, atletas podem se movimentar livremente.
5. Simula a recuperação do direito de saque e identifica quem chega à posição 1 para sacar.

## Critérios de aceite

- A experiência de rodízio explica que as posições são verificadas no instante em que a bola é golpeada no saque.
- O conteúdo diferencia claramente falta de posição de falta de rodízio.
- Pelo menos dois exemplos visuais mostram uma relação válida e uma relação inválida entre jogadores da frente e do fundo ou entre lados da mesma linha.
- A interface explica que, após o golpe de saque, atletas podem ocupar outras posições na quadra.
- Ao recuperar o direito de saque, a formação gira no sentido horário e quem passa da posição 2 para a posição 1 é identificado como a pessoa que saca.
- A consequência simplificada de falta de posição ou rodízio informa ponto e direito de saque ao adversário, com correção da formação.
- A experiência é acessível por teclado, responsiva e não cria nova dependência de rede, backend ou estado global.
- Regras, exemplos e metadados são revisados contra as Official Volleyball Rules 2025–2028 da FIVB.
- O comportamento novo possui testes unitários para regras de posição e ordem de saque.

## Fora do escopo

- Validar coordenadas reais dos pés, escalação oficial ou súmula de jogo.
- Simular todas as formações táticas, coberturas, infiltrações ou movimentações após o saque.
- Implementar arbitragem automática, placar, cadastro de atletas ou histórico de rodízio.
- Cobrir regras de líbero, substituição, tela no saque ou vôlei de praia.
- Criar uma nova rota, backend, API, banco de dados ou persistência.

## Dependências

- Feature `004-rotation`, que já fornece a página `/rotation`, a formação estática e a rotação no sentido horário.
- Catálogo de conteúdo local e padrão de testes do frontend.
- Fonte oficial **FIVB Official Volleyball Rules 2025–2028**, especialmente regras 7.4, 7.5, 7.6, 7.7 e 12.2.

## Riscos

- A falta de posição é baseada na relação entre os pés no momento do saque; simplificar demais pode sugerir que cada pessoa deve ficar exatamente em um ponto fixo da quadra.
- Falta de posição e falta de rodízio são conceitos próximos, mas têm causas diferentes; os exemplos precisam contrastá-los explicitamente.
- A experiência não deve se transformar em um validador completo de formação, pois isso ampliaria escopo e exigiria regras geométricas mais detalhadas.
