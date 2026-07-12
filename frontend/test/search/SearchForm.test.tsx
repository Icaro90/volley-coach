import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useLocation } from 'react-router'
import { describe, expect, test } from 'vitest'
import { SearchForm } from '../../src/features/search/components/SearchForm'

function SearchFormHarness() {
  const location = useLocation()

  return (
    <>
      <SearchForm />
      <output data-testid="location-search">{location.search}</output>
    </>
  )
}

function renderSearchForm() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <SearchFormHarness />
    </MemoryRouter>,
  )
}

describe('SearchForm', () => {
  test('shows guidance and does not navigate when the query is empty', async () => {
    const user = userEvent.setup()
    renderSearchForm()

    await user.click(screen.getByRole('button', { name: 'Buscar' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Digite uma dúvida para pesquisar uma regra.')
    expect(screen.getByTestId('location-search')).toHaveTextContent('')
  })

  test('navigates with a trimmed query in the URL', async () => {
    const user = userEvent.setup()
    renderSearchForm()

    await user.type(screen.getByRole('searchbox', { name: 'Pesquisar uma regra' }), '  bola na linha  ')
    await user.click(screen.getByRole('button', { name: 'Buscar' }))

    expect(screen.getByTestId('location-search')).toHaveTextContent('?q=bola+na+linha')
  })
})
