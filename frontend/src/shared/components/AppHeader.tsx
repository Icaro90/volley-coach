import { ThemeToggle } from './ThemeToggle'

export function AppHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-5 py-4 sm:px-8">
        <span aria-hidden="true" className="text-xl">
          🏐
        </span>
        <span className="font-semibold text-slate-900">Regras de Vôlei</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
