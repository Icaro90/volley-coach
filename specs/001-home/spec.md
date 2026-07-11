# Spec 001 — Home

## Objetivo

Oferecer uma tela inicial simples que ajude jogadores iniciantes a encontrar rapidamente o conteúdo que desejam aprender sobre regras de vôlei.

## Problema

Durante treinos e jogos, iniciantes costumam ter dúvidas pontuais sobre regras e podem não saber por onde começar a estudar. Uma navegação extensa ou muitos recursos na tela aumenta a carga cognitiva e dificulta encontrar uma resposta rapidamente.

## Usuário

Jogador ou jogadora iniciante de vôlei, principalmente em treinos ou partidas recreativas, que quer entender uma regra de forma rápida e visual.

## Fluxo principal

1. A pessoa abre o aplicativo e entende, por uma mensagem curta, que ele ensina regras de vôlei.
2. Ela escolhe um dos caminhos principais: consultar regras básicas, entender rodízio ou iniciar um quiz.
3. Como alternativa, ela usa o campo de pesquisa para informar uma dúvida específica.
4. O aplicativo a encaminha para a área escolhida.

## Critérios de aceite

- A Home apresenta o nome do aplicativo e uma descrição curta do seu propósito.
- Um campo de pesquisa é visível sem que seja necessário rolar a página em um viewport de `360 × 640` pixels CSS.
- A tela disponibiliza atalhos claros para `Regras básicas`, `Rodízio` e `Quiz rápido`.
- Cada atalho possui um título e uma breve descrição em linguagem simples.
- Os atalhos são visualmente distinguíveis e fáceis de selecionar em telas pequenas.
- A Home é responsiva para celular e desktop.
- Os elementos interativos podem receber foco e ser acionados pelo teclado.
- A Home não exige autenticação para ser acessada.

## Fora do escopo

- Executar pesquisas e apresentar resultados reais.
- Exibir o conteúdo detalhado de regras, rodízio ou quiz.
- Autenticação, favoritos, perfil ou acompanhamento de progresso.
- Integração com backend ou banco de dados.
- Animações complexas, personalização ou gamificação.

## Dependências

- As rotas `/rules`, `/rotation` e `/quiz`, já configuradas na aplicação para receber os atalhos da Home.
- Conteúdo detalhado de rodízio e quiz, que será definido em suas próprias specs e não bloqueia a Home.

## Riscos

- Colocar muitas opções na tela pode tornar a Home confusa para iniciantes.
- Uma busca sem resultados úteis pode gerar expectativa frustrada; nesta fase, ela deve ser tratada como interface e ter seu comportamento especificado em uma funcionalidade própria.
- Ilustrações excessivamente detalhadas podem prejudicar a leitura e o desempenho em dispositivos móveis.

## Decisões de produto registradas

- A busca recebe destaque porque dúvidas sobre regras tendem a ser específicas e urgentes.
- São exibidos apenas três caminhos principais para reduzir indecisão: regras básicas, rodízio e quiz.
- A Home deve priorizar celular, pois o uso esperado inclui consultas durante treinos e jogos.
