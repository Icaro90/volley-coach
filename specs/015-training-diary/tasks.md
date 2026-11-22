# Tasks — Diário de treino

Estimativas originais indicam issues pequenas, entre 30 minutos e 2 horas. Os status abaixo refletem a implementação atual; valide os itens pendentes na respectiva checklist.

## Issue 1 — Definir o modelo e o adaptador local

- **Status:** Implementada no frontend · **Estimativa:** 1h30
- **Dependências:** Spec 013
- **Objetivo:** modelar registro, validação de data/duração e leitura/escrita versionada de sessões.
- **Critérios de conclusão:** CRUD isolado da UI, IDs estáveis, validação pura e tolerância a dados locais inválidos.

## Issue 2 — Criar formulário de sessão

- **Status:** Implementada no frontend · **Estimativa:** 2h
- **Dependências:** Issue 1
- **Objetivo:** criar tela para data, duração, fundamentos, exercícios, esforço e nota.
- **Critérios de conclusão:** campos obrigatórios e opcionais seguem a spec; erros são anunciados e preservam entradas.

## Issue 3 — Criar histórico, detalhe e edição

- **Status:** Parcial; histórico e edição existem, mas não há tela de detalhe dedicada · **Estimativa:** 2h
- **Dependências:** Issues 1 e 2
- **Objetivo:** listar sessões por data e permitir abrir e editar um registro.
- **Critérios de conclusão:** lista vazia orienta primeira ação; detalhe mostra todos os valores salvos; editar mantém o ID.

## Issue 4 — Implementar exclusão e privacidade local

- **Status:** Implementada no frontend · **Estimativa:** 1h
- **Dependências:** Issue 3
- **Objetivo:** oferecer exclusão confirmada e explicar onde os dados ficam.
- **Critérios de conclusão:** cancelar preserva dados; confirmar remove; aviso local aparece sem bloquear uso.

## Issue 5 — Validar ciclo completo e persistência

- **Status:** Parcial; testes CRUD de interface e persistência após reinício pendentes · **Estimativa:** 1h30
- **Dependências:** Issues 1–4
- **Objetivo:** cobrir CRUD, falhas e experiência móvel.
- **Critérios de conclusão:** testes, lint e build passam; criação/edição/exclusão persistem após reinício do APK.

## Ordem sugerida

```text
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
```
