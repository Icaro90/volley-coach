import { Link, useParams } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { glossaryTerms } from '../data/terms'
import { exercises } from '../../training/data/exercises'
import { rules } from '../../rules/data/rules'
import { ShareButton } from '../../../shared/components/ShareButton'

export function GlossaryTermPage() {
  const { termId } = useParams()
  const item = glossaryTerms.find((term) => term.id === termId)
  if (!item) return <div className="min-h-screen bg-canvas"><AppHeader /><main className="mx-auto max-w-2xl px-5 py-12"><h1 className="text-3xl font-bold text-foreground">Termo não encontrado</h1><Link className="mt-5 inline-block text-accent underline" to="/glossary">Voltar para o glossário</Link></main></div>
  const rule = item.ruleId ? rules.find((candidate) => candidate.id === item.ruleId) : undefined
  const exercise = item.exerciseId ? exercises.find((candidate) => candidate.id === item.exerciseId) : undefined
  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
        <BackLink to="/glossary">Voltar ao glossário</BackLink>
        <p className="mt-6 text-sm font-semibold text-accent">{item.category}</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">{item.term}</h1>
        <div className="mt-4"><ShareButton title={item.term} text={item.definition} path={`/glossary/${item.id}`} /></div>
        {item.synonyms.length > 0 && <p className="mt-2 text-sm text-muted">Também chamado: {item.synonyms.join(', ')}</p>}
        <section className="mt-6 rounded-xl border border-border bg-surface p-5"><h2 className="font-semibold text-foreground">Significado</h2><p className="mt-2 leading-7 text-muted">{item.definition}</p></section>
        <section className="mt-4 rounded-xl border border-border bg-surface p-5"><h2 className="font-semibold text-foreground">Exemplo</h2><p className="mt-2 leading-7 text-muted">{item.example}</p></section>
        <nav aria-label="Conteúdo relacionado" className="mt-6 flex flex-wrap gap-3">{rule && <Link className="min-h-11 rounded-lg border border-border bg-surface px-4 py-3 font-semibold text-foreground" to={`/rules/${rule.id}`}>Ler regra: {rule.title}</Link>}{exercise && <Link className="min-h-11 rounded-lg border border-border bg-surface px-4 py-3 font-semibold text-foreground" to={`/training/${exercise.id}`}>Praticar: {exercise.title}</Link>}</nav>
      </main>
    </div>
  )
}
