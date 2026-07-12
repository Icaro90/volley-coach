# Validação — Regras adicionais

## Escopo validado

Validação da feature `007-additional-rules`, realizada antes da revisão da Pull Request.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Catálogo com dez regras únicas | `rules.test.ts` verifica quantidade e unicidade dos identificadores | Aprovado por teste automatizado |
| Invasão da linha central | Item possui texto, exemplo, consequência, diagrama, termos e regras FIVB 11.2.1, 11.2.2, 11.4.2 e 11.4.3 | Aprovado por revisão de conteúdo e teste de detalhe |
| Bloqueio | Item explica que o contato não entra nos três toques e referencia as regras FIVB aplicáveis | Aprovado por revisão de conteúdo e teste de detalhe |
| Substituição | Item explica o retorno entre titular e reserva na posição original, sem fixar total por set | Aprovado por revisão de conteúdo e teste de detalhe |
| Ataque da linha de trás | Item diferencia impulso atrás da linha de ataque e aterrissagem posterior | Aprovado por revisão de conteúdo e teste de detalhe |
| URLs diretas | Testes renderizam as quatro novas rotas em `/rules/:ruleId`, com título, diagrama acessível e link de retorno | Aprovado por teste automatizado |
| Busca pelos quatro temas | Testes de busca e de página localizam os termos controlados e seus links de detalhe | Aprovado por teste automatizado |
| Acessibilidade básica | Diagramas possuem texto alternativo; links de lista e retorno são elementos semânticos | Aprovado por teste automatizado e inspeção de código |
| Responsividade e clareza visual | Diagramas e conteúdo foram conferidos em celular e desktop, sem corte ou rolagem horizontal | Aprovado em verificação manual |
| Sem backend ou rede | Catálogo e SVGs são arquivos locais; nenhuma rota, chamada HTTP ou estado global foi adicionada | Aprovado por inspeção de código |
| Fonte oficial | Metadados usam FIVB 2025–2028, regras relevantes e revisão em 2026-07-12 | Aprovado por revisão de conteúdo |

## Verificações automatizadas

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Lint | Aprovado | `npm run lint` executado com sucesso na Issue 4. |
| Tipos | Aprovado | `npx tsc -b` executado com sucesso na Issue 4. |
| Testes | Aprovado | 14 arquivos e 56 testes aprovados na Issue 4. |
| Build de produção | Aprovado | `npm run build` executado com sucesso na Issue 4. |

## Roteiro de verificação manual

Com o servidor de desenvolvimento do frontend em execução, confirmar:

1. Abrir `/rules` e conferir dez cartões, sem rolagem horizontal em viewport de 320 px e desktop.
2. Abrir cada detalhe: `/rules/center-line-invasion`, `/rules/block`, `/rules/substitution` e `/rules/back-row-attack`.
3. Confirmar que cada diagrama é legível, não fica cortado e corresponde ao texto: linha central, bloqueio e três toques, banco e posição original, linha de ataque e impulso.
4. Voltar por teclado com `Tab` até o link de retorno em cada detalhe e confirmar a navegação para `/rules`.
5. Pesquisar `pé do outro lado`, `bloquear saque`, `troca de jogador` e `atacar do fundo`; confirmar que a regra esperada aparece e abre o detalhe correto.
6. Conferir no celular e desktop que títulos, exemplos, consequências e fonte não sobrepõem nem cortam conteúdo.

Todos os cenários foram aprovados em verificação manual, sem problemas de navegação, foco visível, corte de conteúdo ou rolagem horizontal.

## Limitações conhecidas

- O conteúdo ensina o cenário inicial; não substitui decisões de arbitragem ou regulamentos específicos de competição.
- A regra de substituição não exibe um total fixo por set, pois a FIVB anunciou testes de alteração desse total em competições de 2026; o regulamento da competição deve prevalecer.
- Não cobre regras de líbero, substituição excepcional, procedimentos de mesa, sistemas táticos ou variações de vôlei de praia.
