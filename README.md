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

Ficam fora do MVP: login, favoritos, progresso, scout, IA, CMS, backend e banco de dados.

### Estado das funcionalidades

| Feature | Status | Responsabilidade |
| --- | --- | --- |
| `001-home` | Concluída | Apresentar o app, atalhos e busca. |
| `002-rules` | Concluída | Listar e detalhar regras com diagramas SVG. |
| `003-search` | Concluída | Buscar regras por termo em `/search?q=...`. |
| `004-rotation` | Concluída | Explicar posições e ordem em quadra. |
| `005-quiz` | Concluída | Reforçar o aprendizado com perguntas rápidas. |
| `007-additional-rules` | Concluída | Ampliar o catálogo para dez regras. |
| `006-release-prep` | Em desenvolvimento | Publicar o MVP e automatizar verificações de qualidade. |

O conteúdo de vôlei de quadra é baseado na [FIVB Official Volleyball Rules 2025–2028](https://www.fivb.com/volleyball/the-game/official-volleyball-rules/). As explicações do app são uma simplificação educativa.

## Stack

### Atual

- React 19, TypeScript e Vite;
- Tailwind CSS;
- React Router;
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

### Comandos úteis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run test` | Executa os testes unitários uma vez. |
| `npm run lint` | Executa análise estática. |
| `npm run build` | Executa TypeScript e cria o build de produção. |
| `npm run preview` | Serve localmente o build de produção. |

Antes de uma Pull Request, execute `npm run test`, `npm run lint` e `npm run build`.

## Deploy e release

### URL de produção

**Pendente de configuração da Vercel.** Após a primeira publicação, registre a URL aqui.

### Configuração inicial na Vercel

1. Conecte a conta Vercel ao repositório GitHub do projeto e importe o repositório.
2. Defina **Root Directory** como `frontend`.
3. Use o preset de framework Vite; o build gera `dist/` com `npm run build`.
4. Não configure variáveis de ambiente ou tokens: o MVP é estático e não requer secrets.
5. Conclua a importação. Branches recebem previews e a `main` publica a produção.

O arquivo `frontend/vercel.json` faz o fallback das rotas da SPA para `index.html`. Isso permite abrir URLs como `/rules` diretamente ou atualizar a página sem receber 404 da hospedagem.

### Integração contínua

O workflow [Frontend quality](.github/workflows/frontend-quality.yml) executa em Pull Requests destinadas à `main` e em pushes para a `main`. Ele usa Node 24, `npm ci`, cache npm e roda testes, lint e build. Uma falha em qualquer etapa reprova o job.

### Smoke test após deploy

Depois que a Vercel publicar uma preview ou produção, valide no navegador:

1. Abra `/` e confirme Home, atalhos e formulário de busca.
2. Pesquise `saque` e confirme a navegação para `/search?q=saque` com resultado correspondente.
3. Abra `/rules` e um detalhe, por exemplo `/rules/scoring`; atualize a página para confirmar o fallback da SPA.
4. Abra diretamente `/rotation`, avance um rodízio e reinicie a formação.
5. Abra diretamente `/quiz`, responda uma pergunta e confirme o feedback.
6. Abra `/rules/block` e `/rules/back-row-attack` diretamente para validar as rotas adicionadas após o MVP inicial.
7. Faça uma verificação rápida em celular e desktop, sem corte de conteúdo ou rolagem horizontal.

Registre a URL publicada e o resultado desse roteiro na validação da Spec 006 antes de encerrar a release.

## Rotas atuais

| Rota | Descrição |
| --- | --- |
| `/` | Home com apresentação, atalhos e formulário de busca. |
| `/rules` | Lista das regras básicas. |
| `/rules/:ruleId` | Detalhe da regra, exemplo, diagrama e fonte. |
| `/search?q=termo` | Resultados da busca local. |
| `/rotation` | Página interativa para entender posições e ordem de rodízio. |
| `/quiz` | Quiz interativo sobre regras básicas. |

## Estrutura do repositório

```text
docs/       # arquitetura e Architecture Decision Records (ADRs)
specs/      # specs, tarefas e validações por feature
frontend/   # aplicação React
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
│   │   ├── components/
│   │   └── data/
│   ├── rules/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── data/
│   │   └── assets/
│   ├── search/
│       ├── pages/
│       ├── components/
│       └── utils/
│   └── rotation/
│       ├── pages/
│       ├── components/
│       ├── data/
│       └── utils/
├── shared/
│   └── components/                # sem regra de negócio específica
├── index.css                      # estilos globais mínimos
└── main.tsx                       # entrada React

frontend/test/
├── rules/                          # testes da feature rules
├── search/                         # testes da feature search
└── rotation/                       # testes da feature rotation
```

Exemplos:

- `features/rules/data/rules.ts`: conteúdo e fonte das regras;
- `features/rules/assets/`: diagramas SVG das regras;
- `features/search/utils/searchRules.ts`: busca pura e normalizada;
- `features/rotation/utils/rotateFormation.ts`: transformação pura da formação de rodízio;
- `shared/components/AppHeader.tsx`: componente usado por múltiplas features.

## Arquitetura atual

- O MVP é frontend-first: não há API, autenticação ou persistência.
- Regras são dados estáticos tipados no frontend.
- Diagramas didáticos usam SVG local, leve e escalável.
- A busca usa `/search?q=...` como fonte de verdade; a URL pode ser atualizada, compartilhada e navegada pelo histórico.
- A busca ignora caixa e acentos: `pontuacao` encontra `Pontuação`.
- Não há estado global: resultados são derivados da URL e dos dados locais.

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

- Uma branch por feature, como `feat/003-search`.
- Commits pequenos com Conventional Commits.
- Pull Request para `main` após validação e revisão de código.
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
5. Não introduza backend, estado global ou bibliotecas de consulta sem necessidade comprovada.
6. Atualize README, arquitetura, specs e ADRs quando uma rota, estrutura ou decisão mudar.

## Documentação relacionada

- [Arquitetura](docs/architecture.md)
- [ADRs](docs/adr/)
- [Specs](specs/)
