import { describe, expect, test } from 'vitest'
import { initialFormation } from '../data/rotation'
import { rotateFormation } from '../utils/rotateFormation'

describe('rotateFormation', () => {
  test('moves each player one position clockwise after gaining the right to serve', () => {
    expect(rotateFormation(initialFormation)).toEqual({
      1: 'Jogador B',
      2: 'Jogador C',
      3: 'Jogador D',
      4: 'Jogador E',
      5: 'Jogador F',
      6: 'Jogador A',
    })
  })

  test('returns to the initial formation after six rotations', () => {
    const formationAfterSixRotations = Array.from(
      { length: 6 },
      () => undefined,
    ).reduce((formation) => rotateFormation(formation), initialFormation)

    expect(formationAfterSixRotations).toEqual(initialFormation)
  })

  test('does not mutate the current formation', () => {
    const currentFormation = { ...initialFormation }

    rotateFormation(currentFormation)

    expect(currentFormation).toEqual(initialFormation)
  })

  test('keeps the same six players in the formation', () => {
    const nextFormation = rotateFormation(initialFormation)

    expect(Object.values(nextFormation).sort()).toEqual(Object.values(initialFormation).sort())
  })
})
