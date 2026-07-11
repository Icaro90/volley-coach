import { SearchForm } from '../search/components/SearchForm'
import { AppHeader } from '../../shared/components/AppHeader'
import { LearningShortcutCard } from './components/LearningShortcutCard'
import { homeShortcuts } from './data/homeShortcuts'

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
          Aprenda na prática
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Entenda as regras. Jogue com mais confiança.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Explicações simples para tirar dúvidas e aproveitar melhor cada treino e partida.
        </p>

        <section className="mt-10" aria-labelledby="search-title">
          <h2 className="mb-3 text-lg font-semibold text-slate-900" id="search-title">
            Qual é a sua dúvida?
          </h2>
          <SearchForm />
        </section>

        <section className="mt-14" aria-labelledby="learning-title">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900" id="learning-title">
            O que você quer aprender hoje?
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {homeShortcuts.map((shortcut) => (
              <LearningShortcutCard key={shortcut.path} shortcut={shortcut} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
