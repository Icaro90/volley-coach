# Validação — Regras básicas

## Escopo validado

Validação final da feature `002-rules`, realizada antes da revisão da Pull Request.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Lista das seis regras em `/rules` | `RulesPage` renderiza o array `rules`, que contém os seis itens definidos na spec | Aprovado |
| Título e descrição acessíveis | Cada `RuleListItem` apresenta `title` e `summary` | Aprovado |
| Detalhe com explicação, exemplo e visual | `RuleDetailPage` mostra explicação, exemplo, resultado e SVG da regra | Aprovado |
| Navegação entre lista e detalhe | Links usam `/rules/:ruleId` e cada detalhe possui retorno para `/rules` | Aprovado |
| Consequência da jogada clara | Cada item possui o campo `outcome` | Aprovado |
| Fonte oficial revisada | Cada item registra edição, URL, regras relevantes e data de revisão da FIVB | Aprovado |
| Celular e desktop | Layout usa largura fluida, `min-width` de 320px e espaçamentos responsivos `sm` | Aprovado por inspeção de código |
| Navegação por teclado | Links semânticos e regra global `:focus-visible` | Aprovado por inspeção de código |
| URL inválida | `/rules/:ruleId` apresenta estado de conteúdo não encontrado quando não há item correspondente | Aprovado |

## Verificações automatizadas

```text
npm run lint
npm run build
```

Ambos os comandos concluíram com sucesso.

## Verificação manual recomendada

No navegador, executar `npm run dev` e conferir `/rules`, uma regra válida como `/rules/service`, uma URL inválida como `/rules/nao-existe`, a navegação com `Tab` e os tamanhos de celular e desktop no DevTools.

## Limitações conhecidas

- O conteúdo estático não é atualizado automaticamente caso a FIVB publique uma nova edição das regras.
- Pesquisa, regras avançadas, rodízio, quiz e edição administrativa de conteúdo permanecem fora do escopo desta feature.
