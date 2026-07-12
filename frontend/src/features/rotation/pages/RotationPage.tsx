import { useState } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { RotationCourt } from '../components/RotationCourt'
import { initialFormation, rotationSource, type RotationFormation } from '../data/rotation'
import { rotateFormation } from '../utils/rotateFormation'

const rotationsPerCycle = 6

function getFormationAt(rotationStep: number): RotationFormation {
  let formation = initialFormation

  for (let step = 0; step < rotationStep; step += 1) {
    formation = rotateFormation(formation)
  }

  return formation
}

function formatReviewDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`),
  )
}

export function RotationPage() {
  const [rotationStep, setRotationStep] = useState(0)
  const formation = getFormationAt(rotationStep)
  const formationLabel =
    rotationStep === 0 ? 'Formação inicial' : `Rodízio ${rotationStep} de ${rotationsPerCycle - 1}`
  const statusMessage =
    rotationStep === 0
      ? 'Formação inicial: Jogador A está na posição 1 e será o próximo a sacar.'
      : `Rodízio ${rotationStep}: cada jogador avançou uma posição no sentido horário.`

  function handleAdvanceRotation() {
    setRotationStep((currentStep) => (currentStep + 1) % rotationsPerCycle)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <Link className="text-sm font-semibold text-orange-700 underline" to="/">
          Voltar para a Home
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-wide text-orange-700 uppercase">
          Posições em quadra
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Entenda o rodízio</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Quando a equipe que estava recebendo vence o rally, ela ganha o direito de sacar. Antes
          do saque seguinte, cada pessoa avança uma posição no sentido horário.
        </p>

        <section className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-5" aria-labelledby="rotation-tip-title">
          <h2 className="text-lg font-semibold text-slate-900" id="rotation-tip-title">
            Dica importante
          </h2>
          <p className="mt-2 leading-7 text-slate-700">
            Rodízio não acontece a cada ponto. Ele acontece quando sua equipe recupera o direito de
            sacar.
          </p>
        </section>

        <div className="mt-8">
          <RotationCourt formation={formation} formationLabel={formationLabel} />
        </div>

        <p aria-live="polite" className="mt-4 text-sm leading-6 text-slate-700">
          {statusMessage}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700"
            onClick={handleAdvanceRotation}
            type="button"
          >
            Avançar rodízio
          </button>
          <button
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={rotationStep === 0}
            onClick={() => setRotationStep(0)}
            type="button"
          >
            Reiniciar
          </button>
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
          <p>
            Fonte:{' '}
            <a
              className="font-semibold text-orange-700 underline"
              href={rotationSource.url}
              rel="noreferrer"
              target="_blank"
            >
              {rotationSource.title} ({rotationSource.edition})
            </a>
            .
          </p>
          <p className="mt-1">
            Regras consultadas: {rotationSource.relevantRules.join(', ')}. Conteúdo revisado em{' '}
            {formatReviewDate(rotationSource.reviewedAt)}.
          </p>
        </footer>
      </main>
    </div>
  )
}
