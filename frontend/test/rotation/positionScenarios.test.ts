import { expect, test } from 'vitest'
import {
  positionScenarios,
  positionScenarioSource,
} from '../../src/features/rotation/data/positionScenarios'

test('provides valid and faulty position scenarios with reviewed FIVB source metadata', () => {
  const scenarioIds = positionScenarios.map((scenario) => scenario.id)

  expect(positionScenarios).toHaveLength(3)
  expect(new Set(scenarioIds)).toHaveLength(scenarioIds.length)
  expect(positionScenarios.some((scenario) => scenario.status === 'valid')).toBe(true)
  expect(positionScenarios.filter((scenario) => scenario.status === 'fault')).toHaveLength(2)
  expect(positionScenarioSource.relevantRules).toEqual(['7.4', '7.5', '7.6', '7.7', '12.2'])
  expect(positionScenarioSource.reviewedAt).toBe('2026-07-12')
})
