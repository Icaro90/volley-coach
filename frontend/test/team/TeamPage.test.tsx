import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { TeamPage } from '../../src/features/team/pages/TeamPage'
import { renderWithAppProviders } from '../renderWithAppProviders'

describe('gestão do time', () => {
  test('cadastra e exibe a ficha local de um atleta', async () => {
    const user = userEvent.setup()
    renderWithAppProviders(<MemoryRouter><TeamPage /></MemoryRouter>)
    await user.type(screen.getByRole('textbox', { name: 'Nome' }), 'Ana Lima')
    await user.type(screen.getByRole('textbox', { name: 'Número (opcional)' }), '7')
    await user.click(screen.getByRole('button', { name: 'Adicionar atleta' }))
    expect(screen.getAllByText(/Ana Lima/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/#7/).length).toBeGreaterThan(0)
  })
})
