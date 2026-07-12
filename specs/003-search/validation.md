# Validação — Busca de regras

## Escopo validado

Validação da feature `003-search`, realizada antes da revisão da Pull Request.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Envio por teclado | `SearchForm` usa um elemento `form` com botão `submit` | Aprovado por inspeção de código |
| Termo na URL | O formulário navega para `/search?q=...` e `SearchResultsPage` lê `q` com `useSearchParams` | Aprovado por inspeção de código |
| Campos pesquisáveis | `searchRules` compara título, resumo, explicação e termos alternativos controlados | Aprovado por testes unitários |
| Caixa, acentos e pontuação | Normalização Unicode e testes para `pontuacao`, `SAQUE` e perguntas pontuadas | Aprovado por testes unitários |
| Dúvidas frequentes | Testes para `pode segurar a bola?` e `bola na linha vale?` | Aprovado por testes unitários |
| Termo e quantidade | Página mostra `q` e `results.length` | Aprovado por inspeção de código |
| Resultado com detalhe | `RuleListItem` exibe título, resumo e link para `/rules/:ruleId` | Aprovado por inspeção de código |
| Sem resultado | Mensagem clara e link para `/rules` | Aprovado por inspeção de código |
| Busca vazia | Formulário não navega com espaço em branco; `/search` sem `q` orienta e oferece links para Home e regras | Aprovado por inspeção de código |
| Responsividade e teclado | Layout responsivo e foco global existem; requer confirmação no navegador | Pendente de verificação manual |
| Sem rede ou backend | Busca usa somente dados estáticos e função local | Aprovado por inspeção de código |

## Verificações automatizadas

```text
npm run test
npm run lint
npm run build
```

| Comando | Resultado nesta validação | Observação |
| --- | --- | --- |
| `npm run lint` | Aprovado | Executado com sucesso. |
| `npm run test` | Pendente de execução local | A sandbox bloqueou o processo nativo usado pelo Vite/Tailwind (`spawn EPERM`) antes de os testes iniciarem. |
| `npm run build` | Pendente de execução local | A mesma limitação da sandbox impediu o carregamento do binário nativo do Tailwind. |

Os dois comandos pendentes devem ser executados no terminal local do desenvolvedor antes de aprovar a Pull Request. O erro observado é de infraestrutura do ambiente controlado, não uma falha de asserção ou de compilação da feature.

## Verificação manual necessária

Com `npm run dev`, confirmar:

1. Na Home, enviar `pontuacao` por Enter e verificar `/search?q=pontuacao`.
2. Abrir um resultado e confirmar a navegação para o detalhe da regra.
3. Enviar o formulário vazio e verificar a mensagem de orientação.
4. Pesquisar `pode segurar a bola?` e `bola na linha vale?` e confirmar os resultados esperados.
5. Abrir `/search?q=arremesso` e `/search` diretamente.
6. Navegar com `Tab` e conferir foco visível em celular e desktop no DevTools.

## Limitações conhecidas

- A busca considera somente regras básicas estáticas.
- Não há sinônimos livres, correção ortográfica, autocomplete ou busca no servidor.
- Quando o catálogo crescer, a estratégia local deverá ser reavaliada.
