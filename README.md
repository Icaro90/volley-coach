# Volley Coach

Aplicativo educacional para ensinar regras de vôlei de forma simples, visual e intuitiva. O MVP atende principalmente pessoas iniciantes que querem tirar dúvidas durante treinos ou partidas recreativas.

## Produto

O produto transforma regras técnicas em explicações curtas, exemplos de quadra e diagramas simples. O objetivo não é substituir o regulamento oficial, mas tornar seu aprendizado mais acessível.

### Escopo do MVP

- consultar regras básicas;
- buscar regras por termos de dúvida;
- visualizar diagramas didáticos;
- entender o rodízio com uma quadra interativa;
- responder perguntas rápidas para reforçar as regras.

Fora do escopo do MVP inicial: login, sincronização de progresso, IA, CMS, backend e banco de dados. Favoritos, treinos, diário, consulta rápida, glossário, scout e compartilhamento foram adicionados como funcionalidades locais pós-MVP.

### Estado das funcionalidades

| Feature | Status | Responsabilidade |
| --- | --- | --- |
| `001-home` | Concluída | Apresentar o app, atalhos e busca. |
| `002-rules` | Concluída | Listar e detalhar regras com diagramas SVG. |
| `003-search` | Concluída | Buscar regras por termo em `/search?q=...`. |
| `004-rotation` | Concluída | Explicar posições e ordem em quadra. |
| `005-quiz` | Concluída | Reforçar o aprendizado com perguntas rápidas. |
| `007-additional-rules` | Concluída | Ampliar o catálogo para dez regras. |
| `008-position-faults` | Concluída | Explicar faltas de posição e ordem de saque. |
| `006-release-prep` | Concluída | Publicar o MVP e automatizar verificações de qualidade. |
| `009-homologation-and-back-navigation` | Concluída | Controlar ambientes de entrega e padronizar retornos entre páginas. |
| `010-dark-mode` | Concluída | Tema escuro padrão, tema claro opcional e preferência local. |
| `011-android-app` | APK debug gerado; teste em dispositivo pendente | Empacotar o frontend em app Android via Capacitor. |
| `012-favorites` | Implementada; revisão visual e mobile pendentes | Salvar regras e exercícios no próprio dispositivo. |
| `013-guided-training` | Implementada; revisão de conteúdo e mobile pendentes | Consultar exercícios por fundamento, nível e duração. |
| `014-quiz-topics-and-levels` | Implementada; revisão visual e mobile pendentes | Escolher tema e dificuldade antes de iniciar o quiz. |
| `015-training-diary` | Parcial; detalhe dedicado, testes CRUD e mobile pendentes | Registrar sessões, exercícios e observações localmente. |
| `016-quick-reference` | Implementada; revisão de conteúdo e mobile pendentes | Consultar regras frequentes em formato compacto. |
| `017-volleyball-glossary` | Implementada; revisão editorial e mobile pendentes | Buscar termos com explicações e links relacionados. |
| `018-match-scout` | Parcial; confirmação de exclusão e testes completos pendentes | Registrar placar e eventos de partidas localmente. |
| `019-content-sharing` | Parcial; fallback em falha e URL canônica pendentes | Compartilhar regras, exercícios e termos. |
| `020-essential-home-shortcuts` | Implementada; APK atualizado, validação manual Android pendente | Reduzir os atalhos visíveis e organizar a navegação por destino. |
| `021-attendance` | Implementada localmente; APK debug gerado | Abrir chamadas, marcar presença e acompanhar histórico individual. |
| `022-athlete-profiles` | Implementada localmente; APK debug gerado | Manter fichas editáveis e arquiváveis para o elenco. |
| `023-skill-assessment` | Implementada localmente; APK debug gerado | Registrar e consultar avaliações por fundamento. |
| `024-weekly-challenges` | Implementada localmente; APK debug gerado | Definir metas de equipe e acompanhar progresso individual. |
| `025-game-plan` | Implementada localmente; APK debug gerado | Organizar estratégia e vincular plano a formação e scout. |
| `026-formation-library` | Implementada localmente; APK debug gerado | Salvar escalações, reservas e visualizar a rotação. |
| `027-court-mode` | Implementada localmente; APK debug gerado | Usar atalhos grandes, cronômetro e opção de tela ativa na quadra. |
| `028-data-backup` | Implementada localmente; APK debug gerado | Exportar, mesclar e restaurar dados locais via JSON. |
| `029-coach-collaboration` | Pendente de decisão de backend, autenticação e revisão de privacidade | Compartilhar dados e sincronizar comissão técnica. |
| `030-category-adaptation` | Pendente de revisão editorial por profissional qualificado | Adaptar exercícios ao contexto da equipe. |
| `031-match-scoreboard` | Implementada localmente; APK debug gerado | Contar pontos e sets, desfazer ações e reabrir resultados. |
| `032-scoreboard-history-scout` | Implementada como integração opt-in; APK debug gerado | Salvar resultados no histórico e associar ou criar scout. |

