import { Link, useParams } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { rules } from '../data/rules'

function formatReviewDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`),
  )
}

export function RuleDetailPage() {
  const { ruleId } = useParams()
  const rule = rules.find((item) => item.id === ruleId)

  if (!rule) {
    return (
      <div className="min-h-screen bg-slate-50">
        <AppHeader />
        <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="text-3xl font-bold text-slate-900">Regra não encontrada</h1>
          <p className="mt-3 text-slate-600">
            Esta regra não está disponível na consulta de regras básicas.
          </p>
          <Link className="mt-6 inline-block font-semibold text-orange-700 underline" to="/rules">
            Voltar para as regras básicas
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <Link className="text-sm font-semibold text-orange-700 underline" to="/rules">
          Voltar para as regras básicas
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">{rule.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{rule.summary}</p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-orange-100 bg-orange-50 p-3 sm:p-5">
          <img alt={rule.diagram.alt} className="h-auto w-full" src={rule.diagram.src} />
        </figure>

        <section className="mt-10" aria-labelledby="explanation-title">
          <h2 className="text-2xl font-bold text-slate-900" id="explanation-title">
            Entenda a regra
          </h2>
          <p className="mt-3 leading-7 text-slate-700">{rule.explanation}</p>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5" aria-labelledby="example-title">
          <h2 className="text-lg font-semibold text-slate-900" id="example-title">
            Exemplo em quadra
          </h2>
          <p className="mt-2 leading-7 text-slate-700">{rule.example}</p>
        </section>

        <section className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-5" aria-labelledby="outcome-title">
          <h2 className="text-lg font-semibold text-slate-900" id="outcome-title">
            O que acontece?
          </h2>
          <p className="mt-2 leading-7 text-slate-700">{rule.outcome}</p>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
          <p>
            Fonte: <a className="font-semibold text-orange-700 underline" href={rule.source.url} rel="noreferrer" target="_blank">{rule.source.title} ({rule.source.edition})</a>.
          </p>
          <p className="mt-1">
            Regras consultadas: {rule.source.relevantRules.join(', ')}. Conteúdo revisado em{' '}
            {formatReviewDate(rule.source.reviewedAt)}.
          </p>
        </footer>
      </main>
    </div>
  )
}
