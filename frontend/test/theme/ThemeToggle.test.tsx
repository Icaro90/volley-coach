import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import { ThemeToggle } from '../../src/shared/components/ThemeToggle'
import { ThemeProvider } from '../../src/shared/theme/ThemeProvider'

afterEach(() => {
  localStorage.clear()
  document.documentElement.dataset.theme = 'dark'
})

describe('ThemeToggle', () => {
  test('starts in dark mode and switches to the light theme', async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    const toggle = screen.getByRole('button', { name: 'Tema escuro ativo. Ativar tema claro' })

    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.dataset.theme).toBe('dark')

    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Tema claro ativo. Ativar tema escuro' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('volley-coach.theme')).toBe('light')
  })

  test('restores the saved light theme when the provider starts', () => {
    localStorage.setItem('volley-coach.theme', 'light')

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    expect(screen.getByRole('button', { name: 'Tema claro ativo. Ativar tema escuro' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})
