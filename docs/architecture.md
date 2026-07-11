# Arquitetura

## Estado atual do MVP

O MVP começa como uma aplicação frontend, responsável por apresentar conteúdo educativo e conduzir a pessoa entre as áreas do produto. Nesta fase, a Home não depende de API, autenticação ou persistência.

Essa escolha permite validar a experiência de navegação e aprendizado antes de introduzir complexidade operacional e de domínio no backend.

## Fronteiras iniciais

```text
Pessoa usuária
      |
      v
React + TypeScript (frontend)
      |
      +-- dados estáticos locais (temporários)
      +-- rotas da aplicação
```

O backend NestJS, o Prisma e o PostgreSQL permanecem previstos para quando uma funcionalidade exigir dados dinâmicos, como autenticação, favoritos, progresso ou gestão de conteúdo.

## Rotas planejadas

| Rota | Responsabilidade | Estado inicial |
| --- | --- | --- |
| `/` | Apresentar a Home e os atalhos de aprendizagem | Implementada nesta feature |
| `/rules` | Consultar regras básicas | Destino temporário até a spec própria |
| `/rotation` | Explicar rodízio | Destino temporário até a spec própria |
| `/quiz` | Iniciar quiz | Destino temporário até a spec própria |

## Organização do frontend

Para a feature Home, a composição esperada é pequena:

- `HomePage`: organiza a página e seus blocos.
- Cabeçalho: identifica o aplicativo.
- Busca: recebe o texto de uma dúvida, sem executar pesquisa nesta feature.
- Cartões de atalho: levam às áreas de regras, rodízio e quiz.

Componentes devem ter uma responsabilidade visual clara. Dados que alimentam os três cartões podem ficar em uma estrutura estática local até existir uma necessidade concreta de API.

## Decisões de qualidade

- Mobile-first: a interface é desenhada primeiro para telas pequenas e depois adaptada a telas maiores.
- Acessibilidade básica desde o início: controles semânticos, foco visível e uso por teclado.
- Sem estado global: esta tela não possui estado compartilhado que justifique uma solução global.
- Sem TanStack Query por enquanto: não há comunicação assíncrona com servidor. A biblioteca será introduzida quando houver uma API para consultar.

## Evolução prevista

Quando a busca ou o conteúdo de regras necessitar de dados reais, o frontend passa a consumir uma API NestJS. A camada de acesso a dados no backend será implementada com Prisma e PostgreSQL, preservando a separação entre interface, regras de aplicação e persistência.
