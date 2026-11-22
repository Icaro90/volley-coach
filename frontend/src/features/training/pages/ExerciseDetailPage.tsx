import { Link, useParams } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { FavoriteToggle } from '../../../shared/favorites/FavoriteToggle'
import { ShareButton } from '../../../shared/components/ShareButton'
import { exercises } from '../data/exercises'

export function ExerciseDetailPage() {
  const { exerciseId } = useParams()
  const exercise = exercises.find((item) => item.id === exerciseId)
  if (!exercise) return <div className="min-h-screen bg-canvas"><AppHeader /><main className="mx-auto max-w-2xl px-5 py-12"><h1 className="text-3xl font-bold text-foreground">Exercício não encontrado</h1><Link className="mt-5 inline-block text-accent underline" to="/training">Voltar para os treinos</Link></main></div>

  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
        <BackLink to="/training">Voltar para os treinos</BackLink>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-3"><div><p className="font-semibold text-accent">{exercise.fundamental} · {exercise.level}</p><h1 className="mt-2 text-3xl font-bold text-foreground">{exercise.title}</h1></div><div className="flex flex-wrap gap-2"><FavoriteToggle id={exercise.id} label={exercise.title} type="exercise" /><ShareButton title={exercise.title} text={exercise.objective} path={`/training/${exercise.id}`} /></div></div>
        <p className="mt-4 text-lg leading-7 text-muted">{exercise.objective}</p>
        <dl className="mt-6 grid gap-3 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2">
          <div><dt className="font-semibold text-foreground">Duração</dt><dd className="mt-1 text-muted">{exercise.durationMinutes} minutos</dd></div>
          <div><dt className="font-semibold text-foreground">Participantes</dt><dd className="mt-1 text-muted">{exercise.participants}</dd></div>
          <div className="sm:col-span-2"><dt className="font-semibold text-foreground">Materiais</dt><dd className="mt-1 text-muted">{exercise.materials.join(', ')}</dd></div>
        </dl>
        <section className="mt-7" aria-labelledby="prepare-title"><h2 className="text-xl font-bold text-foreground" id="prepare-title">Preparação</h2><p className="mt-2 leading-7 text-muted">{exercise.preparation}</p></section>
        <section className="mt-7" aria-labelledby="steps-title"><h2 className="text-xl font-bold text-foreground" id="steps-title">Como praticar</h2><ol className="mt-3 list-inside list-decimal space-y-2 text-muted">{exercise.steps.map((step) => <li className="leading-7" key={step}>{step}</li>)}</ol></section>
        <section className="mt-6 rounded-xl border border-info-border bg-info-subtle p-5"><h2 className="font-semibold text-foreground">Variação</h2><p className="mt-2 leading-7 text-muted">{exercise.variation}</p></section>
        <p className="mt-6 text-sm leading-6 text-muted">Aqueça antes, adapte o exercício ao grupo e pare se sentir dor.</p>
      </main>
    </div>
  )
}
