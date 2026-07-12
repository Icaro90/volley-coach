import type { CourtPosition } from './rotation'

type PositionScenarioSource = {
  title: string
  edition: string
  url: string
  relevantRules: string[]
  reviewedAt: string
}

export type PositionScenario = {
  id: 'front-back-valid' | 'front-back-fault' | 'lateral-fault'
  title: string
  status: 'valid' | 'fault'
  relation: 'front-back' | 'lateral'
  highlightedPositions: readonly CourtPosition[]
  explanation: string
  outcome: string
}

export const positionScenarioSource: PositionScenarioSource = {
  title: 'Official Volleyball Rules',
  edition: 'FIVB 2025–2028',
  url: 'https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf',
  relevantRules: ['7.4', '7.5', '7.6', '7.7', '12.2'],
  reviewedAt: '2026-07-12',
}

export const positionScenarios: readonly PositionScenario[] = [
  {
    id: 'front-back-valid',
    title: 'Frente e fundo na ordem correta',
    status: 'valid',
    relation: 'front-back',
    highlightedPositions: [4, 5],
    explanation:
      'No instante do saque, a pessoa da posição 5 está mais distante da rede que a pessoa da posição 4. A relação entre frente e fundo está correta.',
    outcome: 'A formação da equipe receptora está válida.',
  },
  {
    id: 'front-back-fault',
    title: 'Fundo adiantado além da frente',
    status: 'fault',
    relation: 'front-back',
    highlightedPositions: [4, 5],
    explanation:
      'No instante do saque, a pessoa da posição 5 se adiantou além da pessoa da posição 4. A relação entre frente e fundo está incorreta.',
    outcome: 'É falta de posição: ponto e direito de sacar para o adversário.',
  },
  {
    id: 'lateral-fault',
    title: 'Ordem lateral invertida',
    status: 'fault',
    relation: 'lateral',
    highlightedPositions: [2, 3],
    explanation:
      'No instante do saque, a pessoa da posição 2 ficou à esquerda da posição 3. Na linha de frente, a ordem lateral foi invertida.',
    outcome: 'É falta de posição: ponto e direito de sacar para o adversário.',
  },
]
