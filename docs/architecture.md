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
| `/quiz` | Praticar regras básicas por perguntas | Implementada na feature `005-quiz` |

## Consulta de regras básicas

A feature `002-rules` permanece inteiramente no frontend. O catálogo de regras é mantido em uma fonte de dados estática tipada, sem API ou banco de dados. Ele possui dez regras: as seis iniciais e quatro adicionadas na feature `007-additional-rules`.

```text
Route `/rules`             -> lista de regras
Route `/rules/:ruleId`     -> detalhe de uma regra
                                  |
                                  v
                      catálogo estático tipado
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

### Expansão do catálogo

A feature `007-additional-rules` estendeu o mesmo tipo `VolleyballRule`, o array `rules.ts` e a pasta `assets/` da feature. Os novos identificadores entraram no union `RuleId`, e cada regra recebeu os mesmos campos obrigatórios e um diagrama SVG local.

`RulesPage` e `RuleDetailPage` não exigem nova arquitetura: ambas já derivam sua interface a partir do catálogo. A busca local também passa a encontrar as regras novas automaticamente porque `searchRules` recebe o array completo e compara título, resumo, explicação e termos alternativos controlados.

O teste de integridade do catálogo valida dez regras, e os testes de busca cobrem ao menos um termo de cada regra adicionada. A criação dos quatro SVGs segue a decisão registrada na ADR 002.

Invasão, bloqueio e ataque de fundo foram revisados contra as regras FIVB pertinentes antes da escrita do conteúdo. Para substituições, a revisão registrou a orientação oficial vigente e os testes de quantidade de substituições anunciados pela FIVB para competições de 2026.

### Rotas e estado de erro

- `/rules` lista todas as regras aprovadas no catálogo atual.
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

O código de produção do frontend é organizado por feature. Cada feature mantém próximas as páginas, componentes, dados, assets e utilitários que pertencem ao mesmo domínio. Os testes ficam em uma pasta técnica única, na raiz do pacote frontend, e são agrupados pela feature que cobrem.

```text
frontend/src/
├── app/                         # composição global de rotas
├── features/
│   ├── home/                    # Home, atalhos e seus dados
│   ├── rules/                   # lista, detalhe, conteúdo e SVGs
│   ├── search/                  # formulário, resultados e utilitário
│   ├── rotation/                # página, componentes, dados e utilitário
│   └── quiz/                    # página, componentes, dados e reducer
├── shared/
│   └── components/              # componentes reutilizados entre features
├── index.css                    # estilos globais mínimos
└── main.tsx                     # ponto de entrada React

frontend/test/
├── rules/                       # testes da feature rules
├── search/                      # testes da feature search
├── rotation/                    # testes da feature rotation
└── quiz/                        # testes da feature quiz
```

Uma peça de produção deve ficar dentro da feature enquanto tiver um único contexto de negócio. Ela só deve ir para `shared` quando for reutilizada por mais de uma feature e não carregar regra de negócio específica. Essa regra evita um diretório global de componentes sem dono claro. Testes ficam fora de `src` para separar o código distribuído da infraestrutura de verificação, mas mantêm o mesmo nome de feature para preservar a rastreabilidade.

## Estratégia de testes

O frontend usa Vitest para testar comportamentos que podem falhar sem serem percebidos apenas pelo TypeScript:

- dados estáticos que formam contratos do produto, como regras e atalhos da Home;
- funções puras, como busca normalizada e transformação da formação de rodízio;
- estados de página definidos nas specs, como busca vazia, sem resultados e identificador de regra inválido;
- interações de pessoa usuária, como enviar a busca, avançar o rodízio e reiniciar a formação.

Os testes de componente usam React Testing Library e `jsdom`. Eles verificam o que a pessoa encontra e faz na interface, sem depender da implementação interna. Classes Tailwind, espaçamentos e SVGs estáticos não possuem testes unitários próprios; essas escolhas são verificadas na validação manual de responsividade e acessibilidade.

## Release do MVP

O frontend será publicado como uma SPA estática na Vercel. O projeto Vercel terá `frontend/` como diretório raiz, executará `npm run build` e publicará `dist/`. A integração com GitHub criará deploys de preview para branches e publicará produção quando mudanças chegarem à `main`.

Como React Router resolve as rotas no cliente, `frontend/vercel.json` deverá reescrever solicitações para `index.html`. Isso permite abrir diretamente `/rules`, `/search`, `/rotation` ou `/quiz` sem receber 404 do servidor estático.

```text
Pull Request para main
      |
      v
