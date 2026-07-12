import { describe, expect, test } from 'vitest'
import { quizQuestions } from '../../src/features/quiz/data/questions'
import { initialQuizState, quizReducer, type QuizState } from '../../src/features/quiz/state/quizReducer'

function answerCurrentQuestionCorrectly(state: QuizState) {
  const question = quizQuestions[state.currentQuestionIndex]
  const withSelectedAnswer = quizReducer(state, {
    type: 'selectOption',
    optionId: question.correctOptionId,
  })

  return quizReducer(withSelectedAnswer, { type: 'confirmAnswer' })
}

describe('quizReducer', () => {
  test('starts the quiz in the first question', () => {
    expect(quizReducer(initialQuizState, { type: 'start' })).toEqual({
      phase: 'question',
      currentQuestionIndex: 0,
      selectedOptionId: null,
      score: 0,
    })
  })

  test('does not select an unknown option or confirm without a selection', () => {
    const questionState = quizReducer(initialQuizState, { type: 'start' })

    expect(quizReducer(questionState, { type: 'selectOption', optionId: 'unknown' })).toBe(questionState)
    expect(quizReducer(questionState, { type: 'confirmAnswer' })).toBe(questionState)
  })

  test('shows feedback and increments the score only for a correct answer', () => {
    const questionState = quizReducer(initialQuizState, { type: 'start' })
    const feedbackState = answerCurrentQuestionCorrectly(questionState)

    expect(feedbackState).toMatchObject({ phase: 'feedback', score: 1 })
    expect(quizReducer(feedbackState, { type: 'confirmAnswer' })).toBe(feedbackState)
  })

  test('shows feedback without increasing the score for an incorrect answer', () => {
    const questionState = quizReducer(initialQuizState, { type: 'start' })
    const incorrectOption = quizQuestions[0].options.find(
      (option) => option.id !== quizQuestions[0].correctOptionId,
    )

    if (!incorrectOption) {
      throw new Error('A pergunta de teste deve possuir uma alternativa incorreta.')
    }

    const withIncorrectAnswer = quizReducer(questionState, {
      type: 'selectOption',
      optionId: incorrectOption.id,
    })

    expect(quizReducer(withIncorrectAnswer, { type: 'confirmAnswer' })).toMatchObject({
      phase: 'feedback',
      score: 0,
    })
  })

  test('moves to the next question only after feedback and clears the selected answer', () => {
    const questionState = quizReducer(initialQuizState, { type: 'start' })
    const feedbackState = answerCurrentQuestionCorrectly(questionState)
    const nextQuestionState = quizReducer(feedbackState, { type: 'nextQuestion' })

    expect(nextQuestionState).toMatchObject({
      phase: 'question',
      currentQuestionIndex: 1,
      selectedOptionId: null,
      score: 1,
    })
  })

  test('shows the result after feedback for the fifth question', () => {
    let state = quizReducer(initialQuizState, { type: 'start' })

    quizQuestions.forEach((_, index) => {
      state = answerCurrentQuestionCorrectly(state)

      if (index < quizQuestions.length - 1) {
        state = quizReducer(state, { type: 'nextQuestion' })
      }
    })

    expect(quizReducer(state, { type: 'nextQuestion' })).toMatchObject({
      phase: 'result',
      score: 5,
    })
  })

  test('restores the intro state when restarting', () => {
    const questionState = quizReducer(initialQuizState, { type: 'start' })
    const feedbackState = answerCurrentQuestionCorrectly(questionState)

    expect(quizReducer(feedbackState, { type: 'restart' })).toEqual(initialQuizState)
  })
})
