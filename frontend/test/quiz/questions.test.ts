import { describe, expect, test } from 'vitest'
import { quizQuestions } from '../../src/features/quiz/data/questions'

describe('quizQuestions', () => {
  test('provides a balanced bank of questions with distinct identifiers and topic-level pairs', () => {
    expect(quizQuestions).toHaveLength(45)
    expect(new Set(quizQuestions.map((question) => question.id))).toHaveLength(quizQuestions.length)
    expect(new Set(quizQuestions.map((question) => `${question.topic}:${question.difficulty}`))).toHaveLength(15)
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
      expect(question.source.reviewedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })
})
