# Validação — Rodízio

## Escopo validado

Validação da feature `004-rotation`, realizada antes da revisão da Pull Request.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Página de rodízio | `App.tsx` associa `/rotation` a `RotationPage` | Aprovado por inspeção de código |
| Quadra e seis posições | `RotationCourt` renderiza as posições 4, 3, 2, 5, 6 e 1 com texto real | Aprovado por inspeção de código |
| Perspectiva da quadra | A interface identifica o lado da equipe, a rede e a separação entre frente e fundo | Aprovado por inspeção de código |
| Momento do rodízio | O texto explica que a equipe gira ao recuperar o direito de sacar | Aprovado por inspeção de código e fonte FIVB |
| Sentido horário | `rotateFormation` move 2 para 1, 1 para 6 e as demais posições na sequência oficial | Aprovado por testes unitários definidos e fonte FIVB |
| Avançar rodízio | O botão atualiza `rotationStep`, deriva a formação e anuncia o novo estado | Aprovado por inspeção de código |
| Reiniciar | O botão restaura `rotationStep` para zero e fica desabilitado na formação inicial | Aprovado por inspeção de código |
| Acessibilidade por teclado | Links e botões são elementos semânticos; foco global visível está definido | Pendente de verificação manual |
| Responsividade | Grid de três colunas e espaçamentos mobile-first estão definidos | Pendente de verificação manual |
| Sem rede ou backend | Formação, função de rotação e fonte são dados locais; não há chamadas HTTP | Aprovado por inspeção de código |
| Revisão da regra | Metadados apontam para FIVB 2025–2028, regras 7.6.1 e 7.6.2 | Aprovado |

## Verificações automatizadas

| Comando | Resultado nesta validação | Observação |
| --- | --- | --- |
| `npm run lint` | Aprovado | Executado com sucesso durante a Issue 3. |
| `npx tsc -b` | Aprovado | Executado com sucesso durante a Issue 3. |
| `npm run test` | Pendente de execução local | A sandbox bloqueia o processo nativo usado pelo Vite/Tailwind (`spawn EPERM`) antes de os testes iniciarem. |
| `npm run build` | Pendente de execução local | A mesma limitação da sandbox impede o carregamento do binário nativo do Tailwind. |

## Verificação manual necessária

Com `npm run dev`, confirmar:

1. Na Home, selecionar `Entender rodízio` e verificar a navegação para `/rotation`.
2. Confirmar que a quadra mostra seis posições, a rede e a indicação de frente/fundo sem rolagem horizontal em 320 px.
3. Acionar `Avançar rodízio` uma vez e conferir: Jogador B vai da posição 2 para a 1; Jogador A vai da 1 para a 6.
4. Acionar o botão mais cinco vezes e confirmar o retorno à formação inicial.
5. Após ao menos um avanço, usar `Reiniciar` e confirmar a restauração da formação inicial.
6. Navegar somente com `Tab`, conferir foco visível e confirmar que `Reiniciar` não pode ser acionado na formação inicial.
7. Conferir o layout em celular e desktop no DevTools, sem corte de texto ou rolagem horizontal.
8. Executar `npm run test` e `npm run build` no ambiente local.

## Limitações conhecidas

- O diagrama ensina a ordem de rodízio, não sistemas táticos ou movimentações após o saque.
- Não há validação de falta de posição, escalação real, placar ou persistência da formação.
- Ao atualizar a página, a formação volta ao início por decisão intencional da ADR 004.
