import type { PositionScenario } from '../data/positionScenarios'

type PositionScenarioCardProps = {
  scenario: PositionScenario
}

function ScenarioDiagram({ scenario }: PositionScenarioCardProps) {
  if (scenario.id === 'lateral-fault') {
    return (
      <div aria-hidden="true" className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        <span className="rounded-md border border-border bg-surface px-2 py-3 text-muted">4</span>
        <span className="rounded-md border border-danger-border bg-danger-subtle px-2 py-3 text-danger">2</span>
        <span className="rounded-md border border-danger-border bg-danger-subtle px-2 py-3 text-danger">3</span>
        <span className="col-span-3 text-muted">A ordem correta é 4 · 3 · 2</span>
      </div>
    )
  }

  const isValid = scenario.status === 'valid'
  const frontPosition = isValid ? 4 : 5
  const backPosition = isValid ? 5 : 4
  const statusClassName = isValid
    ? 'border-success-border bg-success-subtle text-success'
    : 'border-danger-border bg-danger-subtle text-danger'

  return (
    <div aria-hidden="true" className="grid grid-cols-[1fr_auto] items-center gap-2 text-center text-xs font-semibold">
      <span className="text-left text-muted">Mais perto da rede</span>
      <span className={`rounded-md border px-3 py-2 ${statusClassName}`}>Posição {frontPosition}</span>
      <span className="text-left text-muted">Mais distante da rede</span>
      <span className={`rounded-md border px-3 py-2 ${statusClassName}`}>Posição {backPosition}</span>
    </div>
  )
}

export function PositionScenarioCard({ scenario }: PositionScenarioCardProps) {
  const isValid = scenario.status === 'valid'
  const statusLabel = isValid ? 'Formação válida' : 'Falta de posição'
  const cardClassName = isValid
    ? 'border-success-border bg-success-subtle'
    : 'border-danger-border bg-danger-subtle'
  const badgeClassName = isValid
    ? 'bg-success-subtle text-success'
    : 'bg-danger-subtle text-danger'

  return (
    <article className={`rounded-xl border p-5 ${cardClassName}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-foreground">{scenario.title}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClassName}`}>
          {statusLabel}
        </span>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-surface/70 p-4">
        <ScenarioDiagram scenario={scenario} />
      </div>

      <p className="mt-4 leading-7 text-muted">{scenario.explanation}</p>
      <p className="mt-3 font-semibold leading-7 text-foreground">{scenario.outcome}</p>
    </article>
  )
}
