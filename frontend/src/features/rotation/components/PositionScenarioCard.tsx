import type { PositionScenario } from '../data/positionScenarios'

type PositionScenarioCardProps = {
  scenario: PositionScenario
}

function ScenarioDiagram({ scenario }: PositionScenarioCardProps) {
  if (scenario.id === 'lateral-fault') {
    return (
      <div aria-hidden="true" className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        <span className="rounded-md border border-slate-300 bg-white px-2 py-3 text-slate-600">4</span>
        <span className="rounded-md border border-red-300 bg-red-100 px-2 py-3 text-red-800">2</span>
        <span className="rounded-md border border-red-300 bg-red-100 px-2 py-3 text-red-800">3</span>
        <span className="col-span-3 text-slate-600">A ordem correta é 4 · 3 · 2</span>
      </div>
    )
  }

  const isValid = scenario.status === 'valid'
  const frontPosition = isValid ? 4 : 5
  const backPosition = isValid ? 5 : 4
  const statusClassName = isValid
    ? 'border-green-300 bg-green-100 text-green-800'
    : 'border-red-300 bg-red-100 text-red-800'

  return (
    <div aria-hidden="true" className="grid grid-cols-[1fr_auto] items-center gap-2 text-center text-xs font-semibold">
      <span className="text-left text-slate-600">Mais perto da rede</span>
      <span className={`rounded-md border px-3 py-2 ${statusClassName}`}>Posição {frontPosition}</span>
      <span className="text-left text-slate-600">Mais distante da rede</span>
      <span className={`rounded-md border px-3 py-2 ${statusClassName}`}>Posição {backPosition}</span>
    </div>
  )
}

export function PositionScenarioCard({ scenario }: PositionScenarioCardProps) {
  const isValid = scenario.status === 'valid'
  const statusLabel = isValid ? 'Formação válida' : 'Falta de posição'
  const cardClassName = isValid
    ? 'border-green-200 bg-green-50'
    : 'border-red-200 bg-red-50'
  const badgeClassName = isValid
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800'

  return (
    <article className={`rounded-xl border p-5 ${cardClassName}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{scenario.title}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClassName}`}>
          {statusLabel}
        </span>
      </div>

      <div className="mt-4 rounded-lg border border-white bg-white/70 p-4">
        <ScenarioDiagram scenario={scenario} />
      </div>

      <p className="mt-4 leading-7 text-slate-700">{scenario.explanation}</p>
      <p className="mt-3 font-semibold leading-7 text-slate-800">{scenario.outcome}</p>
    </article>
  )
}
