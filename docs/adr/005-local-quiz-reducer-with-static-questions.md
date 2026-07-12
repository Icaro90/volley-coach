# ADR 005 — Quiz local com perguntas estáticas e reducer de estados

## Status

Aceita.

## Contexto

A feature `005-quiz` apresenta cinco perguntas de múltipla escolha, uma por vez. A experiência possui fases mutuamente exclusivas: introdução, resposta em andamento, feedback e resultado final. Índice da pergunta, resposta selecionada e pontuação precisam mudar de forma coordenada.

Não há requisito de persistência, aleatoriedade, colaboração ou compartilhamento do resultado. O conteúdo inicial é pequeno e deriva das regras básicas já mantidas localmente.

## Decisão

Manter as perguntas em um módulo TypeScript tipado dentro da feature `quiz`. Modelar o fluxo com `useReducer`, usando um reducer puro que recebe o estado atual e uma ação e devolve o próximo estado.

O estado terá uma fase explícita (`intro`, `question`, `feedback` ou `result`), índice da pergunta, alternativa selecionada e pontuação. A porcentagem de aproveitamento será derivada de `pontuação / total de perguntas` somente ao apresentar o resultado, sem compor o estado. Perguntas serão apresentadas em ordem fixa e a pontuação não será persistida.

## Consequências

### Positivas

- As transições do quiz ficam explícitas e podem ser testadas sem React, como uma regra de aplicação isolada em Java.
- O reducer evita combinações inválidas de estado, como exibir resultado antes de responder todas as perguntas.
- Perguntas estáticas não exigem backend, banco de dados, chamadas de rede ou TanStack Query.
- Ordem fixa facilita a revisão de conteúdo, a repetição do exercício e os testes automatizados.
- Calcular a porcentagem a partir da pontuação evita manter dois valores que poderiam divergir.

### Negativas

- Atualizar perguntas exige alteração e deploy do frontend.
- A pontuação é perdida ao atualizar a página ou sair da rota.
- O MVP não adapta dificuldade, evita repetição nem acompanha evolução da pessoa usuária.

## Alternativas consideradas

### Vários useState independentes

Rejeitada. A quantidade de campos relacionados aumentaria o risco de transições incompletas ou inconsistentes; o reducer descreve melhor o fluxo finito do quiz.

### Persistir resultado em localStorage ou URL

Rejeitada. Não há necessidade de retomar um quiz ou compartilhar um resultado no MVP. Persistência adicionaria comportamento que ainda não foi validado.

### Perguntas aleatórias ou carregadas por API

Rejeitada. O conjunto inicial é pequeno e precisa ser revisado cuidadosamente. Aleatoriedade e backend não trazem benefício proporcional antes de validar o formato de aprendizagem.
