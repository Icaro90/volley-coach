import { SearchForm } from '../search/components/SearchForm'
import { Link } from 'react-router'
import { AppHeader } from '../../shared/components/AppHeader'
import { LearningShortcutCard } from './components/LearningShortcutCard'
import { homeShortcuts } from './data/homeShortcuts'

export function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 pb-10 pt-9 sm:px-8 sm:pt-14">
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">Volley Coach</p>
        <h1 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          O que você quer praticar hoje?
        </h1>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          Regras claras e treinos práticos para levar direto à quadra.
        </p>

        <section className="mt-7" aria-label="Buscar uma regra">
          <SearchForm />
        </section>

        <section className="mt-9" aria-labelledby="learning-title">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground" id="learning-title">
              Comece por aqui
            </h2>
            <Link className="min-h-11 rounded-lg px-2 py-3 text-sm font-semibold text-accent hover:text-accent-strong" to="/more">
              Ver tudo <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
            {homeShortcuts.map((shortcut) => (
              <LearningShortcutCard key={shortcut.path} shortcut={shortcut} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
