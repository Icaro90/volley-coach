import { expect, test } from 'vitest'
import { rules } from '../../src/features/rules/data/rules'

test('provides six basic rules with unique identifiers', () => {
  const ruleIds = rules.map((rule) => rule.id)

  expect(rules).toHaveLength(6)
  expect(new Set(ruleIds)).toHaveLength(ruleIds.length)
})
