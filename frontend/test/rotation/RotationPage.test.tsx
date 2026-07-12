import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import { MemoryRouter } from 'react-router'
import { RotationPage } from '../../src/features/rotation/pages/RotationPage'

afterEach(cleanup)

function renderRotationPage() {
  return render(
    <MemoryRouter>
      <RotationPage />
    </MemoryRouter>,
  )
}

function getPlayerAtPosition(position: number) {
  const courtPosition = screen.getByText(`Posição ${position}`).closest('li')

  if (!courtPosition) {
    throw new Error(`Não foi possível encontrar a posição ${position}.`)
  }

  return within(courtPosition)
}

describe('RotationPage', () => {
  test('renders the initial formation and disables restart', () => {
    renderRotationPage()

    expect(screen.getByRole('heading', { name: 'Entenda o rodízio' })).toBeDefined()
    expect(getPlayerAtPosition(1).getByText('Jogador A')).toBeDefined()
    expect(getPlayerAtPosition(2).getByText('Jogador B')).toBeDefined()
    expect(screen.getByRole('button', { name: 'Reiniciar' })).toHaveProperty('disabled', true)
  })

  test('advances the formation one position clockwise and announces the current rotation', async () => {
    const user = userEvent.setup()
    renderRotationPage()

    await user.click(screen.getByRole('button', { name: 'Avançar rodízio' }))

    expect(getPlayerAtPosition(1).getByText('Jogador B')).toBeDefined()
    expect(getPlayerAtPosition(6).getByText('Jogador A')).toBeDefined()
    expect(
      screen.getByText('Rodízio 1: Jogador B está na posição 1 e será a próxima pessoa a sacar.'),
    ).toBeDefined()
    expect(screen.getByRole('button', { name: 'Reiniciar' })).toHaveProperty('disabled', false)
  })

  test('restores the initial formation after restarting', async () => {
    const user = userEvent.setup()
    renderRotationPage()

    await user.click(screen.getByRole('button', { name: 'Avançar rodízio' }))
    await user.click(screen.getByRole('button', { name: 'Reiniciar' }))

    expect(getPlayerAtPosition(1).getByText('Jogador A')).toBeDefined()
    expect(screen.getByRole('button', { name: 'Reiniciar' })).toHaveProperty('disabled', true)
  })
})
