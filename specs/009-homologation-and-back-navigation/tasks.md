# Plano de tarefas — Homologação e navegação de retorno

Todas as tarefas pertencem à branch `chore/009-homologation-and-back-navigation` e passam pelo fluxo **Backlog → Todo → Doing → Review → Done** no GitHub Projects.

**Status da execução:** planejamento concluído; implementação ainda não iniciada.

## Issue 1 — Validar qualidade em todo commit e promover `hom`

- **Status:** Em validação externa
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** ajustar o workflow do GitHub Actions para executar testes, lint e build a cada `push` e criar, após um push em `hom`, uma Pull Request para `main` quando não houver outra aberta.
- **Aprendizado:** eventos e permissões de workflow funcionam como a configuração de segurança de uma aplicação Spring: cada job recebe somente a capacidade necessária. O job de qualidade não precisa criar Pull Requests; o job de promoção precisa apenas de `pull-requests: write`.
- **Critérios de conclusão:** `push` em qualquer branch aciona o job de qualidade; o job de promoção só é elegível em `hom`; uma PR existente não é duplicada; não há merge automático; permissões permanecem mínimas e não há secret da Vercel no workflow.
- **Commit sugerido:** `ci: validate every push and automate hom promotion pr`

## Issue 2 — Restringir deploys automáticos da Vercel

- **Status:** Em validação externa
- **Estimativa:** 30 min a 1h
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** configurar `frontend/vercel.json` para permitir deploy automático somente das branches `hom` e `main`, preservando o rewrite da SPA.
- **Aprendizado:** CI e CD têm responsabilidades diferentes. O GitHub Actions verifica se o código pode seguir; a configuração da Vercel define onde uma versão aprovada será publicada.
- **Critérios de conclusão:** `hom` e `main` permanecem habilitadas para deploy; qualquer outra branch fica desabilitada; o fallback de React Router continua presente; a configuração segue a ADR 007.
- **Commit sugerido:** `chore(vercel): restrict deployments to hom and main`

## Issue 3 — Criar botão compartilhado de retorno

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** criar um componente reutilizável em `shared/components` que represente a navegação de retorno com aparência consistente, link semântico e foco visível.
- **Aprendizado:** assim como um componente compartilhado no frontend, uma abstração no Spring só deve ser extraída quando há repetição estável e sem regra de negócio específica. O componente receberá destino e texto, mas não decidirá a navegação de cada feature.
- **Critérios de conclusão:** componente usa `Link` do React Router; mantém texto contextual e destino recebido por propriedades; possui foco visível; não adiciona dependências nem estado; visual combina com os cartões e controles existentes.
- **Commit sugerido:** `feat(shared): add back navigation link component`

## Issue 4 — Aplicar retorno consistente às páginas

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 3
- **Objetivo:** substituir os links de retorno repetidos nas páginas de regras, busca, rodízio e quiz pelo componente compartilhado, preservando cada destino contextual.
- **Aprendizado:** refatorar interface deve preservar comportamento observável. É o mesmo cuidado de trocar uma implementação interna de serviço sem mudar o contrato exposto pelo controller.
- **Critérios de conclusão:** regras, detalhe de regra, busca sem termo, busca sem resultados, rodízio e quiz usam o componente; os destinos e textos continuam corretos; não há recarregamento completo da página; não são alteradas rotas nem regras de produto.
- **Commit sugerido:** `refactor(frontend): standardize back navigation`

## Issue 5 — Testar e validar o fluxo de entrega e navegação

- **Status:** Em validação externa
- **Estimativa:** 1h a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issues 1, 2, 3 e 4
- **Objetivo:** criar testes unitários necessários para o componente compartilhado, executar a suíte completa e registrar a configuração externa e as evidências de validação manual.
- **Aprendizado:** arquivos de configuração e interface exigem camadas diferentes de confiança: testes protegem o comportamento reutilizável; a validação manual confirma eventos reais do GitHub/Vercel e o resultado visual.
- **Critérios de conclusão:** testes cobrem renderização, destino e acessibilidade básica do retorno; lint, testes e build passam; é confirmada uma execução de CI em branch de feature; é confirmada a ausência de deploy de feature e os deploys de `hom` e `main`; criação sem duplicidade da PR de promoção é verificada; evidências ficam em `validation.md`.
- **Commit sugerido:** `test: validate delivery flow and back navigation`

## Ordem de execução

```text
Issues 1, 2 e 3
      |
      +-----> Issue 4
      |
      +-----> Issue 5
```

As Issues 1 e 2 podem ser executadas em paralelo, pois modificam plataformas diferentes. A Issue 4 depende do componente criado na Issue 3. A Issue 5 consolida todas as validações.

## Definição de pronto para cada issue

- Critérios de conclusão atendidos.
- Alteração revisada antes do commit.
- Lint, testes e build executados quando houver alteração no frontend ou no workflow.
- Documentação atualizada quando a configuração depender de ação fora do repositório.
- Commit segue Conventional Commits.
