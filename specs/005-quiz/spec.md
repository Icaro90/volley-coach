# Spec 005 — Quiz rápido

## Objetivo

Permitir que jogadores iniciantes reforcem o entendimento das regras básicas de vôlei respondendo a um quiz curto, recebendo feedback imediato e vendo seu resultado ao final.

## Problema

Consultar uma regra resolve uma dúvida pontual, mas não confirma se a pessoa compreendeu o conceito nem ajuda a identificar o que precisa revisar. Iniciantes precisam de uma forma simples e sem pressão para praticar decisões comuns de treino e jogo.

## Usuário

Jogador ou jogadora iniciante de vôlei de quadra, em momento de estudo ou após um treino, que quer testar rapidamente o que entendeu sobre regras básicas.

## Fluxo principal

1. A pessoa seleciona `Quiz rápido` na Home e abre `/quiz`.
2. Vê uma introdução curta e inicia um quiz de cinco perguntas.
3. Lê uma pergunta por vez e escolhe uma entre as alternativas disponíveis.
4. Recebe feedback imediato: se acertou, qual era a resposta correta e uma explicação simples.
5. Avança até responder as cinco perguntas.
6. Vê a quantidade de acertos, uma mensagem de incentivo e pode reiniciar o quiz ou consultar as regras básicas.

## Critérios de aceite

- A rota `/quiz` substitui o conteúdo temporário por uma página de quiz.
- O quiz inicial possui exatamente cinco perguntas de múltipla escolha sobre as regras da Spec 002.
- A página apresenta uma pergunta por vez, com enunciado e alternativas claras.
- A pessoa não consegue avançar sem selecionar uma alternativa.
- Após responder, a interface informa se a resposta está correta ou incorreta, mostra a resposta correta e apresenta uma explicação curta.
- A pontuação é atualizada corretamente e o resultado final mostra os acertos de `0` a `5`.
- A pessoa pode reiniciar o quiz depois do resultado, sem recarregar a página.
- O resultado final oferece um caminho para `/rules`.
- Os controles podem ser usados por teclado, possuem rótulos acessíveis e funcionam em celular e desktop.
- Perguntas, alternativas e explicações usam dados locais; a feature não introduz backend, banco de dados, chamadas de rede ou persistência.
- O conteúdo é revisado contra a fonte oficial da FIVB antes da publicação.

## Fora do escopo

- Login, histórico, ranking, medalhas, favoritos ou persistência de pontuação.
- Temporizador, limite de tentativas, perguntas aleatórias, dificuldade adaptativa ou gamificação avançada.
- Quiz sobre rodízio, regras avançadas, vôlei de praia ou conteúdo futuro.
- Compartilhar resultado, notificações ou integração com redes sociais.
- Edição administrativa de perguntas, CMS, backend ou API.

## Dependências

- Feature `001-home`, que disponibiliza o atalho para `/quiz`.
- Feature `002-rules`, que define o conteúdo básico que será praticado.
- Validação de cada pergunta e explicação contra o regulamento oficial vigente da FIVB.

## Riscos

- Perguntas ambíguas podem avaliar interpretação de texto em vez de conhecimento da regra; os enunciados precisam descrever situações simples e objetivas.
- Feedback sem explicação reduz o valor de aprendizado, mesmo quando a pessoa acerta.
- Cinco perguntas podem parecer repetitivas se cobrirem o mesmo conceito; a seleção deve representar temas diferentes da Spec 002.
- Regras oficiais podem ser atualizadas; a fonte e a data de revisão precisam ser registradas junto ao conteúdo.
