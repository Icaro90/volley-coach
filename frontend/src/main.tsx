import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './app/App.tsx'
import { ThemeProvider } from './shared/theme/ThemeProvider.tsx'
import { FavoritesProvider } from './shared/favorites/FavoritesProvider.tsx'
import { ScoutProvider } from './features/scout/state/ScoutProvider.tsx'
import { TeamProvider } from './features/team/state/TeamProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <FavoritesProvider>
          <ScoutProvider><TeamProvider><App /></TeamProvider></ScoutProvider>
        </FavoritesProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
