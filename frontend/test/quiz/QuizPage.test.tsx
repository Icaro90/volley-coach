import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { quizQuestions, quizTopics, quizDifficulties } from '../../src/features/quiz/data/questions'
import { QuizPage } from '../../src/features/quiz/pages/QuizPage'
import { renderWithAppProviders } from '../renderWithAppProviders'

function renderQuizPage() {
  return renderWithAppProviders(
    <MemoryRouter>
      <QuizPage />
    </MemoryRouter>,
  )
}

describe('QuizPage', () => {
  test('starts the quiz and advances after confirming an answer', async () => {
    const user = userEvent.setup()
    renderQuizPage()

    await user.selectOptions(screen.getByLabelText('Tema'), quizTopics[0].id)
    await user.selectOptions(screen.getByLabelText('Nível'), quizDifficulties[0].id)

    await user.click(screen.getByRole('button', { name: 'Começar quiz' }))
    expect(screen.getByText('Pergunta 1 de 3')).toBeDefined()

    await user.click(screen.getByRole('radio', { name: quizQuestions[0].options[0].text }))
    await user.click(screen.getByRole('button', { name: 'Confirmar resposta' }))
    expect(screen.getByRole('status')).toHaveTextContent('Resposta correta!')

    await user.click(screen.getByRole('button', { name: 'Próxima pergunta' }))
    expect(screen.getByText('Pergunta 2 de 3')).toBeDefined()
  })

  test('shows the final score and allows restarting after five answers', async () => {
    const user = userEvent.setup()
    renderQuizPage()

    await user.selectOptions(screen.getByLabelText('Tema'), quizTopics[0].id)
    await user.selectOptions(screen.getByLabelText('Nível'), quizDifficulties[0].id)

    await user.click(screen.getByRole('button', { name: 'Começar quiz' }))

    const selectedQuestions = quizQuestions.filter((question) => question.topic === quizTopics[0].id && question.difficulty === quizDifficulties[0].id)
    for (let index = 0; index < selectedQuestions.length; index += 1) {
      const question = selectedQuestions[index]
      const correctOption = question.options.find((option) => option.id === question.correctOptionId)

      if (!correctOption) {
        throw new Error('A pergunta de teste deve ter uma alternativa correta.')
      }

      await user.click(screen.getByRole('radio', { name: correctOption.text }))
      await user.click(screen.getByRole('button', { name: 'Confirmar resposta' }))
      await user.click(
        screen.getByRole('button', {
          name: index === selectedQuestions.length - 1 ? 'Ver resultado' : 'Próxima pergunta',
        }),
      )
    }

    expect(screen.getByRole('heading', { name: 'Você acertou 3 de 3 perguntas' })).toBeDefined()
    expect(screen.getByText('Aproveitamento: 100%')).toBeDefined()
    expect(screen.getByRole('link', { name: 'Consultar regras básicas' })).toHaveAttribute(
      'href',
      '/rules',
    )

    await user.click(screen.getByRole('button', { name: 'Escolher outro quiz' }))
    expect(screen.getByRole('button', { name: 'Começar quiz' })).toBeDefined()
  })
})
