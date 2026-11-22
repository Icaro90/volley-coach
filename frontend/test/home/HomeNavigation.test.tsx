import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import { HomePage } from '../../src/features/home/HomePage'
import { MorePage } from '../../src/features/home/MorePage'
import { SearchResultsPage } from '../../src/features/search/pages/SearchResultsPage'
import { renderWithAppProviders } from '../renderWithAppProviders'

function renderNavigation(path = '/') {
  return renderWithAppProviders(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<MorePage />} path="/more" />
        <Route element={<SearchResultsPage />} path="/search" />
      </Routes>
    </MemoryRouter>,
  )
}

describe('essential home navigation', () => {
  test('shows four primary shortcuts and a four destination bottom navigation', () => {
    renderNavigation()

    expect(screen.getByRole('heading', { name: 'O que você quer praticar hoje?' })).toBeDefined()
    expect(screen.getByRole('navigation', { name: 'Navegação principal' }).querySelectorAll('a')).toHaveLength(4)
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
    expect(screen.getByRole('link', { name: /Regras/ })).toHaveAttribute('href', '/rules')
    expect(screen.getByRole('link', { name: 'Treinos', exact: true })).toHaveAttribute('href', '/training')
    expect(screen.getByRole('link', { name: /Quiz/ })).toHaveAttribute('href', '/quiz')
    expect(screen.getByRole('link', { name: /Favoritos/ })).toHaveAttribute('href', '/favorites')
    expect(screen.getByRole('link', { name: 'Início' })).toHaveAttribute('aria-current', 'page')
  })

  test('Ver tudo opens Mais and every secondary resource has a destination', async () => {
    const user = userEvent.setup()
    renderNavigation()

    await user.click(screen.getByRole('link', { name: /Ver tudo/ }))
    expect(screen.getByRole('heading', { name: 'Mais recursos' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Mais' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: /Rodízio/ })).toHaveAttribute('href', '/rotation')
    expect(screen.getByRole('link', { name: /Diário de treino/ })).toHaveAttribute('href', '/diary')
    expect(screen.getByRole('link', { name: /Consulta rápida/ })).toHaveAttribute('href', '/quick-reference')
    expect(screen.getByRole('link', { name: /Glossário/ })).toHaveAttribute('href', '/glossary')
    expect(screen.getByRole('link', { name: /Scout de partida/ })).toHaveAttribute('href', '/scout')
  })

  test('bottom navigation search lets the person start a search', async () => {
    const user = userEvent.setup()
    renderNavigation()

    await user.click(screen.getByRole('link', { name: 'Buscar' }))
    expect(screen.getByRole('link', { name: 'Buscar' })).toHaveAttribute('aria-current', 'page')
    const input = screen.getByRole('searchbox', { name: 'Pesquisar uma regra' })
    await user.type(input, 'saque')
    await user.click(screen.getByRole('button', { name: 'Buscar' }))
    expect(await screen.findByRole('heading', { name: 'Resultados da busca' })).toBeDefined()
  })
})
