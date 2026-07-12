import { Link, useSearchParams } from 'react-router'
import { RuleListItem } from '../../rules/components/RuleListItem'
import { rules } from '../../rules/data/rules'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { searchRules } from '../utils/searchRules'

export function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')?.trim() ?? ''
  const results = searchRules(rules, query)

  if (!query) {
    return (
      <div className="min-h-screen bg-canvas">
        <AppHeader />
        <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="text-3xl font-bold text-foreground">Digite uma dúvida para pesquisar</h1>
          <p className="mt-3 text-muted">
            Use o campo da Home para encontrar uma regra básica de vôlei.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <BackLink to="/">Voltar para a Home</BackLink>
            <Link className="font-semibold text-accent underline hover:text-accent-strong" to="/rules">
              Ver todas as regras
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas">
      <AppHeader />
      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground">
          Resultados da busca
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          {results.length} {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'} para{' '}
          <span className="font-semibold text-foreground">“{query}”</span>.
        </p>

        {results.length > 0 ? (
          <ul className="mt-10 space-y-4">
            {results.map((rule) => (
              <RuleListItem key={rule.id} rule={rule} />
            ))}
          </ul>
        ) : (
          <section className="mt-10 rounded-xl border border-border bg-surface p-6" aria-labelledby="empty-results-title">
            <h2 className="text-xl font-semibold text-foreground" id="empty-results-title">
              Nenhuma regra encontrada
            </h2>
            <p className="mt-2 leading-7 text-muted">
              Tente outro termo ou consulte todas as regras básicas disponíveis.
            </p>
            <Link className="mt-5 inline-block font-semibold text-accent underline hover:text-accent-strong" to="/rules">
              Ver todas as regras
            </Link>
          </section>
        )}
      </main>
    </div>
  )
}
