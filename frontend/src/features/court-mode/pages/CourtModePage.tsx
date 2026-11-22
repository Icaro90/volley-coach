import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'

const links = [['/training','Treinos'],['/team#presenca','Chamada'],['/team#formacoes','Formações'],['/scoreboard','Placar'],['/scout','Scout']]

export function CourtModePage() {
  const [active, setActive] = useState(false); const [running, setRunning] = useState(false); const [seconds, setSeconds] = useState(0); const [wakeActive, setWakeActive] = useState(false)
  useEffect(() => { if (!running) return; const timer = window.setInterval(() => setSeconds((s) => s + 1), 1000); return () => window.clearInterval(timer) }, [running])
  useEffect(() => {
    if (!active || !wakeActive) return
    const wakeLockApi = (navigator as Navigator & { wakeLock?: { request: (type: 'screen') => Promise<{ release: () => Promise<void> }> } }).wakeLock
    if (!wakeLockApi) return
    let lock: { release: () => Promise<void> } | undefined
    void wakeLockApi.request('screen').then((value) => { lock = value }).catch(() => setWakeActive(false))
    return () => { if (lock) void lock.release() }
  }, [active, wakeActive])
  const clock = `${Math.floor(seconds / 60).toString().padStart(2,'0')}:${(seconds % 60).toString().padStart(2,'0')}`
  function exit() { setActive(false); setRunning(false); setWakeActive(false) }
  return <div className={`min-h-screen ${active ? 'bg-black text-white' : 'bg-canvas'}`}><AppHeader /><main className="mx-auto max-w-4xl px-5 py-7 sm:px-8"><BackLink to="/more">Voltar para Mais</BackLink><h1 className={`mt-5 text-3xl font-bold ${active ? 'text-white' : 'text-foreground'}`}>Modo de quadra</h1><p className={active ? 'mt-2 text-slate-200' : 'mt-2 text-muted'}>Atalhos grandes e cronômetro para consultar o app durante a atividade.</p>{!active ? <button className="mt-6 min-h-16 w-full rounded-xl bg-accent-strong text-xl font-bold text-accent-foreground" onClick={() => setActive(true)} type="button">Ativar modo de quadra</button> : <><section aria-label="Cronômetro do treino" className="mt-6 rounded-2xl border border-white bg-slate-900 p-6 text-center"><p aria-live="off" className="text-7xl font-bold tabular-nums sm:text-9xl">{clock}</p><div className="mt-5 flex justify-center gap-3"><button aria-pressed={running} className="min-h-14 min-w-32 rounded-xl bg-white px-5 text-lg font-bold text-black" onClick={() => setRunning((v) => !v)} type="button">{running ? 'Pausar' : 'Iniciar'}</button><button className="min-h-14 min-w-32 rounded-xl border border-white px-5 text-lg font-bold text-white" onClick={() => { setRunning(false); setSeconds(0) }} type="button">Zerar</button></div><p aria-live="polite" className="sr-only">Cronômetro {clock}, {running ? 'em andamento' : 'pausado'}.</p></section><label className="mt-5 flex min-h-14 items-center gap-3 rounded-xl border border-white bg-slate-900 px-4 text-lg"><input checked={wakeActive} onChange={(e) => setWakeActive(e.target.checked)} type="checkbox" /> Manter tela ativa (opcional)</label><nav aria-label="Atalhos de quadra" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{links.map(([path,label]) => <Link className="flex min-h-20 items-center justify-center rounded-xl border-2 border-white bg-slate-900 p-3 text-center text-lg font-bold text-white" key={path} to={path}>{label}</Link>)}</nav><button className="mt-6 min-h-16 w-full rounded-xl bg-red-700 text-xl font-bold text-white" onClick={exit} type="button">Sair do modo de quadra</button></>}</main></div>
}
