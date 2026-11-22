# Fluxo de desenvolvimento

## Branches

`hom` é a branch de homologação e `main` é a branch de produção. Crie cada branch de trabalho a partir da versão mais recente de `hom` e integre mudanças por Pull Request com destino a `hom`.

Use estes prefixos e nomes em kebab-case:

| Tipo | Padrão | Exemplo |
| --- | --- | --- |
| Feature | `feature/<spec>-<resumo>` | `feature/031-match-scoreboard` |
| Correção | `fix/<resumo>` | `fix/scoreboard-undo` |
| Documentação | `docs/<resumo>` | `docs/branch-workflow` |
| Manutenção | `chore/<resumo>` | `chore/update-android-tools` |

Para uma feature sem número de spec, use `feature/<resumo>`, por exemplo `feature/team-dashboard`. Não use o prefixo abreviado `feat/` para novas branches de feature: a automação observa `feature/**`.

Crie uma branch de feature assim:

```bash
git switch hom
git pull origin hom
git switch -c feature/031-match-scoreboard
```

Faça commits normalmente e envie a branch ao GitHub:

```bash
git push -u origin feature/031-match-scoreboard
```

## Pull Requests e automação

Ao receber um `push` em qualquer branch `feature/**`, GitHub Actions cria uma Pull Request dessa branch para `hom`, se ainda não existir uma aberta para o mesmo par de branches. Os commits seguintes atualizam a mesma PR automaticamente. Correções, documentação e manutenção devem abrir PR para `hom` manualmente.

O workflow `Feature pull request` usa o `GITHUB_TOKEN` apenas com `pull-requests: write` para criar a PR. A configuração do repositório precisa permitir que GitHub Actions crie Pull Requests em **Settings → Actions → General → Workflow permissions**. A automação não faz merge. CI continua responsável por testes, lint e build; revise os resultados antes do merge em `hom`.

Após homologar as mudanças integradas em `hom`, a automação existente abre uma PR de `hom` para `main`. A promoção para produção permanece sujeita a revisão e merge manual.
