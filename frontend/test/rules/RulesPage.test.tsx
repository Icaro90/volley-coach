import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { rules } from '../../src/features/rules/data/rules'
import { RulesPage } from '../../src/features/rules/pages/RulesPage'
import { renderWithAppProviders } from '../renderWithAppProviders'

describe('RulesPage', () => {
  test('lists every available basic rule with a link to its detail page', () => {
    renderWithAppProviders(
      <MemoryRouter>
        <RulesPage />
      </MemoryRouter>,
    )

    rules.forEach((rule) => {
      const ruleLink = screen.getByRole('heading', { name: rule.title }).closest('a')

      expect(ruleLink).toHaveAttribute(
        'href',
        `/rules/${rule.id}`,
      )
    })
  })
})
