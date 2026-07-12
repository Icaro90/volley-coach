import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import { readStoredTheme, saveTheme, type Theme } from './themeStorage'

function getInitialTheme(): Theme {
  try {
    return readStoredTheme(window.localStorage) ?? 'dark'
  } catch {
    return 'dark'
  }
}

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      saveTheme(window.localStorage, theme)
    } catch {
      // The visual theme remains available when browser storage cannot be read.
    }
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
