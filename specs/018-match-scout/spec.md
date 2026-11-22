# Spec 018 — Scout simples de partida

## Objetivo

Registrar o placar e alguns eventos de uma partida recreativa de vôlei de quadra, para consultar um resumo após o jogo.

## Usuário e problema

Jogador ou técnico que quer lembrar o resultado e identificar ocorrências simples, como aces e erros de saque, sem usar uma planilha durante a partida.

## Fluxo principal

1. A pessoa cria uma partida com nomes das equipes e melhor de três ou cinco sets.
2. Durante o jogo, registra o lado que ganhou o ponto e, opcionalmente, classifica o evento.
3. Consulta placar por set e resumo agregado, corrige o último registro ou encerra a partida.

## Critérios de aceite

- Partida contém IDs, nomes das duas equipes, formato melhor de três/cinco, data, status, sets e eventos ordenados.
- Placar soma ponto para o vencedor do rally. Evento opcional registra categoria e equipe responsável; categorias iniciais: ponto sem classificação, ace/saque vencedor, erro de saque, erro de ataque e outro erro.
- Regras padrão de set são configuráveis em partida: sets regulares até 25 e set decisivo até 15, sempre com diferença mínima de dois pontos.
- Controles de pontuação são grandes e utilizáveis com uma mão; há desfazer apenas para o evento mais recente.
- Histórico e partida em andamento persistem localmente após fechar o app; exclusão requer confirmação.
- Resumo apresenta resultado final, pontos e contagem dos eventos classificados por equipe.
- Funciona offline; informa que dados são locais, sem colaboração ou sincronização.

## Fora do escopo

- Cadastro de atletas, posições, escalações ou estatísticas individuais.
- Transmissão em tempo real, colaboração entre aparelhos ou sincronização na nuvem.
- Análise tática, gravação de vídeo ou reconhecimento por IA.
- Regras específicas de vôlei de praia ou configuração de torneios oficiais.

## Dados e risco de uso

Persistência local versionada. Permitir correção para erro operacional e deixar explícito que os resumos são registros manuais, não estatísticas oficiais.

## Dependências

- Nenhuma feature nova; depende da navegação, armazenamento local e tema existentes.

## Estado da implementação em 2026-11-21

O fluxo de criação, placar, eventos, resumo e armazenamento local está implementado. A lista remove partidas sem pedir confirmação, embora a spec exija confirmação; os testes ainda não cobrem set decisivo, recuperação após reinício ou todos os casos de desfazer. Esses itens continuam pendentes.
