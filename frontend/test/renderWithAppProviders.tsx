import type { ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../src/shared/theme/ThemeProvider'

export function renderWithAppProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(<ThemeProvider>{ui}</ThemeProvider>, options)
}
