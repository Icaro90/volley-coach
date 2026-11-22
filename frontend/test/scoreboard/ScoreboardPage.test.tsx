import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { ScoreboardPage } from '../../src/features/scoreboard/pages/ScoreboardPage'
import { renderWithAppProviders } from '../renderWithAppProviders'

describe('placar de partida', () => {
  test('inicia independente de histórico/scout, soma e desfaz um ponto', async () => {
    const user = userEvent.setup()
    renderWithAppProviders(<MemoryRouter><ScoreboardPage /></MemoryRouter>)
    await user.click(screen.getByRole('button', { name: 'Iniciar placar' }))
    expect(screen.getByRole('region', { name: 'Placar da partida' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Adicionar ponto para Nossa equipe' }))
    expect(screen.getByText('1', { selector: 'span' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Desfazer ponto' }))
    expect(screen.getAllByText('0', { selector: 'span' })).toHaveLength(2)
  })
})
