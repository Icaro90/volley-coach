# Tasks — Acesso para comissão técnica

## Issue 1 — Definir serviço e modelo de acesso
- **Status:** Pendente · **Estimativa:** 1 dia
- **Dependências:** decisão de produto/infraestrutura e spec 022
- Comparar autenticação, hospedagem e custos; definir papéis, convites, revogação e limites.

## Issue 2 — Especificar sincronização e conflitos
- **Status:** Pendente · **Estimativa:** 1 dia
- **Dependências:** Issue 1; coordenar schemas 021–026 e 028
- Definir IDs, autoria, exclusão, reconciliação offline, migrações e resolução de conflitos.

## Issue 3 — Implementar equipe e permissões
- **Status:** Pendente · **Estimativa:** 3–5 dias
- **Dependências:** Issues 1–2 e revisão de segurança/privacidade
- Implementar convites, papéis, autenticação segura e revogação.

## Issue 4 — Sincronizar e auditar dados
- **Status:** Pendente · **Estimativa:** 3–5 dias
- **Dependências:** Issue 3
- Sincronizar dados autorizados com estado visível, autoria, auditoria e suporte a uso offline.

## Issue 5 — Validar segurança, recuperação e operação
- **Status:** Pendente · **Estimativa:** 2–3 dias
- **Dependências:** Issue 4
- Testar permissões, contas revogadas, concorrência, perda de conexão, exclusão e recuperação; documentar operação.

## Ordem
Issue 1 → Issue 2 → Issue 3 → Issue 4 → Issue 5
