import { Link } from 'react-router'
import { FavoriteToggle } from '../../../shared/favorites/FavoriteToggle'
import type { VolleyballExercise } from '../data/exercises'

export function ExerciseCard({ exercise }: { exercise: VolleyballExercise }) {
  return (
    <li className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <Link className="min-w-0 flex-1 rounded-lg" to={`/training/${exercise.id}`}>
          <p className="text-sm font-semibold text-accent">{exercise.fundamental} · {exercise.level}</p>
          <h2 className="mt-1 text-lg font-semibold text-foreground">{exercise.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{exercise.objective}</p>
          <span className="mt-3 inline-block text-sm font-semibold text-accent">Ver exercício →</span>
        </Link>
        <FavoriteToggle id={exercise.id} label={exercise.title} type="exercise" />
      </div>
      <p className="mt-3 text-sm text-muted">{exercise.durationMinutes} min · {exercise.participants} participantes</p>
    </li>
  )
}
