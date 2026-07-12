# Revisão de conteúdo — Regras adicionais

**Data da revisão:** 2026-07-12
**Fonte principal:** [FIVB Official Volleyball Rules 2025–2028](https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf)

Este documento separa a decisão de conteúdo da implementação em React. Na próxima etapa, os textos abaixo serão convertidos para o contrato `VolleyballRule` em `rules.ts`.

## Decisão de linguagem

O aplicativo ensina o cenário inicial mais frequente, não substitui a arbitragem. Por isso, cada explicação deve apresentar a regra principal e, quando necessário, uma fronteira importante para não induzir uma interpretação absoluta.

Não serão incluídas regras de líbero, substituição excepcional, procedimentos de mesa ou exceções táticas. Esses assuntos ficam fora do escopo da Spec 007.

## Invasão da linha central

- **Referências FIVB:** 11.2.1, 11.2.2, 11.4.2 e 11.4.3.
- **Texto simplificado:** É permitido passar por baixo da rede somente se isso não atrapalhar a jogada adversária. O pé pode tocar a quadra do outro lado quando uma parte dele ainda está sobre ou em contato com a linha central. Cruzar completamente com o pé ou interferir na ação adversária é falta.
- **Resumo:** Cruzar a linha central só é permitido sem invadir totalmente nem atrapalhar o adversário.
- **Exemplo:** Ao cair após um ataque, o jogador pisa completamente na quadra adversária e impede a movimentação de quem vai defender.
- **Consequência:** É falta de invasão e o adversário recebe o ponto.
- **Termos de busca:** `invasão`, `invadir`, `linha central`, `passar por baixo da rede`, `pé do outro lado`.
- **Diagrama planejado:** rede e linha central visíveis; um pé parcialmente sobre a linha como situação permitida e outro totalmente na quadra adversária com sinal de falta.
- **Cuidados editoriais:** não usar “pisar na linha é falta”; a regra depende de parte do pé permanecer sobre ou em contato com a linha e de não haver interferência.

## Bloqueio

- **Referências FIVB:** 14.1.1, 14.1.3, 14.4.1, 14.5 e 14.6.2.
- **Texto simplificado:** Bloqueio é a ação perto da rede para interceptar a bola que vem do adversário. Apenas jogadores da linha da frente completam um bloqueio. Quando a bola toca o bloqueio, esse contato não conta como um dos três toques da equipe.
- **Resumo:** O toque no bloqueio não entra na contagem dos três toques.
- **Exemplo:** A bola toca as mãos do bloqueador e volta. A equipe ainda pode fazer recepção, levantamento e ataque.
- **Consequência:** A equipe ainda tem três toques; bloquear o saque ou completar o bloqueio com jogador de fundo ou líbero é falta.
- **Termos de busca:** `bloqueio`, `bloquear`, `bloqueio conta`, `três toques após bloqueio`, `bloquear saque`.
- **Diagrama planejado:** jogador da frente junto à rede tocando a bola e contador separado mostrando “bloqueio + 3 toques”.
- **Cuidados editoriais:** diferenciar tentativa sem toque de bloqueio completado; a regra da contagem vale quando há contato com a bola.

## Substituição

- **Referências FIVB:** 15.5, 15.6.1, 15.6.2 e 15.9.
- **Texto simplificado:** Substituição é a troca de uma pessoa em quadra por uma reserva quando a bola está fora de jogo. Na regra padrão, quem começou a partida pode sair uma vez no set e voltar uma vez apenas para sua posição original; a reserva que entrou só pode ser trocada por essa mesma pessoa titular.
- **Resumo:** A troca segue a posição original: titular e reserva retornam um ao outro.
- **Exemplo:** A titular da posição 4 sai para a reserva. Mais tarde, somente essa mesma titular pode voltar a ocupar essa vaga no set.
- **Consequência:** Uma troca fora desses limites é irregular e deve ser corrigida; se o jogo já recomeçou, a equipe é penalizada conforme a regra oficial.
- **Termos de busca:** `substituição`, `substituir jogador`, `troca de jogador`, `reserva`, `voltar para quadra`.
- **Diagrama planejado:** duas pessoas, uma em quadra e uma no banco, trocando com setas e a mesma posição destacada.
- **Decisão sobre quantidade:** não informar um número fixo de substituições por set. A regra publicada 2025–2028 trata os limites individuais acima, e a FIVB anunciou um teste de aumentar o total de seis para oito em competições de 2026. O número aplicável deve ser confirmado no regulamento da competição.
- **Fonte complementar:** [FIVB — testes de regras para competições de 2026](https://www.fivb.com/fivb-board-of-administration-approves-rule-tests-for-2026-competitions/).

## Ataque de jogadores da linha de trás

- **Referências FIVB:** 13.2.2, 13.2.3 e 13.3.3.
- **Texto simplificado:** A pessoa que está na linha de trás pode atacar acima da rede se saltar de trás da linha de ataque: no impulso, seus pés não podem tocar nem ultrapassar essa linha. Depois do golpe, ela pode cair na zona de frente. Na zona de frente, só pode atacar se a bola estiver abaixo do topo da rede no momento do contato.
- **Resumo:** Quem está no fundo ataca acima da rede somente saltando de trás da linha de ataque.
- **Exemplo:** Uma jogadora da linha de trás salta antes da linha de ataque e golpeia a bola acima da rede. A jogada é válida, mesmo que ela caia depois na zona de frente.
- **Consequência:** Atacar acima da rede a partir da zona de frente sendo jogadora da linha de trás é falta e dá ponto ao adversário.
- **Termos de busca:** `ataque de fundo`, `ataque linha de trás`, `linha de ataque`, `atacar do fundo`, `jogador do fundo`.
- **Diagrama planejado:** linha de ataque destacada, salto iniciado atrás dela e aterrissagem permitida na zona de frente.
- **Cuidados editoriais:** o ponto decisivo é o local do impulso, não o local da aterrissagem; não incluir as regras específicas de ataque do líbero nesta feature.

## Pronto para implementação

- Os quatro temas têm fonte, data de revisão, texto de MVP, exemplo, consequência, termos de busca e orientação visual.
- A implementação deve preservar as referências FIVB em `source.relevantRules` e usar `reviewedAt: '2026-07-12'` para os novos itens.
- A revisão de conteúdo não altera o contrato de dados, rotas ou componentes existentes.
