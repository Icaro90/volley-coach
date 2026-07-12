import { useState } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { PositionScenarioCard } from '../components/PositionScenarioCard'
import { RotationCourt } from '../components/RotationCourt'
import { positionScenarios, positionScenarioSource } from '../data/positionScenarios'
import { initialFormation, type RotationFormation } from '../data/rotation'
import { getServer } from '../utils/getServer'
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
  const server = getServer(formation)
  const formationLabel =
    rotationStep === 0 ? 'Formação inicial' : `Rodízio ${rotationStep} de ${rotationsPerCycle - 1}`
  const statusMessage =
    rotationStep === 0
      ? `Formação inicial: ${server} está na posição 1 e será a próxima pessoa a sacar.`
      : `Rodízio ${rotationStep}: ${server} está na posição 1 e será a próxima pessoa a sacar.`

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

        <section className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5" aria-labelledby="position-tip-title">
          <h2 className="text-lg font-semibold text-slate-900" id="position-tip-title">
            Posição é conferida no saque
          </h2>
          <p className="mt-2 leading-7 text-slate-700">
            No instante do saque, a equipe que recebe deve respeitar as relações entre frente,
            fundo, esquerda e direita. Depois do golpe de saque, todas as pessoas podem se
            movimentar na quadra.
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

        <section className="mt-12" aria-labelledby="position-scenarios-title">
          <h2 className="text-2xl font-bold text-slate-900" id="position-scenarios-title">
            Entenda as faltas de posição
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            A posição não é um ponto fixo da quadra. O que importa é a relação entre as pessoas
            no instante em que o saque é golpeado.
          </p>

          <div className="mt-6 space-y-4">
            {positionScenarios.map((scenario) => (
              <PositionScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5" aria-labelledby="fault-difference-title">
          <h2 className="text-lg font-semibold text-slate-900" id="fault-difference-title">
            Falta de posição ou falta de rodízio?
          </h2>
          <dl className="mt-4 space-y-4 leading-7 text-slate-700">
            <div>
              <dt className="font-semibold text-slate-900">Falta de posição</dt>
              <dd>As relações entre atletas da equipe receptora estão incorretas no saque.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Falta de rodízio</dt>
              <dd>A pessoa errada executa o saque fora da ordem de rodízio.</dd>
            </div>
          </dl>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
          <p>
            Fonte:{' '}
            <a
              className="font-semibold text-orange-700 underline"
              href={positionScenarioSource.url}
              rel="noreferrer"
              target="_blank"
            >
              {positionScenarioSource.title} ({positionScenarioSource.edition})
            </a>
            .
          </p>
          <p className="mt-1">
            Regras consultadas: {positionScenarioSource.relevantRules.join(', ')}. Conteúdo revisado em{' '}
            {formatReviewDate(positionScenarioSource.reviewedAt)}.
          </p>
        </footer>
      </main>
    </div>
  )
}
