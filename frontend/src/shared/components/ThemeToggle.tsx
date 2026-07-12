import { useTheme } from '../theme/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDarkTheme = theme === 'dark'
  const nextThemeLabel = isDarkTheme ? 'Ativar tema claro' : 'Ativar tema escuro'

  return (
    <button
      aria-label={nextThemeLabel}
      aria-pressed={isDarkTheme}
      className="ml-auto inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-raised"
      onClick={toggleTheme}
      title={nextThemeLabel}
      type="button"
    >
      <span aria-hidden="true" className="text-base">
        {isDarkTheme ? '☀️' : '🌙'}
      </span>
      <span className="hidden sm:inline">{isDarkTheme ? 'Tema claro' : 'Tema escuro'}</span>
    </button>
  )
}
