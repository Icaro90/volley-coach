import { describe, expect, test } from 'vitest'
import { createScoutMatch, isScoutMatchList, matchEventCounts, scoutReducer } from '../../src/features/scout/data/scout'

describe('match scout', () => {
  test('records classified points for the right team and undo restores the score', () => {
    const match = createScoutMatch({ id: 'test-match', homeName: 'A', awayName: 'B', bestOf: 3 })
    const withAce = scoutReducer(match, { type: 'classified', eventType: 'ace', cause: 'home' })
    expect(withAce.currentScore).toEqual({ home: 1, away: 0 })
    expect(matchEventCounts(withAce).find((row) => row.eventType === 'ace')).toMatchObject({ home: 1, away: 0 })
    expect(scoutReducer(withAce, { type: 'undo' })).toEqual(match)
  })

  test('ends a set only with a two point lead and completes the match', () => {
    let match = createScoutMatch({ id: 'test-match', homeName: 'A', awayName: 'B', bestOf: 3, regularSetTarget: 2, decidingSetTarget: 2 })
    match = scoutReducer(match, { type: 'point', winner: 'home' })
    match = scoutReducer(match, { type: 'point', winner: 'away' })
    expect(match.sets).toHaveLength(0)
    match = scoutReducer(match, { type: 'point', winner: 'home' })
    expect(match.sets).toHaveLength(0)
    match = scoutReducer(match, { type: 'point', winner: 'home' })
    expect(match.sets).toHaveLength(1)
    expect(match.currentScore).toEqual({ home: 0, away: 0 })
    match = scoutReducer(match, { type: 'point', winner: 'home' })
    match = scoutReducer(match, { type: 'point', winner: 'home' })
    expect(match.status).toBe('completed')
    expect(scoutReducer(match, { type: 'point', winner: 'away' })).toBe(match)
    expect(isScoutMatchList([match])).toBe(true)
  })
})
