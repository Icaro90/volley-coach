import { courtPositions, type RotationFormation } from '../data/rotation'

type RotationCourtProps = {
  formation: RotationFormation
}

export function RotationCourt({ formation }: RotationCourtProps) {
  return (
    <section aria-labelledby="rotation-court-title" aria-describedby="rotation-court-description">
      <div className="rounded-2xl border border-slate-300 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900" id="rotation-court-title">
              Seu lado da quadra
            </h2>
            <p className="mt-1 text-sm text-slate-600" id="rotation-court-description">
              Você está olhando para a rede. A frente fica mais perto dela.
            </p>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
            Formação exibida
          </span>
        </div>

        <div className="mt-5 border-t-4 border-slate-700 pt-2">
          <p className="text-center text-xs font-semibold tracking-wide text-slate-600 uppercase">
            Rede
          </p>
        </div>

        <ol className="mt-3 grid grid-cols-3 gap-2 rounded-xl border-2 border-orange-300 bg-orange-50 p-2 sm:gap-3 sm:p-3">
          {courtPositions.map((position) => (
            <li
              className="min-h-28 rounded-lg border border-orange-200 bg-white p-3 text-center shadow-sm"
              key={position.id}
            >
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Posição {position.id}
              </p>
              <p className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                {formation[position.id]}
              </p>
              <p className="mt-1 text-xs text-slate-600">{position.name}</p>
            </li>
          ))}
        </ol>

        <p className="mt-3 text-center text-xs text-slate-600">
          Frente: posições 4, 3 e 2 · Fundo: posições 5, 6 e 1
        </p>
      </div>
    </section>
  )
}
