import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { rules } from '../../rules/data/rules'
import { quickReferenceItems, searchQuickReference } from '../data/quickReference'

export function QuickReferencePage() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchQuickReference(query), [query])
  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold text-foreground">Consulta rápida</h1>
        <p className="mt-3 leading-7 text-muted">Respostas curtas para conferir situações comuns na quadra. Abra a regra completa para ver detalhes e exemplos.</p>
        <label className="mt-6 block font-semibold text-foreground">Buscar uma situação<input className="mt-2 min-h-12 w-full rounded-lg border border-border bg-surface px-4 font-normal" onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: linha, bloqueio, saque" type="search" value={query} /></label>
        {results.length ? <ul className="mt-6 space-y-3">{results.map((item) => { const rule = rules.find((candidate) => candidate.id === item.ruleId); return <li className="rounded-xl border border-border bg-surface p-5" key={item.ruleId}><h2 className="text-lg font-semibold text-foreground">{item.question}</h2><p className="mt-2 leading-7 text-muted">{item.answer}</p>{rule && <Link className="mt-3 inline-block min-h-11 rounded-lg text-sm font-semibold text-accent underline" to={`/rules/${rule.id}`}>Ver {rule.title.toLocaleLowerCase('pt-BR')} completa →</Link>}</li> })}</ul> : <p className="mt-6 rounded-xl border border-border bg-surface p-5 text-muted">Nenhuma situação encontrada. Tente outro termo.</p>}
        <Link className="mt-7 inline-block text-sm font-semibold text-accent underline" to="/favorites">Abrir favoritos</Link>
        <p className="mt-3 text-xs text-muted">{quickReferenceItems.length} situações · Conteúdo didático baseado nas regras FIVB; consulte a regra completa em caso de dúvida.</p>
      </main>
    </div>
  )
}
