import { courtPositions, type RotationFormation } from '../data/rotation'

type RotationCourtProps = {
  formation: RotationFormation
  formationLabel: string
}

export function RotationCourt({ formation, formationLabel }: RotationCourtProps) {
  return (
    <section aria-labelledby="rotation-court-title" aria-describedby="rotation-court-description">
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-foreground" id="rotation-court-title">
              Seu lado da quadra
            </h2>
            <p className="mt-1 text-sm text-muted" id="rotation-court-description">
              Você está olhando para a rede. A frente fica mais perto dela.
            </p>
          </div>
          <span className="rounded-full bg-info-subtle px-3 py-1 text-xs font-semibold text-info">
            {formationLabel}
          </span>
        </div>

        <div className="mt-5 border-t-4 border-foreground pt-2">
          <p className="text-center text-xs font-semibold tracking-wide text-muted uppercase">
            Rede
          </p>
        </div>

        <ul className="mt-3 grid grid-cols-3 gap-2 rounded-xl border-2 border-accent/50 bg-accent-subtle p-2 sm:gap-3 sm:p-3">
          {courtPositions.map((position) => (
            <li
              className="min-h-28 rounded-lg border border-accent/30 bg-surface p-3 text-center shadow-sm"
              key={position.id}
            >
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                Posição {position.id}
              </p>
              <p className="mt-2 text-base font-bold text-foreground sm:text-lg">
                {formation[position.id]}
              </p>
              <p className="mt-1 text-xs text-muted">{position.name}</p>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-center text-xs text-muted">
          Frente: posições 4, 3 e 2 · Fundo: posições 5, 6 e 1
        </p>
      </div>
    </section>
  )
}
