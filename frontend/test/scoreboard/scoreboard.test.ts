import { describe, expect, it } from 'vitest'
import { createScoreMatch, finishSetManually, isMatchResultList, resultFromMatch, scorePoint, undoScore, type ScoreMatch } from '../../src/features/scoreboard/data/scoreboard'

function shortMatch(): ScoreMatch {
  return createScoreMatch('Casa', 'Fora', { bestOf: 3, regularTarget: 2, decidingTarget: 2, winBy: 2, label: 'teste' }, 'home', true)
}

describe('placar de partida', () => {
  it('só fecha set com diferença mínima e troca os lados', () => {
    const atDeuce = scorePoint(scorePoint(scorePoint(shortMatch(), 'home'), 'away'), 'home')
    expect(atDeuce.sets).toHaveLength(0)
    const finished = scorePoint(atDeuce, 'home')
    expect(finished.sets).toEqual([{ number: 1, home: 3, away: 1 }])
    expect(finished.score).toEqual({ home: 0, away: 0 })
    expect(finished.homeOnLeft).toBe(false)
  })

  it('desfaz ponto e transição de set por inteiro', () => {
    const onePoint = scorePoint(shortMatch(), 'home')
    const finished = scorePoint(scorePoint(onePoint, 'home'), 'home')
    const restored = undoScore(finished)
    expect(restored.sets).toHaveLength(1)
    expect(restored.score).toEqual({ home: 0, away: 0 })
    const beforeSet = undoScore(restored)
    expect(beforeSet.sets).toHaveLength(0)
    expect(beforeSet.score).toEqual({ home: 1, away: 0 })
    expect(beforeSet.status).toBe('active')
  })

  it('encerra set manual apenas quando há vencedor', () => {
    const empty = shortMatch()
    expect(finishSetManually(empty)).toBe(empty)
    const match: ScoreMatch = { ...shortMatch(), score: { home: 7, away: 5 } }
    expect(finishSetManually(match).sets).toEqual([{ number: 1, home: 7, away: 5 }])
  })

  it('guarda um snapshot válido para reabrir o resultado e corrigir o ponto final', () => {
    const initial = createScoreMatch('Casa', 'Fora', { bestOf: 3, regularTarget: 2, decidingTarget: 2, winBy: 2, label: 'teste' }, 'home', true)
    const afterFirst = scorePoint(scorePoint(initial, 'home'), 'home')
    const final = scorePoint(scorePoint(afterFirst, 'home'), 'home')
    const result = resultFromMatch(final)
    expect(result?.snapshot?.undoStack.length).toBeGreaterThan(0)
    expect(isMatchResultList(result ? [result] : [])).toBe(true)
  })
})