O conteúdo de vôlei de quadra é baseado na [FIVB Official Volleyball Rules 2025–2028](https://www.fivb.com/volleyball/the-game/official-volleyball-rules/). As explicações do app são uma simplificação educativa.

## Stack

### Atual

- React 19, TypeScript e Vite;
- Tailwind CSS;
- React Router;
- Capacitor 8 para empacotar o frontend como aplicativo Android;
- `@capacitor/share` para abrir o compartilhamento nativo no Android;
- Vitest para testes unitários;
- Oxlint para análise estática.
- GitHub Actions para CI de testes, lint e build.

### Planejada

- NestJS, Prisma e PostgreSQL quando houver dados dinâmicos;
- TanStack Query quando existir API;
- Docker e hospedagem em Vercel/Render ou Railway.

## Como executar

Pré-requisitos: Node.js 24 e npm.

```bash
cd frontend
npm ci
npm run dev
```

O Vite exibirá a URL local da aplicação, normalmente `http://localhost:5173`.

### App Android

O projeto Android nativo fica isolado em `mobile/` e usa o frontend de `frontend/`. Para abrir no Android Studio, instale o Android Studio e o Android SDK e siga as instruções em [mobile/README.md](mobile/README.md). Depois de alterar o frontend, gere o build web e sincronize os arquivos com o projeto nativo.

### Comandos úteis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run test` | Executa os testes unitários uma vez. |
| `npm run lint` | Executa análise estática. |
| `npm run build` | Executa TypeScript e cria o build de produção. |
| `npm run preview` | Serve localmente o build de produção. |

Antes de uma Pull Request, execute `npm run test`, `npm run lint` e `npm run build`.

## Fluxo de branches

Crie branches de trabalho a partir de `hom` e use os prefixos `feature/`, `fix/`, `docs/` ou `chore/`. Um push em `feature/**` abre automaticamente uma Pull Request para `hom`; os demais tipos de branch usam PR manual. Consulte o [fluxo de desenvolvimento](docs/development-workflow.md) para convenções, exemplos e configuração da automação.

## Deploy e release

### URL de produção


[https://volley-coach-rho.vercel.app/](https://volley-coach-rho.vercel.app/)

### Configuração inicial na Vercel

1. Conecte a conta Vercel ao repositório GitHub do projeto e importe o repositório.
2. Defina **Root Directory** como `frontend`.
3. Use o preset de framework Vite; o build gera `dist/` com `npm run build`.
4. Não configure variáveis de ambiente ou tokens: o MVP é estático e não requer secrets.
5. Conclua a importação. Configure `main` como branch de produção e `hom` como branch de homologação. O repositório limitará deploys automáticos a essas duas branches.

O arquivo `frontend/vercel.json` faz o fallback das rotas da SPA para `index.html`. Isso permite abrir URLs como `/rules` diretamente ou atualizar a página sem receber 404 da hospedagem.

### Integração contínua

O workflow [Frontend quality](.github/workflows/frontend-quality.yml) executa a cada push, em qualquer branch. Ele fixa Node 24.11.0, usa `npm ci`, cache npm e roda testes, lint e build. Uma falha em qualquer etapa reprova o job. Quando uma mudança chega a `hom`, o workflow abre, se necessário, uma Pull Request de promoção para `main`; o merge continua manual.

Para permitir essa criação automática, em **Settings → Actions → General → Workflow permissions**, habilite **Allow GitHub Actions to create and approve pull requests**. O workflow não aprova nem faz merge de Pull Requests; a opção apenas autoriza o `GITHUB_TOKEN` a abrir a PR de promoção.

### Fluxo de entrega

1. Crie uma branch `feature/...` a partir de `hom`.
2. Todo commit recebe validação no GitHub Actions, sem deploy da Vercel.
3. Abra e faça merge da Pull Request da feature para `hom`.
4. Valide manualmente o deploy de homologação publicado pela Vercel.
5. Revise e faça merge da Pull Request automática de `hom` para `main`.
6. Confirme o deploy de produção.

### Smoke test após deploy

Depois que a Vercel publicar uma preview ou produção, valide no navegador:

1. Abra `/` e confirme Home, atalhos e formulário de busca.
2. Pesquise `saque` e confirme a navegação para `/search?q=saque` com resultado correspondente.
3. Abra `/rules` e um detalhe, por exemplo `/rules/scoring`; atualize a página para confirmar o fallback da SPA.
4. Abra diretamente `/rotation`, avance um rodízio e reinicie a formação.
5. Abra diretamente `/quiz`, responda uma pergunta e confirme o feedback.
6. Abra `/rules/block` e `/rules/back-row-attack` diretamente para validar as rotas adicionadas após o MVP inicial.
7. Abra `/favorites`, `/training`, `/diary`, `/quick-reference`, `/glossary`, `/scout`, `/team`, `/scoreboard`, `/court-mode`, `/backup` e `/more`; faça uma ação básica em cada recurso.
8. Faça uma verificação rápida em celular e desktop, sem corte de conteúdo ou rolagem horizontal.

Registre a URL publicada e o resultado desse roteiro na validação da Spec 006 antes de encerrar a release.

## Rotas atuais

| Rota | Descrição |
| --- | --- |
| `/` | Home com busca e quatro atalhos essenciais. |
| `/rules` | Lista das regras básicas. |
| `/rules/:ruleId` | Detalhe da regra, exemplo, diagrama e fonte. |
| `/search` ou `/search?q=termo` | Formulário inicial ou resultados da busca local. |
| `/rotation` | Página interativa para entender posições e ordem de rodízio. |
| `/quiz` | Quiz filtrado por tema e nível. |
| `/favorites` | Regras e exercícios favoritados neste dispositivo. |
| `/training` | Catálogo de exercícios com filtros. |
| `/training/:exerciseId` | Detalhe, favorito e compartilhamento de exercício. |
| `/diary` | Registros locais de treino. |
| `/quick-reference` | Busca de respostas curtas para situações de vôlei. |
| `/glossary` | Busca e filtros de termos de vôlei. |
| `/glossary/:termId` | Definição, exemplo e termos relacionados. |
| `/scout` | Lista e criação de partidas. |
| `/scout/:matchId` | Placar, eventos e resumo da partida. |
| `/more` | Recursos secundários agrupados por objetivo. |
| `/team` | Fichas, chamadas, avaliações, desafios, planos de jogo e formações locais. |
| `/scoreboard` | Placar autônomo com sets e vínculos opt-in ao histórico/scout. |
| `/court-mode` | Atalhos de quadra e cronômetro de treino. |
| `/backup` | Exportação e importação validada de dados locais. |

A navegação inferior persistente contém **Início**, **Buscar**, **Treinos** e **Mais**; regras, quiz e favoritos aparecem entre os atalhos principais da Home. Os recursos secundários ficam em `/more`.

## Estrutura do repositório

```text
docs/       # arquitetura e Architecture Decision Records (ADRs)
specs/      # specs, tarefas e validações por feature
frontend/   # aplicação React
mobile/     # app Android Capacitor, separado do frontend
README.md   # ponto de entrada de produto e engenharia
```

### Estrutura do frontend

O frontend segue organização por feature: tudo que possui um único contexto de negócio fica próximo; apenas itens realmente reutilizáveis ficam em `shared`.

```text
frontend/src/
├── app/
│   └── App.tsx                    # rotas globais
├── features/
│   ├── home/
│   │   ├── HomePage.tsx
│   │   ├── MorePage.tsx
│   │   ├── components/
│   │   └── data/
│   ├── rules/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── data/
│   │   └── assets/
│   ├── search/
│   ├── rotation/
│   ├── quiz/
│   ├── favorites/
│   ├── training/
│   ├── diary/
│   ├── quick-reference/
│   ├── glossary/
│   └── scout/
├── shared/
│   ├── components/                # navegação, tema e compartilhamento
│   ├── favorites/                 # provider e controle compartilhado
│   ├── storage/                   # persistência local defensiva
│   └── theme/                     # tema transversal e preferência local
├── index.css                      # estilos globais mínimos
└── main.tsx                       # entrada React

frontend/test/
├── home/                           # atalhos da Home
├── theme/                          # preferência e alternância de tema
├── rules/                          # testes da feature rules
├── search/                         # testes da feature search
├── rotation/                       # testes da feature rotation
├── quiz/                            # testes de questões e sessão
├── scout/                           # testes de regras básicas do scout
└── shared/                          # testes do armazenamento local
```

Exemplos:

- `features/rules/data/rules.ts`: conteúdo e fonte das regras;
- `features/rules/assets/`: diagramas SVG das regras;
- `features/search/utils/searchRules.ts`: busca pura e normalizada;
- `features/rotation/utils/rotateFormation.ts`: transformação pura da formação de rodízio;
- `shared/components/AppHeader.tsx`: cabeçalho leve e navegação inferior para as rotas do app.

## Arquitetura atual

- O produto continua frontend-first: não há API, autenticação ou banco de dados.
- Regras são dados estáticos tipados no frontend.
- Favoritos, diário e scout persistem no armazenamento local do navegador/WebView; não sincronizam entre dispositivos.
- Contextos React são usados para dados compartilhados de favoritos e scout; o diário usa o adaptador local diretamente.
- Diagramas didáticos usam SVG local, leve e escalável.
- A busca usa `/search?q=...` como fonte de verdade; a URL pode ser atualizada, compartilhada e navegada pelo histórico.
- A busca ignora caixa e acentos: `pontuacao` encontra `Pontuação`.
- Busca e filtros são derivados do estado da rota/página; favoritos e scout usam contextos React.
- Tema visual é transversal: tema escuro padrão, tema claro opcional e preferência local.

As decisões completas estão em [docs/architecture.md](docs/architecture.md) e nos [ADRs](docs/adr/).

## Desenvolvimento orientado a especificações

O projeto segue Spec-Driven Development (SDD):

1. Entender o problema.
2. Escrever ou revisar a spec.
3. Definir critérios de aceite e fora do escopo.
4. Discutir arquitetura e criar ADR quando necessário.
5. Quebrar em Issues de 30 minutos a 2 horas.
6. Implementar, testar, revisar e atualizar documentação.

Cada feature possui uma pasta própria:

```text
specs/00x-feature/
├── spec.md        # objetivo, fluxo, aceitação, escopo e riscos
├── tasks.md       # Issues pequenas e ordenadas
└── validation.md  # evidências de validação final
```

## Convenções de Git

- Uma branch por feature, como `feat/003-search`, criada a partir de `hom`.
- Commits pequenos com Conventional Commits.
- Pull Request de feature para `hom`; após homologação, Pull Request de `hom` para `main`.
- Alterações arquiteturais atualizam `docs/architecture.md` e, quando relevantes, uma ADR.

Exemplos:

```text
feat(search): add rules search results page
docs(spec): add search validation record
refactor(frontend): organize code by feature
```

## Guia para futuras alterações

1. Leia a spec e os ADRs relacionados antes de alterar uma feature.
2. Preserve os limites entre `app`, `features` e `shared`.
3. Coloque páginas, dados, assets, componentes e utilitários dentro da feature dona; mantenha seus testes correspondentes em `frontend/test/<tema>/`.
4. Prefira funções puras para transformação e busca; teste-as em `frontend/test/<tema>/`.
5. Não introduza backend, novos contextos de estado ou bibliotecas de consulta sem necessidade comprovada; os providers atuais atendem favoritos e scout.
6. Atualize README, arquitetura, specs e ADRs quando uma rota, estrutura ou decisão mudar.

## Documentação relacionada

- [Arquitetura](docs/architecture.md)
- [ADRs](docs/adr/)
- [Specs](specs/)
