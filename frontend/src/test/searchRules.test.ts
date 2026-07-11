import { describe, expect, test } from 'vitest'
import { rules } from '../data/rules'
import { normalizeSearchText, searchRules } from '../utils/searchRules'

describe('normalizeSearchText', () => {
  test('removes accents, ignores case and trims whitespace', () => {
    expect(normalizeSearchText('  PONTUAÇÃO  ')).toBe('pontuacao')
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

  test('returns no results for an empty query', () => {
    expect(searchRules(rules, '   ')).toEqual([])
  })

  test('returns no results when there is no match', () => {
    expect(searchRules(rules, 'arremesso')).toEqual([])
  })
})