GitHub Actions: npm ci -> test -> lint -> build
      |
      v
Merge na main
      |
      v
Vercel: build do frontend -> deploy de produção
      |
      v
Smoke test pela URL pública
```

### Integração contínua

O workflow ficará em `.github/workflows/frontend-ci.yml` e será executado em Pull Requests para `main` e em pushes para `main`. Ele trabalhará em `frontend/`, usará Node 24, `npm ci` e cache do npm baseado em `frontend/package-lock.json`, depois executará `npm run test`, `npm run lint` e `npm run build` nessa ordem.

O Node 24 será declarado no projeto durante a implementação para manter desenvolvimento local e CI alinhados. O workflow terá apenas a permissão `contents: read`; não fará deploy nem acessará secrets.

### Responsabilidades das plataformas

- **GitHub Actions:** qualidade e feedback objetivo em Pull Requests.
- **Vercel:** hospedagem estática, HTTPS, previews e produção por integração Git.
- **Pessoa desenvolvedora:** conectar a conta Vercel, confirmar o diretório `frontend/`, registrar a URL pública e executar o smoke test após cada release.

Não haverá token da Vercel versionado ou deploy via CLI neste fluxo. A conexão Git gerenciada pela Vercel evita segredos no repositório e mantém o pipeline de qualidade independente do deploy.

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

## Quiz rápido

A feature `005-quiz` permanece no frontend e pratica cinco regras básicas já presentes no catálogo local. As perguntas não são buscadas em rede e a pontuação existe somente durante a sessão atual da página.

```text
Route `/quiz`
      |
      v
QuizPage
      |
      +-- perguntas estáticas tipadas
      +-- quizReducer (função pura)
      +-- estado: intro | question | feedback | result
      +-- índice atual, resposta selecionada e pontuação
      +-- porcentagem de aproveitamento derivada da pontuação
```

### Modelo e transições

Cada pergunta terá identificador estável, enunciado, alternativas, identificador da alternativa correta, explicação e referência à fonte FIVB. O conteúdo ficará em `frontend/src/features/quiz/data/questions.ts`, separado da interface.

`quizReducer` concentrará as transições: iniciar, selecionar alternativa, confirmar resposta, avançar e reiniciar. A página apenas dispara ações e renderiza o estado resultante. Isso evita estados impossíveis, como avançar antes de responder ou alterar uma resposta após o feedback. A porcentagem de aproveitamento é calculada no resultado a partir de `pontuação / total de perguntas`; ela não é armazenada no estado para evitar duplicação.

`useReducer` é apropriado porque índice, resposta, pontuação e fase mudam juntos. Para um único campo transitório, `useState` seria mais simples; neste fluxo, o reducer torna as regras explícitas e facilmente testáveis.

### Interface e acessibilidade

Alternativas serão controles semânticos de seleção dentro de um `fieldset` com `legend` para o enunciado. O feedback será anunciado com uma região `aria-live`, e os botões terão textos que descrevem a próxima ação. A página deve manter uma pergunta visível por vez e oferecer um link para `/rules` ao final.

Não haverá aleatoriedade no MVP: a ordem fixa torna o aprendizado e os testes determinísticos. Quando houver conteúdo maior ou progresso persistido, a fonte de perguntas e a estratégia de seleção poderão ser reavaliadas.

## Decisões de qualidade

- Mobile-first: a interface é desenhada primeiro para telas pequenas e depois adaptada a telas maiores.
- Acessibilidade básica desde o início: controles semânticos, foco visível e uso por teclado.
- Sem estado global: esta tela não possui estado compartilhado que justifique uma solução global.
- Sem TanStack Query por enquanto: não há comunicação assíncrona com servidor. A biblioteca será introduzida quando houver uma API para consultar.

## Evolução prevista

Quando a busca ou o conteúdo de regras necessitar de dados reais, o frontend passa a consumir uma API NestJS. A camada de acesso a dados no backend será implementada com Prisma e PostgreSQL, preservando a separação entre interface, regras de aplicação e persistência.
