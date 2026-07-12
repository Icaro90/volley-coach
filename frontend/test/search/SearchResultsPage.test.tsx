import { screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import { rules } from '../../src/features/rules/data/rules'
import { SearchResultsPage } from '../../src/features/search/pages/SearchResultsPage'
import { renderWithAppProviders } from '../renderWithAppProviders'

function renderSearchResults(path: string) {
  return renderWithAppProviders(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<SearchResultsPage />} path="/search" />
      </Routes>
    </MemoryRouter>,
  )
}

describe('SearchResultsPage', () => {
  test('guides the person when the query parameter is missing', () => {
    renderSearchResults('/search')

    expect(screen.getByRole('heading', { name: 'Digite uma dúvida para pesquisar' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Ver todas as regras' })).toHaveAttribute('href', '/rules')
  })

  test('shows matching rules and the result count', () => {
    renderSearchResults('/search?q=pontuacao')

    expect(screen.getByText(/1 resultado encontrado/)).toHaveTextContent(
      '1 resultado encontrado para “pontuacao”.',
    )
    expect(screen.getByRole('heading', { name: 'Pontuação' }).closest('a')).toHaveAttribute(
      'href',
      '/rules/scoring',
    )
  })

  test('shows an empty state when no rule matches the query', () => {
    renderSearchResults('/search?q=arremesso')

    expect(screen.getByRole('heading', { name: 'Nenhuma regra encontrada' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Ver todas as regras' })).toHaveAttribute('href', '/rules')
  })

  test.each([
    ['pé do outro lado', 'center-line-invasion'],
    ['bloquear saque', 'block'],
    ['troca de jogador', 'substitution'],
    ['atacar do fundo', 'back-row-attack'],
  ])('finds %s and links to its detail URL', (query, ruleId) => {
    renderSearchResults(`/search?q=${encodeURIComponent(query)}`)

    const expectedRule = rules.find((rule) => rule.id === ruleId)

    if (!expectedRule) {
      throw new Error(`A regra ${ruleId} deveria existir no catálogo de testes.`)
    }

    expect(screen.getByRole('heading', { name: expectedRule.title }).closest('a')).toHaveAttribute(
      'href',
      `/rules/${ruleId}`,
    )
  })
})
