# Spec 002 — Regras básicas

## Objetivo

Permitir que jogadores iniciantes consultem e entendam rapidamente regras básicas de vôlei por meio de explicações curtas, exemplos simples e apoio visual.

## Problema

Iniciantes têm dúvidas recorrentes durante treinos e partidas, mas textos oficiais de regras podem ser longos e técnicos. Eles precisam encontrar uma regra rapidamente e compreender o que acontece em quadra sem depender de conhecimento prévio.

## Usuário

Jogador ou jogadora iniciante de vôlei, em treinos ou partidas recreativas, que quer esclarecer uma dúvida específica sobre uma regra básica.

## Conteúdo inicial

A primeira versão apresenta as seguintes regras:

1. Pontuação.
2. Saque.
3. Três toques.
4. Condução e dois toques.
5. Toque na rede.
6. Bola dentro ou fora.

Rodízio não faz parte desta funcionalidade e será abordado na spec própria.

## Fluxo principal

1. A pessoa seleciona `Regras básicas` na Home.
2. Ela vê uma lista clara das seis regras disponíveis.
3. Seleciona uma regra para abrir sua explicação.
4. Lê uma definição simples, vê um exemplo de situação e consulta uma ilustração ou diagrama de apoio.
5. Pode voltar à lista e consultar outra regra.

## Critérios de aceite

- A rota `/rules` exibe as seis regras definidas nesta spec.
- Cada regra apresenta título e uma descrição curta em linguagem acessível a iniciantes.
- Cada regra possui uma página ou seção detalhada com explicação, exemplo prático e apoio visual simples.
- A pessoa consegue navegar da lista para o detalhe de uma regra e retornar à lista.
- O conteúdo deixa claro quando uma ação é permitida, falta ou ponto para o adversário, quando aplicável.
- A interface funciona em celular e desktop.
- Links e controles interativos podem receber foco e ser acionados pelo teclado.
- O conteúdo apresentado é revisado contra uma fonte oficial de regras antes da publicação.

## Fora do escopo

- Pesquisa de regras.
- Regras avançadas, interpretações de arbitragem e variações de modalidades como vôlei de praia.
- Rodízio, posições em quadra e sistemas táticos.
- Quiz, favoritos, progresso, autenticação e personalização.
- CMS, backend, banco de dados ou edição administrativa de conteúdo.
- Animações e simulações interativas de jogadas.

## Dependências

- Feature `001-home`, que já fornece o atalho para `/rules`.
- Validação do conteúdo contra o regulamento oficial vigente da FIVB antes da implementação.
- Definição ou criação de ilustrações simples para as regras, sem bloquear a estrutura textual inicial.

## Riscos

- Simplificar demais uma regra pode levar a interpretações incorretas; exemplos devem indicar seus limites.
- Regras oficiais podem ser atualizadas; a fonte e a data de revisão precisam ser registradas quando o conteúdo for criado.
- Criar seis ilustrações detalhadas pode aumentar o escopo; a primeira versão deve preferir diagramas simples e consistentes.
- Há variações entre vôlei de quadra, vôlei de praia e regras recreativas; o conteúdo deve deixar claro que se refere ao vôlei de quadra.
