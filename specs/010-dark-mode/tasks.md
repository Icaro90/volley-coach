# Plano de tarefas — Modo noturno

Todas as tarefas pertencem à branch `feat/010-dark-mode` e passam pelo fluxo **Backlog → Todo → Doing → Review → Done** no GitHub Projects.

**Status da execução:** todas as seis issues foram concluídas e a feature está pronta para revisão da Pull Request.

## Issue 1 — Definir tokens semânticos e bootstrap do tema

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** definir tokens de cor para os papéis visuais em `index.css`, configurar o tema escuro como padrão e adicionar o bootstrap no `index.html` para aplicar o tema antes da montagem do React.
- **Aprendizado:** tokens são o contrato visual da aplicação, comparáveis a constantes de domínio bem nomeadas no backend. O componente deve pedir uma superfície ou um texto, não conhecer o hexadecimal de cada tema.
- **Critérios de conclusão:** `:root` usa valores escuros; `[data-theme="light"]` substitui os tokens; Tailwind expõe utilitários semânticos; bootstrap usa a preferência salva com fallback seguro para `dark`; não ocorre flash de tema claro na primeira renderização.
- **Commit sugerido:** `feat(theme): add semantic color tokens and dark bootstrap`

## Issue 2 — Implementar estado e persistência do tema

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** criar provider, hook e utilitário de armazenamento em `shared/theme/`, conectando o estado React ao atributo `data-theme` e ao `localStorage`.
- **Aprendizado:** Context é adequado para uma preferência transversal pequena. É diferente de criar um estado global de domínio: não contém regras de produto, é limitado a um valor e possui fronteiras claras.
- **Critérios de conclusão:** ausência de preferência inicia em `dark`; troca entre `dark` e `light` atualiza o atributo do documento; preferência é salva e restaurada; falha de `localStorage` não quebra a aplicação; funções puras de armazenamento possuem testes unitários.
- **Commit sugerido:** `feat(theme): persist user theme preference`

## Issue 3 — Disponibilizar alternância acessível no cabeçalho

- **Status:** Concluída
- **Estimativa:** 45 min a 1h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 2
- **Objetivo:** criar `ThemeToggle` e integrá-lo ao `AppHeader`, mantendo o controle visível em todas as rotas.
- **Aprendizado:** um ícone transmite intenção rapidamente, mas não substitui semântica. O estado do botão e seu nome acessível precisam indicar qual mudança ocorrerá ao acioná-lo.
- **Critérios de conclusão:** controle é um `button`; pode ser usado por teclado; possui foco visível e nome acessível contextual; atualiza o tema sem recarregar; cabeçalho continua responsivo em celular.
- **Commit sugerido:** `feat(theme): add accessible header theme toggle`

## Issue 4 — Migrar Home, regras e busca para a paleta semântica

- **Status:** Concluída
- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** substituir cores concretas por tokens semânticos nas áreas Home, regras, detalhes, busca, cabeçalho e componentes compartilhados relacionados.
- **Aprendizado:** uma migração transversal deve ser fatiada por área de produto. Isso reduz o risco de uma alteração visual grande e torna a revisão comparável a uma refatoração gradual de módulos no Spring.
- **Critérios de conclusão:** superfícies, cartões, textos, bordas, links, busca, estados vazios e retorno ficam coerentes nos dois temas; destinos e interações existentes são preservados; não há uso novo de cores fixas fora dos tokens definidos.
- **Commit sugerido:** `refactor(theme): apply semantic colors to rules and search`

## Issue 5 — Migrar rodízio e quiz para a paleta semântica

- **Status:** Concluída
- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** aplicar tokens ao rodízio, à quadra HTML/CSS, aos cenários de posição, ao quiz e aos seus estados de resposta e resultado.
- **Aprendizado:** elementos didáticos usam cor para comunicar estado, não apenas decoração. Estados de sucesso, erro e destaque precisam preservar significado e contraste em ambos os temas.
- **Critérios de conclusão:** quadra, posições, cenários, alternativas, feedback, resultado e botões permanecem legíveis e distinguíveis; ações de rodízio e quiz preservam comportamento; não há corte ou contraste insuficiente em celular e desktop.
- **Commit sugerido:** `refactor(theme): apply semantic colors to rotation and quiz`

## Issue 6 — Cobrir comportamento e validar a experiência completa

- **Status:** Concluída
- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 2, 3, 4 e 5
- **Objetivo:** cobrir provider, persistência e toggle com testes; executar a suíte completa; validar contraste, foco, responsividade e persistência em todas as rotas; registrar evidências em `validation.md`.
- **Aprendizado:** testes automatizados protegem o contrato de tema e preferência; inspeção manual confirma se as cores realmente comunicam bem em condições de uso reais.
- **Critérios de conclusão:** testes cobrem padrão escuro, restauração, alternância, `data-theme` e acessibilidade básica do toggle; lint, testes e build passam; roteiro manual aprova os dois temas em todas as rotas; documentação é atualizada.
- **Commit sugerido:** `test(theme): cover theme preference and toggle`

## Ordem de execução

```text
Issue 1
   |
   +--> Issue 2 --> Issue 3
   |
   +--> Issue 4
   |
   +--> Issue 5
                 \
                  --> Issue 6
```

As migrações das Issues 4 e 5 podem ocorrer em paralelo após a fundação da Issue 1. A Issue 6 consolida a validação após a integração de todas as áreas.

## Definição de pronto para cada issue

- Critérios de conclusão atendidos.
- Alteração revisada antes do commit.
- Lint, testes e build executados quando houver alteração no frontend.
- Documentação atualizada quando tokens, estrutura ou decisão arquitetural mudar.
- Commit segue Conventional Commits.
