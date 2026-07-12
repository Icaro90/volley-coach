# Validação — Quiz rápido

## Escopo validado

Validação da feature `005-quiz`, realizada antes da revisão da Pull Request.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Página de quiz | `App.tsx` associa `/quiz` a `QuizPage` | Aprovado por inspeção de código |
| Cinco perguntas | `quizQuestions` possui cinco itens, protegidos por teste de integridade | Aprovado por testes unitários |
| Pergunta e alternativas | `QuizQuestion` mostra uma pergunta por vez em `fieldset` com quatro radios | Aprovado por inspeção de código e teste de componente |
| Resposta obrigatória | Botão de confirmação fica desabilitado sem seleção; reducer também bloqueia confirmação vazia | Aprovado por teste de componente e reducer |
| Feedback imediato | `QuizFeedback` informa acerto/erro, resposta correta e explicação em região `aria-live` | Aprovado por teste de componente |
| Pontuação e resultado | Reducer incrementa somente respostas corretas; `QuizPage` mostra resultado de `0` a `5` e porcentagem de aproveitamento | Aprovado por testes de reducer e página |
| Reinício | Ação `restart` restaura o estado inicial sem recarregar a página | Aprovado por testes de reducer e página |
| Caminho para regras | Resultado oferece link para `/rules` | Aprovado por teste de página |
| Teclado e responsividade | Radios, botões e foco global semântico existem | Aprovado em verificação manual em celular e desktop |
| Sem rede ou persistência | Perguntas e estado estão locais; não há chamadas HTTP, backend ou armazenamento | Aprovado por inspeção de código |
| Fonte oficial | Cada pergunta registra edição, regras relevantes e data de revisão FIVB | Aprovado por teste de integridade e revisão de conteúdo |

## Verificações automatizadas

| Comando | Resultado nesta validação | Observação |
| --- | --- | --- |
| `npm run lint` | Aprovado | Executado com sucesso durante as Issues de implementação. |
| `npx tsc -b` | Aprovado | Executado com sucesso durante as Issues de implementação. |
| `npm run test` | Aprovado | Executado com sucesso no ambiente local do desenvolvedor. |
| `npm run build` | Aprovado | Executado com sucesso no ambiente local do desenvolvedor. |

## Verificação manual realizada

Com `npm run dev`, foram confirmados:

1. Na Home, selecionar `Quiz rápido` e verificar a navegação para `/quiz`.
2. Iniciar o quiz e conferir a indicação `Pergunta 1 de 5` com quatro alternativas claras.
3. Tentar confirmar sem escolher uma alternativa e verificar que o botão permanece indisponível.
4. Responder uma questão corretamente e outra incorretamente; confirmar feedback, resposta correta e explicação em ambos os casos.
5. Concluir as cinco perguntas e confirmar um resultado entre `0` e `5`, porcentagem de aproveitamento e mensagem de incentivo.
6. Selecionar `Reiniciar quiz` e verificar o retorno à tela inicial, sem recarregar a página.
7. Selecionar `Consultar regras básicas` e verificar a navegação para `/rules`.
8. Navegar somente com `Tab`, confirmar foco visível e uso dos radios por teclado em celular e desktop no DevTools.
9. Executar `npm run test` e `npm run build` no ambiente local.

Todos os cenários foram aprovados, sem problemas de navegação, teclado, foco visível, feedback ou responsividade.

## Limitações conhecidas

- O quiz possui ordem fixa e apenas cinco perguntas de regras básicas.
- Não há persistência de pontuação, histórico, ranking, temporizador ou dificuldade adaptativa.
- Perguntas sobre rodízio e conteúdo além da Spec 002 ficam fora do MVP.
