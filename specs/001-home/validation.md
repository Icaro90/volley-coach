# Validação — Home

## Escopo validado

Validação final da feature `001-home`, realizada antes da revisão da Pull Request.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Nome e propósito do aplicativo | Cabeçalho `Regras de Vôlei`, título e descrição na Home | Aprovado |
| Campo de pesquisa visível | Campo de busca exibido após a introdução, sem depender de rolagem em uma tela de celular comum | Aprovado |
| Atalhos para as três áreas | Três cartões com destino para `/rules`, `/rotation` e `/quiz` | Aprovado |
| Linguagem simples | Títulos e descrições voltados a iniciantes | Aprovado |
| Seleção em telas pequenas | Cartões ocupam uma coluna no mobile, com área interna ampla | Aprovado |
| Responsividade | Grade usa uma coluna por padrão e três colunas a partir do breakpoint `sm` | Aprovado |
| Navegação por teclado | Campo de busca e links recebem foco; `:focus-visible` global fornece indicador visual | Aprovado |
| Sem autenticação | Não há rotas, estado ou integrações de autenticação | Aprovado |

## Verificações automatizadas

```text
npm run lint
npm run build
```

Ambos os comandos concluíram com sucesso.

## Limitações conhecidas

- O campo de busca é somente visual nesta feature. A pesquisa de regras será especificada e implementada em uma funcionalidade própria.
- As páginas de regras, rodízio e quiz são destinos temporários até suas respectivas specs.
