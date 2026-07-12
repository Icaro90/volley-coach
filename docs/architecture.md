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
| `/rules` | Consultar regras básicas | Implementada na feature `002-rules` |
| `/search` | Exibir resultados de uma busca de regras | Implementada na feature `003-search` |
| `/rotation` | Explicar rodízio | Implementada na feature `004-rotation` |
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

Os dados ficam em `frontend/src/features/rules/data/rules.ts` e os diagramas vetoriais simples em `frontend/src/features/rules/assets/`. Essa separação evita que componentes de apresentação conheçam detalhes de conteúdo ou de arquivos estáticos.

### Fonte e revisão do conteúdo

O conteúdo desta feature referencia as **Official Volleyball Rules 2025–2028** da FIVB. Cada item de conteúdo deve registrar a edição da regra, URL da fonte e data da revisão. O detalhe da regra poderá apresentar uma referência curta à fonte, sem reproduzir o texto oficial integralmente.

### Rotas e estado de erro

- `/rules` lista as seis regras aprovadas na spec `002-rules`.
- `/rules/:ruleId` busca o item pelo identificador estável nos dados locais.
- Um identificador inexistente apresenta uma página de conteúdo não encontrado com link de retorno para `/rules`.

Não haverá estado global, TanStack Query ou chamadas HTTP nesta feature. Essas ferramentas passam a ser relevantes quando o conteúdo deixar de ser estático ou depender de servidor.

## Busca de regras

A feature `003-search` realiza uma busca local sobre os dados de `rules.ts`. O termo enviado fica na URL, o que torna o resultado compartilhável e preserva a busca ao atualizar a página ou usar a navegação do navegador.

```text
SearchForm na Home
      |
      | envia termo não vazio
      v
/search?q=termo
      |
      v
SearchResultsPage
      |
      +-- lê `q` com useSearchParams
      +-- chama função pura de busca
      +-- renderiza resultados ou estado vazio
```

### Organização

- `SearchForm`: componente controlado para digitar e enviar o termo, com mensagem local para uma submissão vazia.
- `SearchResultsPage`: lê `q` da URL e apresenta o resultado derivado, sem armazená-lo em estado React.
- `searchRules`: função pura em `frontend/src/features/search/utils/searchRules.ts`, responsável por normalizar texto, remover palavras funcionais e filtrar regras.

### Normalização

Antes da comparação, termo e campos pesquisáveis são convertidos para minúsculas, recebem `trim()`, têm marcas diacríticas removidas e removem pontuação. A busca compara palavras relevantes contra título, resumo, explicação e termos alternativos controlados por regra. Assim, `pontuacao` encontra `Pontuação` e `bola na linha vale?` encontra a regra de bola dentro ou fora sem introduzir uma biblioteca de busca.

### Evolução prevista

O contrato da função local isola a interface da estratégia de busca. Quando o catálogo crescer, a implementação poderá ser substituída por uma API ou mecanismo full-text, preservando a rota e o formato dos resultados.

## Estrutura do frontend

O frontend é organizado por feature. Cada feature mantém próximas as páginas, componentes, dados, assets, utilitários e testes que pertencem ao mesmo domínio.

```text
frontend/src/
├── app/                         # composição global de rotas
├── features/
│   ├── home/                    # Home, atalhos e seus dados
│   ├── rules/                   # lista, detalhe, conteúdo, SVGs e testes de regras
│   ├── search/                  # formulário, resultados, utilitário e testes de busca
│   └── rotation/                # página, componentes, dados e testes de rodízio
├── shared/
│   ├── components/              # componentes reutilizados entre features
│   └── pages/                   # páginas temporárias reutilizáveis
├── index.css                    # estilos globais mínimos
└── main.tsx                     # ponto de entrada React
```

Uma peça deve ficar dentro da feature enquanto tiver um único contexto de negócio. Ela só deve ir para `shared` quando for reutilizada por mais de uma feature e não carregar regra de negócio específica. Essa regra evita um diretório global de componentes sem dono claro.

## Rodízio

A feature `004-rotation` também permanece no frontend. Ela representa uma formação de seis posições e permite observar a próxima formação sem simular uma partida completa.

```text
Route `/rotation`
      |
      v
RotationPage
      |
      +-- formação inicial tipada
      +-- função pura de avançar uma posição
      +-- estado local do índice de rodízio (0 a 5)
      +-- diagrama de quadra renderizado por CSS/HTML
```

### Modelo e estado

Os dados definem a formação inicial e os metadados visuais de cada posição (número, nome e local na quadra). A transformação que avança uma rodada deve ser uma função pura, testada sem React: recebe a formação atual e devolve a próxima, preservando os seis participantes.

`RotationPage` guarda somente o índice da formação exibida em `useState`. Esse estado é local porque não precisa sobreviver a uma atualização de página, ser compartilhado por URL ou ser usado em outra rota. `Reiniciar` restaura o índice para zero; o diagrama e o texto de estado são valores derivados dele.

### Interface e acessibilidade

O diagrama será construído com HTML e CSS responsivo, e não com uma imagem ou canvas. Isso permite que cada posição tenha texto real, que o layout seja legível em telas pequenas e que leitores de tela recebam uma descrição da formação. Os controles serão botões semânticos, com foco visível e texto que informa qual rodízio está sendo exibido.

Não haverá estado global, TanStack Query, backend ou persistência. Caso uma versão futura passe a salvar formações, exercícios ou progresso por pessoa usuária, essa decisão deverá ser reavaliada.

## Decisões de qualidade

- Mobile-first: a interface é desenhada primeiro para telas pequenas e depois adaptada a telas maiores.
- Acessibilidade básica desde o início: controles semânticos, foco visível e uso por teclado.
- Sem estado global: esta tela não possui estado compartilhado que justifique uma solução global.
- Sem TanStack Query por enquanto: não há comunicação assíncrona com servidor. A biblioteca será introduzida quando houver uma API para consultar.

## Evolução prevista

Quando a busca ou o conteúdo de regras necessitar de dados reais, o frontend passa a consumir uma API NestJS. A camada de acesso a dados no backend será implementada com Prisma e PostgreSQL, preservando a separação entre interface, regras de aplicação e persistência.
