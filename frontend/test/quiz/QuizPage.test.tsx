import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { quizQuestions } from '../../src/features/quiz/data/questions'
import { QuizPage } from '../../src/features/quiz/pages/QuizPage'

function renderQuizPage() {
  return render(
    <MemoryRouter>
      <QuizPage />
    </MemoryRouter>,
  )
}

describe('QuizPage', () => {
  test('starts the quiz and advances after confirming an answer', async () => {
    const user = userEvent.setup()
    renderQuizPage()

    await user.click(screen.getByRole('button', { name: 'Começar quiz' }))
    expect(screen.getByText('Pergunta 1 de 5')).toBeDefined()

    await user.click(screen.getByRole('radio', { name: quizQuestions[0].options[0].text }))
    await user.click(screen.getByRole('button', { name: 'Confirmar resposta' }))
    expect(screen.getByRole('status')).toHaveTextContent('Resposta correta!')

    await user.click(screen.getByRole('button', { name: 'Próxima pergunta' }))
    expect(screen.getByText('Pergunta 2 de 5')).toBeDefined()
  })

  test('shows the final score and allows restarting after five answers', async () => {
    const user = userEvent.setup()
    renderQuizPage()

    await user.click(screen.getByRole('button', { name: 'Começar quiz' }))

    for (let index = 0; index < quizQuestions.length; index += 1) {
      const question = quizQuestions[index]
      const correctOption = question.options.find((option) => option.id === question.correctOptionId)

      if (!correctOption) {
        throw new Error('A pergunta de teste deve ter uma alternativa correta.')
      }

      await user.click(screen.getByRole('radio', { name: correctOption.text }))
      await user.click(screen.getByRole('button', { name: 'Confirmar resposta' }))
      await user.click(
        screen.getByRole('button', {
          name: index === quizQuestions.length - 1 ? 'Ver resultado' : 'Próxima pergunta',
        }),
      )
    }

    expect(screen.getByRole('heading', { name: 'Você acertou 5 de 5 perguntas' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Consultar regras básicas' })).toHaveAttribute(
      'href',
      '/rules',
    )

    await user.click(screen.getByRole('button', { name: 'Reiniciar quiz' }))
    expect(screen.getByRole('button', { name: 'Começar quiz' })).toBeDefined()
  })
})
