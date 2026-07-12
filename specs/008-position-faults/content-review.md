# Revisão de conteúdo — Faltas de posição e ordem de saque

**Data da revisão:** 2026-07-12
**Fonte principal:** [FIVB Official Volleyball Rules 2025–2028](https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf)

Este documento define o recorte educativo da Spec 008 antes de alterar a feature `rotation`.

## Decisão de linguagem

O aplicativo ensina relações de posição, não uma marcação exata no chão. A regra oficial determina a posição pelos pés que tocam a quadra no instante do saque; reproduzir esse cálculo exigiria coordenadas e casos de arbitragem que ficam fora do escopo.

O texto deve evitar dizer que atletas precisam permanecer imóveis em suas posições. A posição é conferida no momento do golpe de saque; depois disso, podem se movimentar na própria quadra e zona livre.

## Posição no momento do saque

- **Referências FIVB:** 7.4.1, 7.4.2, 7.4.3, 7.4.4 e 7.5.1.
- **Texto simplificado:** No instante em que a bola é golpeada no saque, a equipe que recebe precisa respeitar a ordem de posições. As três pessoas da frente ficam nas posições 4, 3 e 2; as três do fundo ficam nas posições 5, 6 e 1. Depois do saque, todas podem se movimentar.
- **Nuance obrigatória:** no instante do saque, a equipe que está sacando pode ocupar qualquer posição em sua própria quadra; a verificação de ordem de posição se aplica à equipe receptora.
- **Resumo:** Posição é conferida no saque, não durante todo o rally.
- **Consequência:** Se a equipe receptora estiver fora da posição correta no golpe de saque, comete falta de posição. O adversário recebe ponto e direito de sacar; a formação é corrigida.
- **Limite do MVP:** não explicar a prioridade entre falta de saque e falta de posição nem calcular posições por coordenadas dos pés.

## Relações ensinadas

As posições não são pontos fixos. Antes do saque, a regra compara relações entre pessoas:

- Quem está no fundo deve estar mais distante da linha central do que a pessoa correspondente da frente.
- Em cada linha, a pessoa da esquerda deve manter-se à esquerda da pessoa do centro, e a do centro à esquerda da pessoa da direita.
- Basta uma parte de um pé respeitar a relação exigida; esta precisão será resumida visualmente, sem tentativa de medi-la na interface.

## Cenários didáticos planejados

### Formação válida — fundo atrás da frente

- **Relação ensinada:** posição 5 fica atrás da posição 4 no instante do saque.
- **Texto:** A pessoa da posição 5 está mais distante da rede que a pessoa da posição 4. A relação frente/fundo está correta.
- **Resultado:** Formação válida para a equipe receptora.
- **Diagrama:** duas faixas, `frente` e `fundo`, com 4 acima de 5 e destaque verde na relação correta.

### Falta de posição — fundo à frente da frente

- **Relação ensinada:** posição 5 não pode ficar mais perto da rede que a posição 4 no instante do saque.
- **Texto:** A pessoa que deveria estar no fundo se adiantou além da pessoa correspondente da frente antes do saque.
- **Resultado:** Falta de posição; ponto e saque para o adversário, com correção da formação.
- **Diagrama:** posição 5 ilustrada à frente da posição 4, com destaque vermelho e explicação curta.

### Falta de posição — ordem lateral invertida

- **Relação ensinada:** na linha de frente, a posição 4 fica à esquerda da 3, que fica à esquerda da 2.
- **Texto:** Se a pessoa da posição 2 fica à esquerda da posição 3 no instante do saque, a ordem lateral está invertida.
- **Resultado:** Falta de posição.
- **Diagrama:** posições 2 e 3 invertidas, com a relação correta indicada abaixo.

## Ordem de saque e rodízio

- **Referências FIVB:** 6.1.3, 7.6.1, 7.6.2, 7.7.1 e 12.2.1–12.2.2.
- **Texto simplificado:** A ordem de saque acompanha a ordem de rodízio. Quando a equipe que recebe vence o rally, ela ganha o direito de sacar e gira uma posição no sentido horário antes do saque. Quem passa da posição 2 para a posição 1 é a pessoa que saca.
- **Resumo:** Recuperou o saque? Gira; quem chega à posição 1 saca.
- **Exemplo:** A equipe recebe o saque e vence o rally. A pessoa que estava na posição 2 vai para a posição 1 e faz o próximo saque.
- **Consequência:** Se uma pessoa saca fora da ordem de rodízio, é falta de rodízio; o adversário recebe ponto e direito de sacar, e a ordem é corrigida.
- **Limite do MVP:** não calcular pontos que possam precisar ser anulados quando a falta é descoberta tardiamente.

## Diferença essencial

| Situação | O erro acontece em | Pergunta de aprendizagem |
| --- | --- | --- |
| Falta de posição | Relação entre atletas da equipe receptora no instante do saque | “Estamos na ordem certa quando o saque começa?” |
| Falta de rodízio | Pessoa que executa o saque | “A pessoa certa está sacando agora?” |

## Pronto para implementação

- Os textos, três cenários visuais e consequências foram delimitados para o MVP.
- A feature deve registrar regras FIVB `7.4`, `7.5`, `7.6`, `7.7` e `12.2`, com `reviewedAt: '2026-07-12'`.
- `getServer(formation)` deve apenas derivar a pessoa na posição 1; não valida uma escalação real.
