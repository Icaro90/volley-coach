import { ThemeToggle } from './ThemeToggle'

export function AppHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-5 py-4 sm:px-8">
        <span aria-hidden="true" className="text-xl">
          🏐
        </span>
        <span className="font-semibold text-foreground">Regras de Vôlei</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
