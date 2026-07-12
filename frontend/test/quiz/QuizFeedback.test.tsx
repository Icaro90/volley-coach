import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import { quizQuestions } from '../../src/features/quiz/data/questions'
import { QuizFeedback } from '../../src/features/quiz/components/QuizFeedback'

const question = quizQuestions[0]

describe('QuizFeedback', () => {
  test('shows correct feedback and advances to the next question', async () => {
    const user = userEvent.setup()
    const onNextQuestion = vi.fn()
    render(
      <QuizFeedback
        isLastQuestion={false}
        onNextQuestion={onNextQuestion}
        question={question}
        selectedOptionId={question.correctOptionId}
      />,
    )

    expect(screen.getByRole('status')).toHaveTextContent('Resposta correta!')
    expect(screen.getByText(question.explanation)).toBeDefined()

    await user.click(screen.getByRole('button', { name: 'Próxima pergunta' }))
    expect(onNextQuestion).toHaveBeenCalledOnce()
  })

  test('shows the correct alternative after an incorrect answer', () => {
    const incorrectOption = question.options.find((option) => option.id !== question.correctOptionId)

    if (!incorrectOption) {
      throw new Error('A pergunta de teste deve possuir uma alternativa incorreta.')
    }

    render(
      <QuizFeedback
        isLastQuestion
        onNextQuestion={vi.fn()}
        question={question}
        selectedOptionId={incorrectOption.id}
      />,
    )

    expect(screen.getByRole('status')).toHaveTextContent('Resposta incorreta')
    expect(screen.getByText(`Sua resposta: ${incorrectOption.text}`)).toBeDefined()
    expect(screen.getByRole('button', { name: 'Ver resultado' })).toBeDefined()
  })
})
