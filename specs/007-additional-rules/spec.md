# Spec 007 — Regras adicionais

## Objetivo

Ampliar a consulta de regras básicas do Volley Coach com novas situações frequentes de jogo, incluindo invasão, para que jogadores iniciantes resolvam mais dúvidas sem recorrer a um regulamento técnico extenso.

## Problema

O MVP cobre seis regras essenciais, mas durante treinos surgem dúvidas comuns sobre cruzar a linha central, bloqueio, substituições e ataques de jogadores do fundo. Sem esse conteúdo, a pessoa entende os conceitos iniciais, mas ainda não consegue esclarecer várias situações recorrentes em quadra.

## Usuário

Jogador ou jogadora iniciante de vôlei de quadra, em treino ou partida recreativa, que quer entender uma situação específica de forma rápida, visual e em linguagem simples.

## Conteúdo inicial

Esta expansão adiciona quatro regras à lista existente:

1. Invasão da linha central.
2. Bloqueio.
3. Substituição.
4. Ataque de jogadores da linha de trás.

Cada item seguirá o padrão atual: título, resumo, explicação, exemplo em quadra, consequência, diagrama SVG simples e referência à fonte oficial.

## Fluxo principal

1. A pessoa abre `Regras básicas` em `/rules`.
2. Encontra as novas regras junto às seis já existentes.
3. Seleciona uma regra para abrir o detalhe em `/rules/:ruleId`.
4. Lê uma explicação curta, consulta exemplo, consequência e diagrama.
5. Retorna à lista ou pesquisa a regra por termos relacionados.

## Critérios de aceite

- A lista em `/rules` passa a exibir dez regras com identificadores únicos.
- As quatro regras novas possuem título, resumo, explicação, exemplo, consequência, diagrama SVG e metadados de fonte.
- A regra de invasão explica claramente quando cruzar a linha central interfere na jogada ou invade o espaço adversário.
- A regra de bloqueio deixa claro que o contato de bloqueio não integra os três toques da equipe.
- A regra de substituição explica o conceito básico e seus limites sem detalhar procedimentos administrativos de competição.
- A regra de ataque de fundo diferencia jogadores da linha de trás e da frente em linguagem acessível.
- Cada novo detalhe pode ser acessado diretamente por URL e possui retorno para `/rules`.
- A busca local encontra as quatro novas regras por título, resumo, explicação ou termos alternativos controlados.
- Diagramas, textos e links mantêm acessibilidade por teclado e funcionam em celular e desktop.
- O conteúdo é revisado contra o regulamento oficial vigente da FIVB antes da publicação.
- A feature não introduz backend, banco de dados, CMS ou chamadas de rede.

## Fora do escopo

- Explicar sistemas táticos, combinações de ataque, posições especializadas ou estratégia de bloqueio.
- Regulamento completo de substituições, líbero, tempos técnicos, cartões ou procedimentos de arbitragem.
- Regras de vôlei de praia, categorias de base ou variações recreativas.
- Animações de jogadas, simulações interativas ou vídeos.
- Login, favoritos, progresso e edição administrativa de conteúdo.

## Dependências

- Feature `002-rules`, que estabelece o catálogo, a página de lista e o padrão de detalhe.
- Feature `003-search`, que pesquisa os campos textuais e termos alternativos das regras.
- Fonte oficial **FIVB Official Volleyball Rules 2025–2028** para revisão de cada texto e metadado.
- Criação de quatro diagramas SVG consistentes com os assets existentes.

## Riscos

- Invasão, bloqueio e ataque de fundo possuem exceções; simplificar demais pode induzir erro. Os textos devem delimitar o cenário básico ensinado.
- Substituições variam em contextos recreativos; o conteúdo deve indicar que trata a regra padrão do vôlei de quadra.
- Diagramas podem sugerir uma interpretação diferente da regra se não mostrarem a linha central, rede ou linha de ataque com clareza.
- A expansão do catálogo exige atualizar testes de integridade e busca para evitar links, conteúdo ou termos inconsistentes.
