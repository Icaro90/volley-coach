# Spec 032 — Histórico e scout vinculados ao placar

## Objetivo

Permitir que a pessoa escolha salvar o resultado do placar no histórico e, se desejar, associar ou iniciar um scout para analisar a partida.

## Princípio de uso

O placar da spec 031 deve funcionar completamente sem histórico ou scout. Vínculos são opcionais, explicados e escolhidos pelo usuário; não habilitar nem criar registros silenciosamente.

## Usuários

Treinadores e equipes que desejam guardar resultados ou analisar partidas além da contagem ao vivo.

## Escopo

- Oferecer, ao iniciar a partida ou ao encerrá-la, opções para **somente placar**, **salvar resultado no histórico** e **vincular/iniciar scout**.
- Permitir associar uma partida existente do scout ou criar um novo scout a partir das equipes e do placar atual.
- Ao finalizar, salvar no histórico o resultado por set, nomes das equipes, data e formato aplicado, se o usuário optou por isso.
- Ao abrir uma partida já vinculada, mostrar acesso claro ao placar, resumo histórico e scout relacionado.
- Atualizar o resultado histórico se uma partida vinculada for reaberta e corrigida, mantendo uma única entidade de partida e evitando cópias divergentes.
- Permitir desvincular scout sem apagar placar/histórico; exclusão de registros segue confirmações e regras próprias de cada recurso.
- Funcionar offline, usando IDs estáveis e relações locais entre placar, histórico e scout.

## Fora de escopo

Sincronização entre dispositivos, compartilhamento em tempo real, estatística automática derivada de eventos não registrados e criação obrigatória de scout.

## Critérios de aceite

1. É possível iniciar, pontuar, encerrar e apagar uma partida sem criar histórico ou scout.
2. Optar por histórico salva um único resultado com sets completos; opt-out não grava uma cópia em segundo plano.
3. Scout pode ser iniciado do placar com equipes e contexto já preenchidos, ou associado depois.
4. Reabrir/corrigir uma partida vinculada atualiza o registro associado sem duplicá-lo.
5. Desvincular e excluir têm efeitos distintos, explicados antes da confirmação.
6. Se o armazenamento falhar, o placar continua utilizável e o app informa que o salvamento adicional não ocorreu.
7. Testes cobrem ausência de vínculo, opt-in de histórico, opt-in de scout, reabertura e prevenção de duplicatas.

## Dependências

Spec 031 (placar) e feature 018 (scout). A entidade e a tela de histórico devem ser estabelecidas antes de implementar o salvamento do resultado; esta spec não presume que o histórico atual do scout seja automaticamente um histórico geral de partidas.

## Dados e privacidade

Histórico e scout só recebem dados após opção explícita. Relações são locais; nenhuma informação é compartilhada externamente por esse vínculo.
