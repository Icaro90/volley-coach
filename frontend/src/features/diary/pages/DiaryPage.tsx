import { useState, type FormEvent } from 'react'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { useLocalJsonState } from '../../../shared/storage/localJsonStorage'
import { exercises, fundamentals, type Fundamental } from '../../training/data/exercises'
import { diaryStorageKey, isDiaryEntryList, type DiaryEntry } from '../data/entries'

type DiaryForm = { date: string; duration: string; fundamentals: Fundamental[]; exerciseIds: string[]; effort: string; note: string }

function localDateValue() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function blankForm(): DiaryForm {
  return { date: localDateValue(), duration: '', fundamentals: [], exerciseIds: [], effort: '', note: '' }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(`${date}T12:00:00`))
}

export function DiaryPage() {
  const [entries, setEntries, isSaved] = useLocalJsonState(diaryStorageKey, [], isDiaryEntryList)
  const [form, setForm] = useState<DiaryForm>(blankForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [error, setError] = useState('')

  function update<K extends keyof DiaryForm>(key: K, value: DiaryForm[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function toggleValue<T>(list: T[], value: T) {
    return list.includes(value) ? list.filter((item) => item !== value) : [...list, value]
  }

  function saveEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const durationMinutes = Number(form.duration)
    const dateIsValid = /^\d{4}-\d{2}-\d{2}$/.test(form.date) && !Number.isNaN(new Date(`${form.date}T12:00:00`).getTime())
    if (!dateIsValid || !Number.isInteger(durationMinutes) || durationMinutes < 1 || durationMinutes > 600) {
      setError('Informe uma data válida e duração entre 1 e 600 minutos.')
      return
    }
    const effort = form.effort ? Number(form.effort) : null
    if (effort !== null && (!Number.isInteger(effort) || effort < 1 || effort > 5)) {
      setError('O esforço percebido deve ficar entre 1 e 5.')
      return
    }
    const entry: DiaryEntry = { id: editingId ?? `session-${Date.now()}`, date: form.date, durationMinutes, fundamentals: form.fundamentals, exerciseIds: form.exerciseIds, effort, note: form.note.trim() }
    setEntries((current) => [...current.filter((item) => item.id !== entry.id), entry].sort((a, b) => b.date.localeCompare(a.date)))
    setForm(blankForm())
    setEditingId(null)
    setError('')
  }

  function editEntry(entry: DiaryEntry) {
    setEditingId(entry.id)
    setForm({ date: entry.date, duration: String(entry.durationMinutes), fundamentals: entry.fundamentals, exerciseIds: entry.exerciseIds, effort: entry.effort === null ? '' : String(entry.effort), note: entry.note })
    setError('')
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(blankForm())
    setError('')
  }

  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold text-foreground">Diário de treino</h1>
        <p className="mt-3 leading-7 text-muted">Registre sessões, fundamentos praticados e observações para você consultar depois.</p>
        <p className="mt-4 rounded-lg border border-info-border bg-info-subtle p-3 text-sm leading-6 text-muted">Seus registros ficam somente neste dispositivo. Limpar os dados do app pode apagá-los.</p>
        {!isSaved && <p className="mt-3 rounded-lg border border-danger-border bg-danger-subtle p-3 text-sm text-muted" role="status">Não foi possível salvar neste dispositivo. Seus registros podem não persistir.</p>}

        <form className="mt-7 space-y-5 rounded-xl border border-border bg-surface p-5" onSubmit={saveEntry}>
          <h2 className="text-xl font-semibold text-foreground">{editingId ? 'Editar sessão' : 'Nova sessão'}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="font-semibold text-foreground">Data<input className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" onChange={(event) => update('date', event.target.value)} required type="date" value={form.date} /></label>
            <label className="font-semibold text-foreground">Duração (minutos)<input className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal" min="1" max="600" onChange={(event) => update('duration', event.target.value)} required type="number" value={form.duration} /></label>
          </div>
          <fieldset><legend className="font-semibold text-foreground">Fundamentos praticados</legend><div className="mt-2 flex flex-wrap gap-2">{fundamentals.map((fundamental) => <label className="flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-foreground" key={fundamental}><input checked={form.fundamentals.includes(fundamental)} onChange={() => update('fundamentals', toggleValue(form.fundamentals, fundamental))} type="checkbox" />{fundamental}</label>)}</div></fieldset>
          <fieldset><legend className="font-semibold text-foreground">Exercícios realizados (opcional)</legend><div className="mt-2 grid gap-2 sm:grid-cols-2">{exercises.map((exercise) => <label className="flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-foreground" key={exercise.id}><input checked={form.exerciseIds.includes(exercise.id)} onChange={() => update('exerciseIds', toggleValue(form.exerciseIds, exercise.id))} type="checkbox" />{exercise.title}</label>)}</div></fieldset>
          <label className="block font-semibold text-foreground">Esforço percebido (opcional)
            <select className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3 font-normal sm:max-w-sm" onChange={(event) => update('effort', event.target.value)} value={form.effort}><option value="">Não informar</option><option value="1">1 — Leve</option><option value="2">2</option><option value="3">3 — Moderado</option><option value="4">4</option><option value="5">5 — Intenso</option></select>
          </label>
          <label className="block font-semibold text-foreground">Observações (opcional)<textarea className="mt-1 min-h-24 w-full rounded-lg border border-border bg-canvas p-3 font-normal" maxLength={1000} onChange={(event) => update('note', event.target.value)} value={form.note} /></label>
          {error && <p className="text-sm text-danger" role="alert">{error}</p>}
          <div className="flex flex-wrap gap-3"><button className="min-h-12 rounded-lg bg-accent-strong px-4 py-3 font-semibold text-accent-foreground" type="submit">{editingId ? 'Salvar alterações' : 'Salvar sessão'}</button>{editingId && <button className="min-h-12 rounded-lg border border-border px-4 py-3 font-semibold text-foreground" onClick={cancelEdit} type="button">Cancelar edição</button>}</div>
        </form>

        <section className="mt-10" aria-labelledby="history-title"><h2 className="text-2xl font-bold text-foreground" id="history-title">Histórico</h2>
          {entries.length === 0 ? <p className="mt-4 rounded-xl border border-border bg-surface p-5 text-muted">Ainda não há sessões registradas. Salve a primeira acima.</p> : <ul className="mt-4 space-y-3">{entries.map((entry) => <li className="rounded-xl border border-border bg-surface p-5" key={entry.id}>
            <div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold text-foreground">{formatDate(entry.date)} · {entry.durationMinutes} min</h3><p className="mt-1 text-sm text-muted">{entry.fundamentals.length ? entry.fundamentals.join(', ') : 'Fundamentos não informados'}</p></div><div className="flex gap-2"><button className="min-h-11 rounded-lg border border-border px-3 font-semibold text-foreground" onClick={() => editEntry(entry)} type="button">Editar</button><button className="min-h-11 rounded-lg border border-danger-border px-3 font-semibold text-danger" onClick={() => setDeleteId(entry.id)} type="button">Excluir</button></div></div>
            {entry.exerciseIds.length > 0 && <p className="mt-2 text-sm text-muted">Exercícios: {entry.exerciseIds.map((id) => exercises.find((exercise) => exercise.id === id)?.title).filter(Boolean).join(', ')}</p>}
            {entry.effort !== null && <p className="mt-2 text-sm text-muted">Esforço percebido: {entry.effort}/5</p>}{entry.note && <p className="mt-2 whitespace-pre-wrap leading-6 text-muted">{entry.note}</p>}
            {deleteId === entry.id && <div aria-labelledby={`delete-title-${entry.id}`} className="mt-4 rounded-lg border border-danger-border bg-danger-subtle p-4" role="alertdialog"><p className="font-semibold text-foreground" id={`delete-title-${entry.id}`}>Excluir esta sessão?</p><div className="mt-3 flex gap-2"><button className="min-h-11 rounded-lg bg-danger px-3 font-semibold text-white" onClick={() => { setEntries((current) => current.filter((item) => item.id !== entry.id)); setDeleteId(null); if (editingId === entry.id) cancelEdit() }} type="button">Confirmar exclusão</button><button className="min-h-11 rounded-lg border border-border px-3 font-semibold text-foreground" onClick={() => setDeleteId(null)} type="button">Manter sessão</button></div></div>}
          </li>)}</ul>}
        </section>
      </main>
    </div>
  )
}
