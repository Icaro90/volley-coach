import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { RuleListItem } from '../components/RuleListItem'
import { rules } from '../data/rules'

export function RulesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          Regras básicas
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Escolha um tema para entender o que acontece em quadra.
        </p>

        <ul className="mt-10 space-y-4">
          {rules.map((rule) => (
            <RuleListItem key={rule.id} rule={rule} />
          ))}
        </ul>
      </main>
    </div>
  )
}
