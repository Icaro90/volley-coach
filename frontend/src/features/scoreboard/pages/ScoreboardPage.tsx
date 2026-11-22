import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { useLocalJsonState } from '../../../shared/storage/localJsonStorage'
import { createScoutMatch } from '../../scout/data/scout'
import { useScout } from '../../scout/state/ScoutProvider'
import { createScoreMatch, finishSetManually, isMatchResultList, isScoreMatch, matchHistoryKey, resultFromMatch, scoreboardKey, scorePoint, undoScore, swapCourtSides, resetCurrentSet, type ScoreFormat, type ScoreMatch, type Side } from '../data/scoreboard'

const field = 'mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 text-foreground'
const button = 'min-h-12 rounded-lg bg-accent-strong px-4 font-bold text-accent-foreground disabled:opacity-50'
const secondary = 'min-h-11 rounded-lg border border-border px-3 font-semibold text-foreground disabled:opacity-50'
const sideName = (side: Side, home: string, away: string) => side === 'home' ? home : away
type ScoutChoice = 'none' | 'create' | 'existing'

export function ScoreboardPage() {
  const [match, setMatch, matchIsSaved] = useLocalJsonState<ScoreMatch | null>(scoreboardKey, null, (v): v is ScoreMatch | null => v === null || isScoreMatch(v))
  const [history, setHistory, historyIsSaved] = useLocalJsonState(matchHistoryKey, [], isMatchResultList)
  const { addMatch, matches: scoutMatches, linkScoreboard, isSaved: scoutIsSaved } = useScout()
  const [homeName, setHomeName] = useState('Nossa equipe')
  const [awayName, setAwayName] = useState('Adversário')
  const [bestOf, setBestOf] = useState<'3' | '5'>('5')
  const [regularTarget, setRegularTarget] = useState('25')
  const [decidingTarget, setDecidingTarget] = useState('15')
  const [serving, setServing] = useState<Side>('home')
  const [saveHistory, setSaveHistory] = useState(false)
  const [scoutChoice, setScoutChoice] = useState<ScoutChoice>('none')
  const [selectedScout, setSelectedScout] = useState('')
  const [keepAwake, setKeepAwake] = useState(false)
  const [wakeError, setWakeError] = useState('')

  useEffect(() => {
    if (!keepAwake) return
    const api = (navigator as Navigator & { wakeLock?: { request: (type: 'screen') => Promise<{ release: () => Promise<void> }> } }).wakeLock
    if (!api) { setWakeError('Este dispositivo não oferece manter a tela ativa pelo navegador.'); return }
    let lock: { release: () => Promise<void> } | undefined
    void api.request('screen').then((value) => { lock = value }).catch(() => setWakeError('Não foi possível manter a tela ativa.'))
    return () => { if (lock) void lock.release() }
  }, [keepAwake])

  function startMatch(event: FormEvent) {
    event.preventDefault()
    if (!homeName.trim() || !awayName.trim() || homeName.trim().toLowerCase() === awayName.trim().toLowerCase()) return
    const format: ScoreFormat = { bestOf: Number(bestOf) as 3 | 5, regularTarget: Math.max(1, Number(regularTarget)), decidingTarget: Math.max(1, Number(decidingTarget)), winBy: 2, label: `Melhor de ${bestOf} · alvos ${regularTarget}/${decidingTarget}` }
    let next = createScoreMatch(homeName, awayName, format, serving, saveHistory)
    if (scoutChoice === 'create') {
      const scoutId = `scout-${next.id}`
      next = { ...next, scoutId }
      addMatch(createScoutMatch({ id: scoutId, homeName: next.homeName, awayName: next.awayName, bestOf: format.bestOf, regularSetTarget: format.regularTarget, decidingSetTarget: format.decidingTarget, scoreboardId: next.id }))
    } else if (scoutChoice === 'existing' && selectedScout) {
      next = { ...next, scoutId: selectedScout }
      linkScoreboard(selectedScout, next.id)
    }
    setMatch(next)
  }

  function chooseScout(value: ScoutChoice) {
    setScoutChoice(value)
    if (value !== 'existing') return
    const existing = scoutMatches.find((item) => item.id === selectedScout)
    if (!existing) return
    setHomeName(existing.homeName); setAwayName(existing.awayName); setBestOf(String(existing.bestOf) as '3' | '5'); setRegularTarget(String(existing.regularSetTarget)); setDecidingTarget(String(existing.decidingSetTarget))
  }

  function saveFinished(next: ScoreMatch) {
    if (next.status !== 'completed' || !next.saveHistory) return
    const result = resultFromMatch(next)
    if (result) setHistory((items) => [result, ...items.filter((item) => item.id !== result.id)])
  }
  function addPoint(side: Side) {
    if (!match) return
    const next = scorePoint(match, side)
    setMatch(next)
    saveFinished(next)
  }
  function undo() {
    if (!match) return
    const next = undoScore(match)
    setMatch(next)
    if (match.status === 'completed' && next.status === 'active') setHistory((items) => items.filter((item) => item.id !== match.id))
  }
  function endSet() {
    if (!match || match.score.home === match.score.away) return
    if (!window.confirm('Encerrar este set agora com o placar atual?')) return
    const next = finishSetManually(match)
    setMatch(next)
    saveFinished(next)
  }
  function clearSet() {
    if (match && window.confirm('Zerar apenas a pontuação do set atual? Os sets anteriores serão preservados.')) setMatch(resetCurrentSet(match))
  }
  function newMatch() {
    if (window.confirm('Apagar o placar atual? Os resultados já salvos e o scout não serão apagados.')) setMatch(null)
  }
  function unlinkScout() {
    if (!match?.scoutId || !window.confirm('Desvincular o scout? O registro de scout será mantido.')) return
    linkScoreboard(match.scoutId, '')
    setMatch({ ...match, scoutId: undefined })
  }

  return (
    <div className="min-h-screen bg-canvas"><AppHeader /><main className="mx-auto max-w-4xl px-4 py-6 sm:px-8">
      <BackLink to="/more">Voltar para Mais</BackLink><h1 className="mt-5 text-3xl font-bold text-foreground">Placar de partida</h1><p className="mt-2 text-muted">Pontuação grande e simples para treinos e jogos. Funciona sem histórico ou scout.</p>
      {!match ? <form className="mt-6 grid gap-4 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2" onSubmit={startMatch}>
        <label className="font-semibold text-foreground">Nossa equipe<input className={field} maxLength={60} onChange={(e) => setHomeName(e.target.value)} required value={homeName} /></label>
        <label className="font-semibold text-foreground">Adversário<input className={field} maxLength={60} onChange={(e) => setAwayName(e.target.value)} required value={awayName} /></label>
        <label className="font-semibold text-foreground">Formato<select className={field} onChange={(e) => setBestOf(e.target.value as '3' | '5')} value={bestOf}><option value="5">Quadra — melhor de 5</option><option value="3">Melhor de 3</option></select></label>
        <div className="grid grid-cols-2 gap-3"><label className="font-semibold text-foreground">Sets regulares<input className={field} min="1" max="99" onChange={(e) => setRegularTarget(e.target.value)} type="number" value={regularTarget} /></label><label className="font-semibold text-foreground">Decisivo<input className={field} min="1" max="99" onChange={(e) => setDecidingTarget(e.target.value)} type="number" value={decidingTarget} /></label></div>
        <label className="font-semibold text-foreground">Primeiro saque<select className={field} onChange={(e) => setServing(e.target.value as Side)} value={serving}><option value="home">Nossa equipe</option><option value="away">Adversário</option></select></label>
        <fieldset className="grid gap-2"><legend className="font-semibold text-foreground">Integrações opcionais</legend><label className="text-sm text-foreground"><input checked={saveHistory} onChange={(e) => setSaveHistory(e.target.checked)} type="checkbox" /> Salvar resultado no histórico</label><label className="text-sm font-semibold text-foreground">Scout<select className={field} onChange={(e) => chooseScout(e.target.value as ScoutChoice)} value={scoutChoice}><option value="none">Sem scout</option><option value="create">Criar scout novo</option><option disabled={!scoutMatches.length} value="existing">Associar scout existente</option></select></label>{scoutChoice === 'existing' && <label className="text-sm font-semibold text-foreground">Partida de scout<select className={field} onChange={(e) => { setSelectedScout(e.target.value); const existing = scoutMatches.find((item) => item.id === e.target.value); if (existing) { setHomeName(existing.homeName); setAwayName(existing.awayName); setBestOf(String(existing.bestOf) as '3'|'5'); setRegularTarget(String(existing.regularSetTarget)); setDecidingTarget(String(existing.decidingSetTarget)) } }} required value={selectedScout}><option value="">Selecione</option>{scoutMatches.map((item) => <option key={item.id} value={item.id}>{item.homeName} × {item.awayName}</option>)}</select></label>}</fieldset>
        <button className={`${button} sm:col-span-2`} type="submit">Iniciar placar</button><p className="text-xs text-muted sm:col-span-2">Preset FIVB: sets regulares a 25 e decisivo a 15, sempre por dois pontos. Ajuste os alvos para jogos de treino.</p>
        {history.length > 0 && <section className="sm:col-span-2"><h2 className="font-semibold text-foreground">Histórico salvo</h2><ul className="mt-2 space-y-2">{history.map((item) => <li className="rounded-lg border border-border p-3 text-foreground" key={item.id}>{item.homeName} {item.sets.map((s) => `${s.home}-${s.away}`).join(', ')} {item.awayName} · vencedor: {sideName(item.winner, item.homeName, item.awayName)}{item.scoutId && <Link className="ml-2 underline" to={`/scout/${item.scoutId}`}>Abrir scout</Link>} {item.snapshot && <button className="ml-2 underline" onClick={() => setMatch(item.snapshot ?? null)} type="button">Reabrir placar</button>}</li>)}</ul></section>}
      </form> : <>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted">{match.format.label} · Set {match.sets.length + (match.status === 'active' ? 1 : 0)} · saque: {sideName(match.serving, match.homeName, match.awayName)} · {match.status === 'active' ? 'Em andamento' : 'Encerrada'}</p><label className="text-sm text-foreground"><input checked={keepAwake} onChange={(e) => setKeepAwake(e.target.checked)} type="checkbox" /> Manter tela ativa</label></div>
        {wakeError && <p className="mt-2 text-sm text-muted" role="status">{wakeError}</p>}
        <section aria-label="Placar da partida" className="mt-4 rounded-2xl border border-border bg-surface p-4 sm:p-8"><div className="mb-4 flex justify-between text-sm text-muted"><span>Sets: {match.sets.filter((s) => s.home > s.away).length}</span><span>Set atual · saque: {sideName(match.serving, match.homeName, match.awayName)}</span><span>Sets: {match.sets.filter((s) => s.away > s.home).length}</span></div><div className="grid grid-cols-2 gap-3">{(match.homeOnLeft ? ['home', 'away'] : ['away', 'home'] as Side[]).map((side) => <button aria-label={`Adicionar ponto para ${sideName(side as Side, match.homeName, match.awayName)}`} className="min-h-56 rounded-2xl border-2 border-border bg-canvas p-4 text-center text-foreground hover:border-accent-strong sm:min-h-72" disabled={match.status === 'completed'} key={side} onClick={() => addPoint(side as Side)} type="button"><span className="block text-lg font-semibold sm:text-2xl">{sideName(side as Side, match.homeName, match.awayName)}</span><span className="my-3 block text-7xl font-bold tabular-nums sm:text-9xl">{match.score[side as Side]}</span>{match.serving === side && <span className="rounded-full bg-accent-subtle px-3 py-1 text-sm font-bold text-accent-strong">🏐 Saque</span>}</button>)}</div>
          <div className="mt-5 flex flex-wrap justify-center gap-3"><button className={secondary} disabled={!match.undoStack.length} onClick={undo} type="button">Desfazer ponto</button><button className={secondary} onClick={() => setMatch(swapCourtSides(match))} type="button">Trocar lados</button><button className={secondary} disabled={match.status === 'completed' || match.score.home === match.score.away} onClick={endSet} type="button">Encerrar set</button><button className={secondary} disabled={match.status === 'completed'} onClick={clearSet} type="button">Resetar set</button><button className="min-h-11 rounded-lg border border-danger px-3 text-danger" onClick={newMatch} type="button">Nova partida</button></div>
        </section>
        {match.sets.length > 0 && <section className="mt-5 rounded-xl border border-border bg-surface p-4"><h2 className="font-bold text-foreground">Sets</h2><div className="mt-2 flex flex-wrap gap-2">{match.sets.map((set) => <span className="rounded-lg bg-canvas px-3 py-2 text-foreground" key={set.number}>Set {set.number}: {match.homeName} {set.home} × {set.away} {match.awayName}</span>)}</div></section>}
        {match.scoutId && <p className="mt-4 rounded-lg border border-border bg-surface p-3 text-foreground">Scout associado: <Link className="underline" to={`/scout/${match.scoutId}`}>abrir scout</Link> · <button className="text-danger underline" onClick={unlinkScout} type="button">Desvincular</button></p>}
        {match.status === 'completed' && <p className="mt-4 rounded-lg bg-success-subtle p-4 font-bold text-success">Partida encerrada. {match.saveHistory ? 'Resultado salvo no histórico.' : 'Não foi salvo no histórico.'} {match.scoutId && <>Scout vinculado: <Link className="underline" to={`/scout/${match.scoutId}`}>abrir scout</Link>.</>}</p>}
        {!matchIsSaved && <p role="status" className="mt-2 text-danger">Não foi possível salvar o placar neste dispositivo.</p>}
        {!historyIsSaved && <p role="status" className="mt-2 text-danger">Não foi possível salvar o histórico neste dispositivo.</p>}
        {!scoutIsSaved && match.scoutId && <p role="status" className="mt-2 text-danger">O scout não foi salvo localmente; o placar continua disponível.</p>}
      </>}
    </main></div>
  )
}
