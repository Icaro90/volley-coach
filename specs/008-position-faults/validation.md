# Validação — Faltas de posição e ordem de saque

## Status

**Concluída — verificações automatizadas e roteiro manual aprovados.**

**Publicação:** a rota `/rotation` respondeu HTTP `200` em produção após o merge da PR #13 na `main`.

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Posição conferida no saque | `RotationPage` explica que a equipe receptora respeita relações de posição no instante do saque | Aprovado por teste de página e revisão de conteúdo |
| Diferença entre faltas | A página possui seção que diferencia falta de posição e falta de rodízio | Aprovado por teste de página |
| Cenários visuais | `positionScenarios` possui um cenário válido e dois de falta, renderizados por `PositionScenarioCard` | Aprovado por testes de dados e página |
| Movimento após o saque | Página explica que atletas podem se movimentar após o golpe de saque | Aprovado por teste de página |
| Ordem de saque | `getServer` identifica a pessoa na posição 1; após rodízio, a pessoa da posição 2 passa a sacar | Aprovado por testes unitários |
| Consequências simplificadas | Cenários de falta informam ponto e direito de saque ao adversário | Aprovado por testes de dados e revisão de conteúdo |
| Acessibilidade básica | Títulos, textos, botões e regiões identificadas usam HTML semântico; conteúdo novo é coberto por testes de página | Aprovado por testes e inspeção de código |
| Responsividade e clareza visual | Cartões de cenário conferidos em celular e desktop, sem corte ou rolagem horizontal | Aprovado em verificação manual |
| Sem backend ou estado global | Dados, função e estado permanecem locais à feature `rotation` | Aprovado por inspeção de código |
| Fonte FIVB | Dados registram regras 7.4, 7.5, 7.6, 7.7 e 12.2, com revisão em 2026-07-12 | Aprovado por teste de dados |

## Verificações automatizadas

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Lint | Aprovado | `npm run lint` executado com sucesso na Issue 4. |
| Testes | Aprovado | 16 arquivos e 61 testes aprovados na Issue 4. |
| Build de produção | Aprovado | `npm run build` executado com sucesso na Issue 4. |

## Roteiro de verificação manual

Com o frontend em execução, confirmar em `/rotation`:

1. A formação inicial identifica Jogador A na posição 1 como a próxima pessoa a sacar.
2. Após selecionar `Avançar rodízio`, Jogador B aparece na posição 1 e passa a ser indicado como sacador.
3. `Reiniciar` restaura Jogador A, a formação inicial e o botão desabilitado.
4. Ler o aviso sobre posição no saque e confirmar que ele não sugere que atletas precisam ficar parados durante o rally.
5. Conferir os três cartões: relação frente/fundo válida, fundo adiantado e ordem lateral invertida.
6. Confirmar que a seção final diferencia falta de posição de falta de rodízio.
7. Navegar somente com `Tab`, confirmar foco visível e testar em celular e desktop sem corte ou rolagem horizontal.

Todos os cenários foram aprovados em verificação manual, sem problemas de navegação, foco visível, clareza dos exemplos, corte de conteúdo ou rolagem horizontal.

## Limitações conhecidas

- Os cenários ensinam relações de posição; não calculam a posição exata dos pés nem validam escalações reais.
- O aplicativo não simula faltas de saque concorrentes, correção de pontos descoberta tardiamente ou a atuação da mesa.
- Após o saque, movimentações táticas continuam fora do escopo; o conteúdo apenas explica que elas são permitidas.
