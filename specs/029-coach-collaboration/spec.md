# Spec 029 — Acesso para comissão técnica

## Objetivo

Permitir que mais de um treinador autorizado consulte e atualize os mesmos dados da equipe com atribuição e resolução de conflitos.

## Usuários

Treinador responsável e integrantes convidados da comissão técnica.

## Escopo

- Criar equipe compartilhada com convite, papéis (administrador e treinador) e revogação de acesso.
- Sincronizar atletas, presença, avaliações, desafios, formações, planos de jogo e scout após consentimento.
- Registrar autoria e horário nas alterações relevantes.
- Indicar estado de sincronização, conflitos e dados ainda apenas locais.
- Permitir exportar dados e remover a equipe/conta com fluxo claro.

## Fora de escopo

Mensagens privadas, cobrança, gestão de múltiplas organizações e acesso público.

## Critérios de aceite

1. Compartilhamento exige ação afirmativa do administrador e convite autorizado.
2. Papéis limitam operações e podem ser revogados.
3. Conflitos offline são apresentados ou mesclados segundo regras documentadas, sem perda silenciosa.
4. Dados sensíveis da equipe não aparecem para usuários sem acesso.
5. Exclusão e exportação são explicadas antes de confirmar.

## Dependências

Spec 022 (identidade dos atletas) e definição de backend, autenticação, hospedagem, custos e política de privacidade. Integração com 028 recomendada.

## Segurança e privacidade

Exige revisão específica de segurança e privacidade antes de implementação. Dados deixam de ser exclusivamente locais; coletar o mínimo necessário e documentar retenção, exclusão e resposta a incidentes.
