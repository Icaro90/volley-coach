import { useMemo, useState } from 'react'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { ExerciseCard } from '../components/ExerciseCard'
import { exercises, fundamentals, type TrainingLevel } from '../data/exercises'

export function TrainingPage() {
  const [fundamental, setFundamental] = useState('')
  const [level, setLevel] = useState('')
  const [maxDuration, setMaxDuration] = useState('')
  const filtered = useMemo(() => exercises.filter((exercise) =>
    (!fundamental || exercise.fundamental === fundamental) &&
    (!level || exercise.level === level) &&
    (!maxDuration || exercise.durationMinutes <= Number(maxDuration)),
  ), [fundamental, level, maxDuration])

  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold text-foreground">Treinos guiados</h1>
        <p className="mt-3 leading-7 text-muted">Exercícios simples para praticar fundamentos com segurança e no seu ritmo.</p>
        <section aria-label="Filtros de exercícios" className="mt-7 grid gap-3 rounded-xl border border-border bg-surface p-4 sm:grid-cols-3">
          <label className="text-sm font-semibold text-foreground">Fundamento
            <select className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" onChange={(event) => setFundamental(event.target.value)} value={fundamental}>
              <option value="">Todos</option>{fundamentals.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-foreground">Nível
            <select className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" onChange={(event) => setLevel(event.target.value)} value={level}>
              <option value="">Todos</option>{(['Iniciante', 'Intermediário', 'Avançado'] satisfies TrainingLevel[]).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-foreground">Duração máxima
            <select className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" onChange={(event) => setMaxDuration(event.target.value)} value={maxDuration}>
              <option value="">Qualquer duração</option><option value="10">Até 10 min</option><option value="12">Até 12 min</option><option value="15">Até 15 min</option>
            </select>
          </label>
        </section>
        <p aria-live="polite" className="mt-5 text-sm text-muted">{filtered.length} exercícios disponíveis</p>
        {filtered.length ? <ul className="mt-3 space-y-4">{filtered.map((exercise) => <ExerciseCard exercise={exercise} key={exercise.id} />)}</ul> : (
          <div className="mt-4 rounded-xl border border-border bg-surface p-6"><h2 className="font-semibold text-foreground">Nenhum exercício encontrado</h2><p className="mt-2 text-muted">Tente limpar um dos filtros.</p><button className="mt-4 min-h-11 rounded-lg border border-border px-4 font-semibold text-foreground" onClick={() => { setFundamental(''); setLevel(''); setMaxDuration('') }} type="button">Limpar filtros</button></div>
        )}
      </main>
    </div>
  )
}
