# Spec 027 — Modo treino no ginásio

## Objetivo

Oferecer uma interface de uso rápido durante treino e jogo, legível à distância e operável com poucos toques.

## Usuários

Treinadores que consultam o app em quadra, frequentemente com uma mão e sob luz variável.

## Escopo

- Ativar e sair de um modo de interface com alvos grandes, alto contraste e informação essencial.
- Oferecer atalhos para treino atual, cronômetro simples, exercício atual, chamada, formação e scout.
- Impedir bloqueio de tela enquanto o modo estiver ativo somente após autorização explícita do sistema.
- Manter controles de saída sempre visíveis e configuração acessível.
- Respeitar preferências de tema, redução de movimento e tamanho de fonte.

## Fora de escopo

Gravação de áudio/vídeo, execução em segundo plano e bloqueio permanente da tela.

## Critérios de aceite

1. Modo pode ser ativado e encerrado sem perder o estado da página atual.
2. Alvos de toque ampliados e conteúdo principal utilizável sem precisão fina.
3. Cronômetro pode iniciar, pausar, reiniciar e ser lido por tecnologia assistiva.
4. Manter tela ativa é opcional, temporário e encerrado ao sair do modo.
5. Funciona em navegador e Android com degradação clara se uma capacidade não estiver disponível.

## Dependências

Independente; pode integrar 013 Treinos, 021 Presença, 025 Plano de jogo e 026 Formações.

## Privacidade e energia

Não usar sensores. Informar e limitar o uso da tela ativa para evitar consumo inesperado de bateria.
