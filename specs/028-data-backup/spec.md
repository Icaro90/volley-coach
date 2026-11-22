# Spec 028 — Exportação e backup

## Objetivo

Permitir que o usuário leve seus dados locais para outro dispositivo e recupere cópias de segurança com controle e transparência.

## Usuários

Treinadores que mantêm dados de equipe no aparelho e querem protegê-los contra perda.

## Escopo

- Exportar os dados suportados em arquivo JSON versionado, com data de geração e versão do formato.
- Permitir exportação seletiva quando houver dados pessoais, com prévia do conteúdo e aviso de privacidade.
- Importar arquivo validado em modo substituir ou mesclar, com prévia, relatório e confirmação antes de alterar dados.
- Fazer validação de esquema, tamanho e integridade; rejeitar arquivo inválido sem mudanças parciais.
- Usar seletor/compartilhamento nativo quando disponível e fornecer alternativa no navegador.

## Fora de escopo

Backup automático em nuvem, criptografia com senha na primeira versão e sincronização multiusuário.

## Critérios de aceite

1. Exportação identifica versão e recursos incluídos.
2. Importação inválida ou incompatível não sobrescreve dados existentes.
3. Mesclagem usa IDs estáveis e explica conflitos antes de aplicar.
4. Substituição exige confirmação explícita e oferece resumo recuperável do resultado.
5. Testes cobrem arquivo truncado, desconhecido, grande e versões suportadas.

## Dependências

Pode começar com dados de 015 e 018; expandir para 021–026 conforme seus esquemas estabilizam. Para 029, definir política de exportação e privacidade conjunta.

## Segurança e privacidade

Arquivo pode conter dados da equipe; explicar isso antes de compartilhar. Não enviar dados para servidor sem consentimento específico.
