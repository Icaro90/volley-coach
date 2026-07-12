# Plano de tarefas — Faltas de posição e ordem de saque

Todas as tarefas pertencem à branch `feat/008-position-faults` e passam pelo fluxo **Backlog → Todo → Doing → Review → Done** no GitHub Projects.

**Status da execução:** todas as cinco issues foram concluídas e a feature está pronta para revisão da Pull Request.

## Issue 1 — Revisar conteúdo de posição e ordem de saque

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** nenhuma
- **Objetivo:** transformar as regras FIVB 7.4, 7.5, 7.6, 7.7 e 12.2 em textos curtos, consequências e cenários didáticos de posição válida, falta de posição e ordem de saque.
- **Aprendizado:** regras de domínio precisam ser interpretadas antes de virar código. Um exemplo educativo deliberadamente limitado é mais honesto que um simulador que aparenta ter precisão de arbitragem sem tê-la.
- **Critérios de conclusão:** os cenários explicam frente/fundo, direita/esquerda, liberdade após o saque e diferença entre falta de posição e rodízio; cada texto possui referência FIVB e data de revisão.
- **Commit sugerido:** `docs(content): review position and service order rules`

## Issue 2 — Modelar cenários e derivar a pessoa que saca

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 1
- **Objetivo:** adicionar dados estáticos dos cenários de posição à feature `rotation` e criar `getServer(formation)` como função pura que retorna a pessoa na posição 1.
- **Aprendizado:** uma função pura de domínio pode ser pequena e ainda assim expressar uma regra importante. É semelhante a extrair uma regra de serviço no Spring para testá-la sem controller ou banco.
- **Critérios de conclusão:** tipos tornam campos dos cenários obrigatórios; dados possuem fonte FIVB; `getServer` não altera a formação; testes cobrem a pessoa que saca antes e depois de uma rotação.
- **Commit sugerido:** `feat(rotation): model position scenarios and server order`

## Issue 3 — Exibir exemplos de posição na página de rodízio

- **Status:** Concluída
- **Estimativa:** 1h30 a 2h
- **Coluna inicial:** Backlog
- **Dependências:** Issue 2
- **Objetivo:** ampliar `/rotation` com explicação do momento do saque, identificação de quem saca e exemplos HTML/CSS de posição correta e incorreta.
- **Aprendizado:** um componente visual deve comunicar a regra sem esconder informação em imagens. HTML semântico permite texto acessível e facilita testes de comportamento.
- **Critérios de conclusão:** exemplos distinguem posição e rodízio; informam movimentação livre após o saque; são responsivos, acessíveis por teclado e não alteram a interação de avanço/reinício existente.
- **Commit sugerido:** `feat(rotation): explain position faults and service order`

## Issue 4 — Cobrir integração e regressão da experiência de rodízio

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issues 2 e 3
- **Objetivo:** ampliar testes de dados, funções puras e página para os novos conteúdos, preservando a rotação existente e a identificação da pessoa na posição 1.
- **Aprendizado:** testes de unidade protegem a regra isolada; testes de página confirmam que a pessoa usuária recebe a explicação derivada corretamente.
- **Critérios de conclusão:** testes cobrem cenários didáticos, `getServer`, avanço de rotação, retorno ao estado inicial e conteúdo acessível; lint, testes e build passam.
- **Commit sugerido:** `test(rotation): cover position fault learning flow`

## Issue 5 — Validar o fluxo de posição e saque

- **Status:** Concluída
- **Estimativa:** 1h a 1h30
- **Coluna inicial:** Backlog
- **Dependências:** Issue 4
- **Objetivo:** validar visualmente os cenários de posição, a pessoa indicada para sacar, teclado, responsividade e entendimento do conteúdo; registrar evidências em `validation.md`.
- **Aprendizado:** o teste automatizado garante o contrato técnico; a validação manual confirma se a simplificação da regra é clara para quem está aprendendo.
- **Critérios de conclusão:** todos os critérios de aceite são aprovados ou possuem limitação explícita; smoke test manual passa em celular e desktop; evidências automatizadas e manuais ficam documentadas.
- **Commit sugerido:** `docs(spec): record position faults validation`

## Ordem de execução

```text
Issue 1
   |
Issue 2
   |
Issue 3
   |
Issue 4
   |
Issue 5
```

## Definição de pronto para cada issue

- Critérios de conclusão atendidos.
- Alteração revisada antes do commit.
- Lint, testes e build executados quando houver alteração no frontend.
- Documentação atualizada quando conteúdo, arquitetura ou escopo mudar.
- Commit segue Conventional Commits.
