# Spec 014 — Quiz por tema e nível

## Objetivo

Deixar a pessoa escolher o assunto e a dificuldade das perguntas antes de iniciar uma rodada do quiz.

## Usuário e problema

Jogador que quer praticar uma regra específica ou encontrar perguntas adequadas ao que já sabe, em vez de receber sempre a mesma sequência.

## Fluxo principal

1. Na página `/quiz`, a pessoa escolhe um tema, um nível ou **Todos**.
2. O app mostra quantas perguntas estão disponíveis e inicia a rodada.
3. Ao concluir, apresenta acertos, total e opção para jogar novamente ou mudar os filtros.

## Critérios de aceite

- Cada pergunta possui tema e dificuldade tipados; dificuldades iniciais: iniciante, intermediário e avançado.
- A seleção aceita tema+dificuldade, tema sem nível, nível sem tema ou todos.
- O quiz não inicia com uma combinação vazia; informa alternativas disponíveis.
- A sessão não repete pergunta e o resultado reflete apenas as perguntas mostradas.
- Há pelo menos três perguntas revisadas para cada combinação disponível de tema e nível; combinações ainda incompletas não são oferecidas.
- Explicação e referência da regra continuam visíveis no feedback.
- Escolhas e pontuação são temporárias na sessão; não há ranking ou perfil persistido.

## Conteúdo

Revisar enunciados, resposta, explicação, dificuldade e referência FIVB. Dificuldade descreve conhecimento e inferência necessários, não a importância da regra.

## Fora do escopo

- Conta, classificação competitiva, sequência de dias ou histórico persistente.
- Geração de perguntas por IA ou conteúdo remoto.
- Cronômetro e partidas multiplayer.

## Dependências

- Feature 005 (Quiz) e catálogo atual de regras.
