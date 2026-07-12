export type CourtPosition = 1 | 2 | 3 | 4 | 5 | 6

export type RotationFormation = Readonly<Record<CourtPosition, string>>

type RotationSource = {
  title: string
  edition: string
  url: string
  relevantRules: string[]
  reviewedAt: string
}

export const courtPositions: ReadonlyArray<{
  id: CourtPosition
  name: string
  area: 'front' | 'back'
}> = [
  { id: 4, name: 'Frente esquerda', area: 'front' },
  { id: 3, name: 'Frente centro', area: 'front' },
  { id: 2, name: 'Frente direita', area: 'front' },
  { id: 5, name: 'Fundo esquerda', area: 'back' },
  { id: 6, name: 'Fundo centro', area: 'back' },
  { id: 1, name: 'Fundo direita', area: 'back' },
]

export const initialFormation: RotationFormation = {
  1: 'Jogador A',
  2: 'Jogador B',
  3: 'Jogador C',
  4: 'Jogador D',
  5: 'Jogador E',
  6: 'Jogador F',
}

export const rotationSource: RotationSource = {
  title: 'Official Volleyball Rules',
  edition: 'FIVB 2025–2028',
  url: 'https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf',
  relevantRules: ['7.6.1', '7.6.2'],
  reviewedAt: '2026-07-11',
}
