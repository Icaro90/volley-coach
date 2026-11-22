# Tasks — Exportação e backup

## Issue 1 — Inventariar dados e definir formato
- **Status:** Concluída · **Estimativa:** 2h
- **Dependências:** revisar esquemas 015 e 018
- Definir manifesto, versões, IDs, campos exportáveis, migrações e política para dados de atletas.

## Issue 2 — Implementar exportação
- **Status:** Concluída · **Estimativa:** 2h
- **Dependências:** Issue 1
- Gerar arquivo versionado, permitir escolha de escopo e oferecer download/compartilhamento.

## Issue 3 — Implementar prévia e importação segura
- **Status:** Concluída · **Estimativa:** 3h
- **Dependências:** Issues 1–2
- Validar arquivo integralmente; implementar mesclar/substituir, conflitos e relatório antes/depois.

## Issue 4 — Validar recuperação e privacidade
- **Status:** Concluída; teste Android manual pendente · **Estimativa:** 2h
- **Dependências:** Issue 3
- Testar versões, corrupção, duplicatas, limites, cancelamento e Android; atualizar docs de privacidade.

## Ordem
Issue 1 → Issue 2 → Issue 3 → Issue 4
