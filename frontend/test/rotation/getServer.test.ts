import { describe, expect, test } from 'vitest'
import { initialFormation } from '../../src/features/rotation/data/rotation'
import { getServer } from '../../src/features/rotation/utils/getServer'
import { rotateFormation } from '../../src/features/rotation/utils/rotateFormation'

describe('getServer', () => {
  test('identifies the player in position 1 as the next server', () => {
    expect(getServer(initialFormation)).toBe('Jogador A')
  })

  test('identifies the player who moved from position 2 to 1 after rotation', () => {
    const formationAfterRegainingService = rotateFormation(initialFormation)

    expect(getServer(formationAfterRegainingService)).toBe('Jogador B')
  })

  test('does not mutate the formation', () => {
    const formation = { ...initialFormation }

    getServer(formation)

    expect(formation).toEqual(initialFormation)
  })
})
