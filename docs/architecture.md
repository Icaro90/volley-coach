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
| `/rules` | Consultar regras básicas | Planejada na feature `002-rules` |
| `/rotation` | Explicar rodízio | Destino temporário até a spec própria |
| `/quiz` | Iniciar quiz | Destino temporário até a spec própria |

## Consulta de regras básicas

A feature `002-rules` permanece inteiramente no frontend. As seis regras iniciais serão mantidas em uma fonte de dados estática tipada, sem API ou banco de dados.

```text
Route `/rules`             -> lista de regras
Route `/rules/:ruleId`     -> detalhe de uma regra
                                  |
                                  v
                      dados estáticos tipados
                                  |
                                  +-- explicação e exemplo
                                  +-- resultado da jogada
                                  +-- referência da fonte oficial
                                  +-- ilustração SVG simples
```

### Modelo de conteúdo esperado

Cada regra possui um identificador estável para a URL, título, descrição curta, explicação, exemplo prático, resultado da jogada e metadados da fonte. A ilustração é referenciada como um recurso local e precisa de texto alternativo descritivo.

Os dados ficarão em `frontend/src/data/rules.ts` e os diagramas vetoriais simples em `frontend/src/assets/rules/`. Essa separação evita que componentes de apresentação conheçam detalhes de conteúdo ou de arquivos estáticos.

### Fonte e revisão do conteúdo

O conteúdo desta feature referencia as **Official Volleyball Rules 2025–2028** da FIVB. Cada item de conteúdo deve registrar a edição da regra, URL da fonte e data da revisão. O detalhe da regra poderá apresentar uma referência curta à fonte, sem reproduzir o texto oficial integralmente.

### Rotas e estado de erro

- `/rules` lista as seis regras aprovadas na spec `002-rules`.
- `/rules/:ruleId` busca o item pelo identificador estável nos dados locais.
- Um identificador inexistente apresenta uma página de conteúdo não encontrado com link de retorno para `/rules`.

Não haverá estado global, TanStack Query ou chamadas HTTP nesta feature. Essas ferramentas passam a ser relevantes quando o conteúdo deixar de ser estático ou depender de servidor.

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
