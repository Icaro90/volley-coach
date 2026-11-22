# Spec 022 — Ficha dos atletas

## Objetivo

Manter um cadastro local e prático dos atletas para apoiar planejamento, presença e acompanhamento técnico.

## Usuários

Treinadores e comissão técnica de uma equipe.

## Escopo

- Cadastrar, editar, arquivar e reativar atletas.
- Registrar nome de exibição, número opcional, posição ou posições, categoria, nível/experiência e observações técnicas.
- Listar, pesquisar e filtrar atletas ativos por posição e categoria.
- Mostrar ficha individual e estado ativo/arquivado.
- Persistir localmente; permitir operação offline.

## Fora de escopo

Prontuários médicos, documentos de identificação, comunicação direta com atletas, contas e sincronização em nuvem.

## Critérios de aceite

1. Nome de exibição é obrigatório; demais campos são opcionais e validados.
2. Arquivar preserva o histórico relacionado, mas remove o atleta das listas operacionais padrão.
3. Número duplicado é permitido com aviso ou confirmação, pois equipes podem ter contextos distintos.
4. Alterações são refletidas em recursos dependentes sem quebrar registros históricos.
5. Interface e formulários funcionam com teclado, leitor de tela e tela pequena.

## Dependências

Base para specs 021, 023, 024, 025, 026 e 029; não deve depender dessas features.

## Dados e privacidade

Armazenar apenas informações esportivas necessárias no dispositivo. Informar como exportar e apagar dados quando a spec 028 for implementada.
