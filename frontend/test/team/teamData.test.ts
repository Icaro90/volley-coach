import { describe, expect, it } from 'vitest'
import { emptyTeamData, isTeamData, rotateFormationSlots } from '../../src/features/team/data/teamData'

describe('dados da equipe', () => {
  it('aceita o estado inicial e uma ficha básica', () => {
    expect(isTeamData(emptyTeamData)).toBe(true)
    expect(isTeamData({ ...emptyTeamData, athletes: [{ id: 'a1', name: 'Ana', positions: [], active: true }] })).toBe(true)
  })
  it('rejeita estruturas incompletas ou avaliações fora da escala', () => {
    expect(isTeamData({ athletes: [] })).toBe(false)
    expect(isTeamData({ ...emptyTeamData, assessments: [{ id: 'x', athleteId: 'a1', score: 7 }] })).toBe(false)
  })
  it('gira as seis posições no sentido da regra de rodízio existente', () => {
    expect(rotateFormationSlots({ P1: '1', P2: '2', P3: '3', P4: '4', P5: '5', P6: '6' })).toEqual({ P1: '2', P2: '3', P3: '4', P4: '5', P5: '6', P6: '1' })
  })
})
