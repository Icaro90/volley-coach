import type { ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../src/shared/theme/ThemeProvider'
import { FavoritesProvider } from '../src/shared/favorites/FavoritesProvider'
import { ScoutProvider } from '../src/features/scout/state/ScoutProvider'

export function renderWithAppProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(<ThemeProvider><FavoritesProvider><ScoutProvider>{ui}</ScoutProvider></FavoritesProvider></ThemeProvider>, options)
}
