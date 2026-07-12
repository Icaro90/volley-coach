import { useParams } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
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
      <div className="min-h-screen bg-canvas">
        <AppHeader />
        <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="text-3xl font-bold text-foreground">Regra não encontrada</h1>
          <p className="mt-3 text-muted">
            Esta regra não está disponível na consulta de regras básicas.
          </p>
          <div className="mt-6">
            <BackLink to="/rules">Voltar para as regras básicas</BackLink>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <BackLink to="/rules">Voltar para as regras básicas</BackLink>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground">{rule.title}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{rule.summary}</p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-accent/30 bg-accent-subtle p-3 sm:p-5">
          <img alt={rule.diagram.alt} className="h-auto w-full" src={rule.diagram.src} />
        </figure>

        <section className="mt-10" aria-labelledby="explanation-title">
          <h2 className="text-2xl font-bold text-foreground" id="explanation-title">
            Entenda a regra
          </h2>
          <p className="mt-3 leading-7 text-muted">{rule.explanation}</p>
        </section>

        <section className="mt-8 rounded-xl border border-border bg-surface p-5" aria-labelledby="example-title">
          <h2 className="text-lg font-semibold text-foreground" id="example-title">
            Exemplo em quadra
          </h2>
          <p className="mt-2 leading-7 text-muted">{rule.example}</p>
        </section>

        <section className="mt-4 rounded-xl border border-accent/30 bg-accent-subtle p-5" aria-labelledby="outcome-title">
          <h2 className="text-lg font-semibold text-foreground" id="outcome-title">
            O que acontece?
          </h2>
          <p className="mt-2 leading-7 text-muted">{rule.outcome}</p>
        </section>

        <footer className="mt-10 border-t border-border pt-6 text-sm leading-6 text-muted">
          <p>
            Fonte: <a className="font-semibold text-accent underline hover:text-accent-strong" href={rule.source.url} rel="noreferrer" target="_blank">{rule.source.title} ({rule.source.edition})</a>.
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
