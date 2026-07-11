# Plano de tarefas — Home

Todas as tarefas pertencem à branch `feat/001-home` e começam na coluna **Backlog** do GitHub Projects. Mover uma tarefa para **Doing** somente quando suas dependências estiverem concluídas.

## Issue 1 — Inicializar o frontend com React, TypeScript e Vite

- **Estimativa:** 1 a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** criar a base do diretório `frontend/` com scripts de desenvolvimento, build e lint funcionando.
- **Aprendizado:** entender Vite como ferramenta de desenvolvimento e build; ele ocupa um papel semelhante ao Maven/Gradle na preparação e execução do projeto, mas focado no frontend.
- **Critérios de conclusão:** o projeto inicia localmente, o build de produção funciona e o lint não apresenta erros.
- **Commit sugerido:** `chore(frontend): initialize React application with Vite`

## Issue 2 — Configurar Tailwind CSS e estilos globais mínimos

- **Estimativa:** 1 a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** instalar e configurar Tailwind CSS e definir estilos globais mínimos para fonte, cores de fundo e foco visível.
- **Aprendizado:** compreender utilitários CSS e a diferença entre estilos globais deliberados e estilos locais de componentes.
- **Critérios de conclusão:** classes Tailwind são aplicadas na aplicação e controles focados têm indicação visual clara.
- **Commit sugerido:** `chore(frontend): configure Tailwind CSS`

## Issue 3 — Configurar rotas e páginas de destino temporárias

- **Estimativa:** 1 a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** configurar React Router para `/`, `/rules`, `/rotation` e `/quiz`, usando páginas simples temporárias para as três áreas futuras.
- **Aprendizado:** rotas no cliente cumprem um papel parecido com o mapeamento de endpoints em um `@Controller` do Spring, mas trocam componentes em vez de atender requisições no servidor.
- **Critérios de conclusão:** cada URL planejada renderiza uma página e é acessível pela navegação interna, sem recarregar o navegador.
- **Commit sugerido:** `feat(routing): add initial application routes`

## Issue 4 — Construir a estrutura visual da Home

- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 2 e 3
- **Objetivo:** criar a página inicial com identificação do aplicativo, mensagem de propósito e área de busca visual.
- **Aprendizado:** composição de componentes React e organização de uma página por responsabilidades visuais pequenas.
- **Critérios de conclusão:** a Home atende os critérios de aceite de identificação, descrição e campo de busca visível em celular, sem implementar busca real.
- **Commit sugerido:** `feat(home): add introductory content and search input`

## Issue 5 — Adicionar os atalhos de aprendizagem

- **Estimativa:** 1 a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 4
- **Objetivo:** adicionar cartões de `Regras básicas`, `Rodízio` e `Quiz rápido`, alimentados por dados estáticos locais e conectados às rotas planejadas.
- **Aprendizado:** renderização de listas em React e modelagem simples de dados com TypeScript.
- **Critérios de conclusão:** os três atalhos têm título, descrição e destino; podem ser acionados por mouse, toque e teclado.
- **Commit sugerido:** `feat(home): add learning shortcut cards`

## Issue 6 — Validar responsividade e acessibilidade da Home

- **Estimativa:** 1 a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issues 4 e 5
- **Objetivo:** verificar a Home em larguras de celular e desktop e corrigir problemas de semântica, teclado e foco.
- **Aprendizado:** transformar critérios de aceite de qualidade em uma verificação manual objetiva.
- **Critérios de conclusão:** a Home atende todos os critérios de aceite da spec, o build e o lint passam, e a revisão manual não encontra bloqueios de navegação por teclado.
- **Commit sugerido:** `fix(home): improve responsive and accessible navigation`

## Ordem de execução

```text
Issue 1
 ├─ Issue 2
 └─ Issue 3
     \
      Issue 4
        |
      Issue 5
        |
      Issue 6
```

## Definição de pronto para cada Issue

- Critérios de conclusão atendidos.
- Lint e build executados quando a ferramenta já estiver disponível.
- Alteração revisada antes do commit.
- Commit com Conventional Commits e escopo apropriado.
