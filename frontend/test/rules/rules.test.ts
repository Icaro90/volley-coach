import { expect, test } from 'vitest'
import { rules } from '../../src/features/rules/data/rules'

test('provides ten basic rules with unique identifiers', () => {
  const ruleIds = rules.map((rule) => rule.id)

  expect(rules).toHaveLength(10)
  expect(new Set(ruleIds)).toHaveLength(ruleIds.length)
})

test('provides the required content for invasion and block rules', () => {
  const additionalRules = rules.filter((rule) =>
    ['center-line-invasion', 'block'].includes(rule.id),
  )

  expect(additionalRules).toHaveLength(2)

  for (const rule of additionalRules) {
    expect(rule.diagram.src).toBeTruthy()
    expect(rule.diagram.alt).toBeTruthy()
    expect(rule.source.relevantRules).not.toHaveLength(0)
    expect(rule.source.reviewedAt).toBe('2026-07-12')
  }
})

test('provides the required content for substitution and back-row attack rules', () => {
  const additionalRules = rules.filter((rule) =>
    ['substitution', 'back-row-attack'].includes(rule.id),
  )

  expect(additionalRules).toHaveLength(2)

  for (const rule of additionalRules) {
    expect(rule.diagram.src).toBeTruthy()
    expect(rule.diagram.alt).toBeTruthy()
    expect(rule.source.relevantRules).not.toHaveLength(0)
    expect(rule.source.reviewedAt).toBe('2026-07-12')
  }
})
