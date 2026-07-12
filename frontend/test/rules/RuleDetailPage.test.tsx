import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import { rules } from '../../src/features/rules/data/rules'
import { RuleDetailPage } from '../../src/features/rules/pages/RuleDetailPage'

function renderRuleDetail(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<RuleDetailPage />} path="/rules/:ruleId" />
      </Routes>
    </MemoryRouter>,
  )
}

describe('RuleDetailPage', () => {
  test('shows the detail, diagram and source of an existing rule', () => {
    const rule = rules.find((item) => item.id === 'service')

    if (!rule) {
      throw new Error('A regra de saque deveria existir no catálogo de testes.')
    }

    renderRuleDetail('/rules/service')

    expect(screen.getByRole('heading', { name: rule.title })).toBeDefined()
    expect(screen.getByRole('img', { name: rule.diagram.alt })).toBeDefined()
    expect(screen.getByRole('link', { name: /Official Volleyball Rules/ })).toHaveAttribute(
      'href',
      rule.source.url,
    )
  })

  test('shows a recovery path for an unknown rule identifier', () => {
    renderRuleDetail('/rules/nao-existe')

    expect(screen.getByRole('heading', { name: 'Regra não encontrada' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Voltar para as regras básicas' })).toHaveAttribute(
      'href',
      '/rules',
    )
  })

  test.each([
    'center-line-invasion',
    'block',
    'substitution',
    'back-row-attack',
  ] as const)('opens the %s rule from its direct URL with accessible content', (ruleId) => {
    const rule = rules.find((item) => item.id === ruleId)

    if (!rule) {
      throw new Error(`A regra ${ruleId} deveria existir no catálogo de testes.`)
    }

    renderRuleDetail(`/rules/${ruleId}`)

    expect(screen.getByRole('heading', { name: rule.title })).toBeDefined()
    expect(screen.getByRole('img', { name: rule.diagram.alt })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Voltar para as regras básicas' })).toHaveAttribute(
      'href',
      '/rules',
    )
  })
})
