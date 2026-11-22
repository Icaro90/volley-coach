import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { glossaryCategories, searchGlossary, type GlossaryCategory } from '../data/terms'

export function GlossaryPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<GlossaryCategory | 'all'>('all')
  const results = useMemo(() => searchGlossary(query, category), [query, category])
  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold text-foreground">Glossário de vôlei</h1>
        <p className="mt-3 leading-7 text-muted">Termos curtos para acompanhar regras, fundamentos e treinos.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_15rem]">
          <label className="font-semibold text-foreground">Buscar termo ou sinônimo<input className="mt-1 min-h-12 w-full rounded-lg border border-border bg-surface px-4 font-normal" onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: manchete, ace, rotação" type="search" value={query} /></label>
          <label className="font-semibold text-foreground">Categoria<select className="mt-1 min-h-12 w-full rounded-lg border border-border bg-surface px-3 font-normal" onChange={(event) => setCategory(event.target.value as GlossaryCategory | 'all')} value={category}><option value="all">Todas</option>{glossaryCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <p aria-live="polite" className="mt-4 text-sm text-muted">{results.length} termos</p>
        {results.length ? <ul className="mt-3 grid gap-3 sm:grid-cols-2">{results.map((item) => <li className="h-full" key={item.id}><Link className="block h-full rounded-xl border border-border bg-surface p-5 transition hover:border-accent hover:bg-surface-raised" to={`/glossary/${item.id}`}><p className="text-xs font-semibold text-accent">{item.category}</p><h2 className="mt-1 text-lg font-semibold text-foreground">{item.term}</h2><p className="mt-2 text-sm leading-6 text-muted">{item.definition}</p></Link></li>)}</ul> : <p className="mt-4 rounded-xl border border-border bg-surface p-5 text-muted">Nenhum termo encontrado. Tente buscar por outra palavra.</p>}
      </main>
    </div>
  )
}
