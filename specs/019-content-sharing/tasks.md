# Tasks — Compartilhar conteúdo

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Definir o contrato de compartilhamento

- **Status:** Parcial; o link usa a origem atual e ainda não aponta sempre ao domínio publicado · **Estimativa:** 1h
- **Dependências:** Specs 002, 013 e 017
- **Objetivo:** criar formato consistente para título, resumo e URL canônica.
- **Critérios de conclusão:** cada tipo de conteúdo constrói mensagem sem incluir dados pessoais; URL de produção e rotas são validadas.

## Issue 2 — Implementar serviço multiplataforma

- **Status:** Parcial; erro da API exibe mensagem, mas não aciona cópia como fallback · **Estimativa:** 1h30
- **Dependências:** Issue 1
- **Objetivo:** usar `@capacitor/share` no Android, Web Share API na web e cópia de link como fallback.
- **Critérios de conclusão:** plugin instalado e sincronizado; erros/cancelamento são tratados sem perder tela ou estado.

## Issue 3 — Integrar ação às páginas de detalhe

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Issues 1 e 2
- **Objetivo:** adicionar botão de compartilhar às regras, exercícios e termos.
- **Critérios de conclusão:** cada página monta os metadados corretos, ação tem nome acessível e confirmação do fallback é anunciada.

## Issue 4 — Validar sites, Android e fallbacks

- **Status:** Pendente; falta fallback em erro e teste manual web/Android/cancelamento · **Estimativa:** 1h30
- **Dependências:** Issue 3
- **Objetivo:** testar compartilhamento nativo, web, cópia e cancelamento.
- **Critérios de conclusão:** links abrem em rota válida; cancelamento não altera estado; teste manual no Android e navegador documentado.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4
```
