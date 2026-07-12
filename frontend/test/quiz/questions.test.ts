import { describe, expect, test } from 'vitest'
import { quizQuestions } from '../../src/features/quiz/data/questions'

describe('quizQuestions', () => {
  test('provides exactly five questions with distinct identifiers and topics', () => {
    expect(quizQuestions).toHaveLength(5)
    expect(new Set(quizQuestions.map((question) => question.id))).toHaveLength(quizQuestions.length)
    expect(new Set(quizQuestions.map((question) => question.topic))).toHaveLength(quizQuestions.length)
  })

  test('provides four unique alternatives and a valid correct answer for every question', () => {
    quizQuestions.forEach((question) => {
      expect(question.options).toHaveLength(4)
      expect(new Set(question.options.map((option) => option.id))).toHaveLength(question.options.length)
      expect(question.options.some((option) => option.id === question.correctOptionId)).toBe(true)
    })
  })

  test('keeps an explanation and official source for every answer', () => {
    quizQuestions.forEach((question) => {
      expect(question.explanation).not.toHaveLength(0)
      expect(question.source.title).toBe('Official Volleyball Rules')
      expect(question.source.relevantRules.length).toBeGreaterThan(0)
      expect(question.source.reviewedAt).toBe('2026-07-11')
    })
  })
})
