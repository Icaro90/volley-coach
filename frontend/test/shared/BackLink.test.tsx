import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { BackLink } from '../../src/shared/components/BackLink'

describe('BackLink', () => {
  test('renders an accessible link to the supplied internal destination', () => {
    render(
      <MemoryRouter>
        <BackLink to="/rules">Voltar para as regras básicas</BackLink>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Voltar para as regras básicas' })).toHaveAttribute(
      'href',
      '/rules',
    )
  })
})
