# Spec 010 — Modo noturno

## Objetivo

Tornar o modo noturno o tema padrão do Volley Coach e oferecer uma alternância simples e acessível para que cada pessoa possa usar o tema claro quando preferir.

## Problema

A interface atual usa somente cores claras. Em treinos noturnos, ambientes com pouca luz ou uso prolongado no celular, isso pode causar desconforto visual. Aplicar apenas um fundo escuro, sem revisar superfícies, textos, bordas, formulários, ilustrações e estados interativos, produziria contraste inconsistente e prejudicaria a leitura.

## Usuário

Jogador ou jogadora iniciante que consulta regras pelo celular, em diferentes condições de iluminação, e precisa alternar o tema sem procurar uma configuração escondida.

## Fluxo principal

1. Na primeira visita, a pessoa abre o Volley Coach no tema escuro.
2. Encontra no cabeçalho um controle visível para alternar entre tema escuro e claro.
3. Ao ativar o tema claro, todas as telas passam a usar uma paleta coerente, sem recarregar a aplicação.
4. A escolha é salva no navegador.
5. Em uma visita posterior, o tema escolhido anteriormente é restaurado.

## Critérios de aceite

- A primeira visita abre a aplicação no tema escuro, sem depender da preferência do sistema operacional.
- O cabeçalho possui um controle semântico, acessível por teclado e com texto acessível que descreve a troca de tema disponível.
- A alternância entre os temas atualiza a interface sem recarregamento da página.
- A escolha de tema persiste no navegador e é restaurada ao atualizar a página ou retornar ao aplicativo.
- Home, regras, detalhes, busca, rodízio, quiz, estados vazios, formulários, cartões, botões, links, diagramas HTML/CSS e foco visível possuem cores coerentes nos dois temas.
- Texto, controles e estados de hover/foco mantêm contraste legível nos dois temas.
- A implementação não adiciona dependência, backend, API, estado global externo ou persistência em servidor.
- O comportamento de tema possui testes unitários para o estado inicial, alternância e persistência; componentes de interface relevantes possuem testes de renderização quando necessário.

## Fora do escopo

- Seguir automaticamente `prefers-color-scheme` do sistema operacional.
- Criar temas adicionais, personalização de cores ou seleção por dropdown.
- Sincronizar preferência entre dispositivos, contas ou banco de dados.
- Alterar conteúdo de regras, rotas, regras de negócio ou funcionalidades existentes.
- Redesenhar a identidade visual completa do produto além da adaptação necessária das cores.

## Dependências

- Estrutura atual em React, TypeScript, Tailwind CSS e React Router.
- `AppHeader`, presente em todas as páginas principais e ponto natural para o controle de tema.
- Estilos globais em `frontend/src/index.css` e componentes organizados por feature.
- Padrão de testes Vitest e React Testing Library em `frontend/test/`.

## Riscos

- Alterar classes de cor manualmente em cada componente pode deixar superfícies ou estados esquecidos; tokens de cor devem concentrar a decisão visual.
- Ler `localStorage` durante a renderização pode tornar o código menos testável ou falhar em contextos sem navegador; o acesso deve ser isolado e protegido.
- Um botão somente com ícone pode ser ambíguo para leitores de tela; o controle precisa de nome acessível e foco visível.
- A definição explícita de modo escuro como padrão diverge da preferência do sistema; isso é intencional nesta versão, mas deve ser reavaliado se houver feedback de pessoas usuárias.
