import { describe, expect, test } from 'vitest'
import { rules } from '../../src/features/rules/data/rules'
import { normalizeSearchText, searchRules } from '../../src/features/search/utils/searchRules'

describe('normalizeSearchText', () => {
  test('removes accents, ignores case and trims whitespace', () => {
    expect(normalizeSearchText('  PONTUAÇÃO  ')).toBe('pontuacao')
  })

  test('removes punctuation from a question', () => {
    expect(normalizeSearchText('Bola na linha vale?')).toBe('bola na linha vale')
  })
})

describe('searchRules', () => {
  test('finds a rule when the query omits accents', () => {
    expect(searchRules(rules, 'pontuacao').map((rule) => rule.id)).toContain('scoring')
  })

  test('finds matches without considering letter case', () => {
    expect(searchRules(rules, 'SAQUE').map((rule) => rule.id)).toContain('service')
  })

  test('searches the explanation in addition to the title and summary', () => {
    expect(searchRules(rules, 'linha de fundo').map((rule) => rule.id)).toContain('service')
  })

  test('finds a rule from a common natural-language question about holding the ball', () => {
    expect(searchRules(rules, 'pode segurar a bola?').map((rule) => rule.id)).toContain(
      'ball-handling',
    )
  })

  test('finds a rule from a common natural-language question about the line', () => {
    expect(searchRules(rules, 'bola na linha vale?').map((rule) => rule.id)).toContain(
      'ball-in-or-out',
    )
  })

  test('finds the invasion rule from a controlled alternative term', () => {
    expect(searchRules(rules, 'pé do outro lado').map((rule) => rule.id)).toContain(
      'center-line-invasion',
    )
  })

  test('finds the block rule from a controlled alternative term', () => {
    expect(searchRules(rules, 'bloquear saque').map((rule) => rule.id)).toContain('block')
  })

  test('returns no results for an empty query', () => {
    expect(searchRules(rules, '   ')).toEqual([])
  })

  test('returns no results when there is no match', () => {
    expect(searchRules(rules, 'arremesso')).toEqual([])
  })
})
