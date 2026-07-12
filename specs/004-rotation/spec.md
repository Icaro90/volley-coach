# Spec 004 — Rodízio

## Objetivo

Ensinar, de forma visual e interativa, como funciona o rodízio no vôlei de quadra para que jogadores iniciantes entendam as seis posições e saibam quando sua equipe deve girar.

## Problema

O rodízio é difícil de compreender apenas por texto: a pessoa precisa relacionar posições, lados da quadra e a ordem de movimentação. Em treinos recreativos, é comum saber que existe uma rotação, mas não saber quando ela acontece nem para qual posição cada pessoa se desloca.

## Usuário

Jogador ou jogadora iniciante de vôlei de quadra, em treino ou partida recreativa, que precisa entender rapidamente onde cada pessoa fica antes do saque e como a equipe muda de posição.

## Fluxo principal

1. A pessoa seleciona `Rodízio` na Home e abre `/rotation`.
2. Vê uma quadra simplificada com os seis números de posição e uma explicação curta sobre a formação inicial.
3. Lê que a equipe roda quando recupera o direito de sacar.
4. Aciona o controle `Avançar rodízio` e vê as seis posições mudarem uma casa na ordem correta.
5. Pode avançar novamente ou reiniciar a formação para repetir o aprendizado.

## Critérios de aceite

- A rota `/rotation` substitui o conteúdo temporário por uma página de rodízio.
- A página apresenta uma quadra simplificada, identificada como lado da própria equipe, com as seis posições numeradas de 1 a 6.
- A interface explica, em linguagem simples, que o rodízio acontece quando a equipe recupera o saque.
- A ordem visual deixa claro que as pessoas avançam uma posição no sentido horário.
- O controle `Avançar rodízio` atualiza a formação em uma única rotação e informa o estado atual de modo compreensível.
- O controle `Reiniciar` restaura a formação inicial depois de ao menos uma rotação.
- A interação pode ser usada por teclado e possui rótulos acessíveis.
- A página funciona em viewport de celular e desktop sem exigir rolagem horizontal.
- A feature usa dados locais e não introduz backend, banco de dados ou chamadas de rede.
- A explicação e a ordem apresentada são revisadas contra o regulamento oficial vigente da FIVB antes da publicação.

## Fora do escopo

- Sistemas táticos, funções de levantador, líbero, ataques ou trocas de jogadores.
- Validação de falta de posição, sobreposição, escalação real ou placar.
- Animações complexas, arrastar jogadores ou simulação de uma partida.
- Rodízio de vôlei de praia ou outras modalidades.
- Persistência do estado da formação, autenticação, favoritos ou progresso.
- Busca no conteúdo de rodízio e integração com quiz.

## Dependências

- Feature `001-home`, que disponibiliza o atalho para `/rotation`.
- React Router, que já declara a rota `/rotation`.
- Validação da explicação e sequência de posições contra o regulamento oficial vigente da FIVB.

## Riscos

- Uma representação de quadra sem indicação de perspectiva pode confundir frente, fundo, direita e esquerda.
- Uma explicação excessivamente simplificada pode fazer parecer que o rodízio ocorre após todo ponto; o gatilho de recuperar o saque precisa estar explícito.
- Adicionar papéis táticos ou movimentos durante o rally aumentaria muito o escopo e prejudicaria o objetivo de aprendizado inicial.
- Pessoas podem interpretar os números como posições fixas de cada jogador; o conteúdo deve reforçar que eles representam locais na ordem de rodízio.
