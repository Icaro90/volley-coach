import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import { quizQuestions } from '../../src/features/quiz/data/questions'
import { QuizQuestion } from '../../src/features/quiz/components/QuizQuestion'

const question = quizQuestions[0]

describe('QuizQuestion', () => {
  test('requires an alternative before confirming the answer', async () => {
    const user = userEvent.setup()
    const onSelectOption = vi.fn()
    const onConfirmAnswer = vi.fn()
    const { rerender } = render(
      <QuizQuestion
        onConfirmAnswer={onConfirmAnswer}
        onSelectOption={onSelectOption}
        question={question}
        questionNumber={1}
        selectedOptionId={null}
        totalQuestions={quizQuestions.length}
      />,
    )

    const confirmButton = screen.getByRole('button', { name: 'Confirmar resposta' })
    expect(confirmButton).toBeDisabled()

    await user.click(screen.getByRole('radio', { name: question.options[0].text }))
    expect(onSelectOption).toHaveBeenCalledWith(question.options[0].id)

    rerender(
      <QuizQuestion
        onConfirmAnswer={onConfirmAnswer}
        onSelectOption={onSelectOption}
        question={question}
        questionNumber={1}
        selectedOptionId={question.options[0].id}
        totalQuestions={quizQuestions.length}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Confirmar resposta' }))
    expect(onConfirmAnswer).toHaveBeenCalledOnce()
  })
})
