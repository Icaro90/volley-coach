# Spec 020 — Atalhos essenciais na Home

## Objetivo

Deixar a tela inicial do Volley Coach mais fácil de entender e reduzir a repetição entre as opções do cabeçalho e os atalhos da própria Home.

## Usuário e problema

Quem abre o app para tirar uma dúvida rápida encontra uma fileira de opções pequenas no topo e uma lista extensa de recursos abaixo. A duplicação torna a escolha inicial mais difícil.

## Fluxo principal

1. A pessoa abre a Home e encontra a busca e quatro atalhos: Regras, Treinos, Quiz e Favoritos.
2. A barra inferior permite retornar ao Início, buscar regras, abrir Treinos ou consultar **Mais**.
3. A página **Mais** agrupa Rodízio, Diário, Consulta rápida, Glossário e Scout.
4. Todas as opções principais permanecem acessíveis em telas pequenas e grandes.

## Critérios de aceite

- O cabeçalho mostra apenas a marca do app e o controle de tema; remove a faixa horizontal de atalhos.
- A Home apresenta uma mensagem curta, busca, quatro atalhos essenciais e link para **Ver tudo**.
- Os atalhos essenciais levam a `/rules`, `/training`, `/quiz` e `/favorites`.
- A navegação inferior fixa contém Início, Buscar, Treinos e Mais, com rótulos visíveis, estado da página atual acessível e alvos adequados ao toque.
- Buscar abre uma tela com formulário funcional mesmo sem consulta na URL; o envio leva a resultados de busca existentes.
- `/more` lista os recursos secundários existentes com seus destinos corretos.
- O conteúdo não fica encoberto pela navegação inferior, inclusive no Android com área segura.
- A Home e as rotas secundárias continuam responsivas, navegáveis por teclado e compatíveis com tema claro/escuro.

## Fora do escopo

- Remover ou renomear recursos existentes.
- Recomendação personalizada, progresso diário ou conteúdo novo na Home.
- Alterar a identidade visual global ou o conteúdo das features.

## Dependências

- Navegação e recursos existentes nas specs 001–019.
- Página de busca existente e roteamento React Router.

## Estado da implementação

Home, navegação inferior, página Mais e formulário de busca sem consulta foram implementados no frontend. Testes, lint, build e APK Android passaram; validação manual em aparelho/emulador continua pendente.
