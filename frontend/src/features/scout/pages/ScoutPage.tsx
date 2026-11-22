import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { useScout } from '../state/ScoutProvider'
import { createScoutMatch } from '../data/scout'

export function ScoutPage() {
  const { matches, addMatch, removeMatch, isSaved } = useScout()
  const [home, setHome] = useState('')
  const [away, setAway] = useState('')
  const [bestOf, setBestOf] = useState<'3' | '5'>('5')
  const [error, setError] = useState('')
  function submit(event: FormEvent) {
    event.preventDefault()
    if (!home.trim() || !away.trim() || home.trim() === away.trim()) { setError('Informe dois nomes de equipe diferentes.'); return }
    addMatch(createScoutMatch({ id: `match-${Date.now()}`, homeName: home, awayName: away, bestOf: Number(bestOf) as 3 | 5 }))
    setHome(''); setAway(''); setError('')
  }
  return <div className="min-h-screen bg-canvas"><AppHeader /><main className="mx-auto max-w-3xl px-5 py-10 sm:px-8"><BackLink to="/">Voltar para a Home</BackLink><h1 className="mt-6 text-4xl font-bold text-foreground">Scout de partida</h1><p className="mt-3 leading-7 text-muted">Acompanhe pontos, sets e ocorrências. Os dados ficam salvos neste dispositivo.</p>{!isSaved && <p className="mt-3 text-danger" role="status">Não foi possível salvar os jogos localmente.</p>}<form className="mt-7 grid gap-3 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2" onSubmit={submit}><label className="font-semibold text-foreground">Equipe da casa<input className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" maxLength={60} onChange={(e) => setHome(e.target.value)} required value={home} /></label><label className="font-semibold text-foreground">Equipe visitante<input className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" maxLength={60} onChange={(e) => setAway(e.target.value)} required value={away} /></label><label className="font-semibold text-foreground">Formato<select className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" onChange={(e) => setBestOf(e.target.value as '3' | '5')} value={bestOf}><option value="3">Melhor de 3 sets</option><option value="5">Melhor de 5 sets</option></select></label><div className="flex items-end"><button className="min-h-11 rounded-lg bg-accent-strong px-4 font-semibold text-accent-foreground" type="submit">Iniciar partida</button></div>{error && <p className="text-danger sm:col-span-2" role="alert">{error}</p>}</form><section className="mt-10"><h2 className="text-2xl font-bold text-foreground">Partidas</h2>{matches.length === 0 ? <p className="mt-4 rounded-xl border border-border bg-surface p-5 text-muted">Nenhuma partida registrada.</p> : <ul className="mt-4 space-y-3">{matches.map((match) => <li className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4" key={match.id}><Link className="min-h-11 flex-1 text-foreground" to={`/scout/${match.id}`}><strong>{match.homeName} {match.currentScore.home} × {match.currentScore.away} {match.awayName}</strong><span className="block text-sm text-muted">{match.sets.length} sets concluídos · {match.status === 'active' ? 'Em andamento' : 'Encerrada'}</span></Link><button aria-label={`Excluir partida ${match.homeName} x ${match.awayName}`} className="min-h-11 rounded-lg border border-border px-3 text-danger" onClick={() => removeMatch(match.id)} type="button">Excluir</button></li>)}</ul>}</section></main></div>
}
