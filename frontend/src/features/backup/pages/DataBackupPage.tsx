import { useMemo, useState, type ChangeEvent } from 'react'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { allowedBackupKeys, backupKeys, backupLabels, isBackup, mergeValue, type Backup } from '../data/backup'

export function DataBackupPage() {
  const [selected, setSelected] = useState<string[]>([...backupKeys]); const [fileData, setFileData] = useState<Backup | null>(null); const [error, setError] = useState(''); const [message, setMessage] = useState(''); const [mode, setMode] = useState<'merge'|'replace'>('merge')
  const selectedKeys = useMemo(() => backupKeys.filter((key) => selected.includes(key)), [selected])
  function toggle(key: string) { setSelected((items) => items.includes(key) ? items.filter((item) => item !== key) : [...items, key]) }
  function exportBackup() {
    const data: Backup['data'] = {}
    for (const key of selectedKeys) { const raw = localStorage.getItem(key); if (raw !== null) data[key] = JSON.parse(raw) }
    const blob = new Blob([JSON.stringify({ format: 'volley-coach-backup', version: 1, createdAt: new Date().toISOString(), data }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = `volley-coach-backup-${new Date().toISOString().slice(0,10)}.json`; anchor.click(); URL.revokeObjectURL(url); setMessage(`${Object.keys(data).length} conjuntos de dados exportados.`); setError('')
  }
  async function chooseFile(event: ChangeEvent<HTMLInputElement>) {
    setFileData(null); setMessage(''); setError('')
    const file = event.target.files?.[0]; if (!file) return
    if (file.size > 10 * 1024 * 1024) { setError('O arquivo excede o limite de 10 MB.'); return }
    try { const value: unknown = JSON.parse(await file.text()); if (!isBackup(value)) throw new Error('Formato inválido, versão não suportada ou dados inconsistentes.'); setFileData(value) } catch (e) { setError(e instanceof Error ? e.message : 'Não foi possível ler o arquivo.') }
  }
  function importBackup() {
    if (!fileData) return
    const selectedSet = new Set<string>(selectedKeys); const data = Object.fromEntries(Object.entries(fileData.data).filter(([key]) => selectedSet.has(key))) as Backup['data']
    if (!Object.keys(data).length) { setError('Selecione ao menos um conjunto de dados incluído no arquivo.'); return }
    if (mode === 'replace' && !window.confirm('Substituir os dados locais selecionados pelos dados do arquivo? Esta ação pode sobrescrever informações atuais.')) return
    const prior = new Map<string, string | null>()
    try {
      for (const [key, incoming] of Object.entries(data)) {
        if (!allowedBackupKeys.has(key)) continue
        prior.set(key, localStorage.getItem(key))
        let next: unknown = incoming
        if (mode === 'merge') { const raw = localStorage.getItem(key); next = mergeValue(raw ? JSON.parse(raw) : undefined, incoming, key) }
        localStorage.setItem(key, JSON.stringify(next))
      }
      setMessage(`${Object.keys(data).length} conjuntos importados por ${mode === 'merge' ? 'mesclagem' : 'substituição'}. Em conflitos de ID, prevalece a versão do arquivo.`); setError(''); setFileData(null)
    } catch { for (const [key, value] of prior) { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value) } setError('A importação falhou. Os valores anteriores foram restaurados quando possível.') }
  }
  return <div className="min-h-screen bg-canvas"><AppHeader /><main className="mx-auto max-w-3xl px-5 py-8 sm:px-8"><BackLink to="/more">Voltar para Mais</BackLink><h1 className="mt-5 text-3xl font-bold text-foreground">Exportação e backup</h1><p className="mt-2 text-muted">Crie um arquivo local para guardar seus dados ou transferi-los para outro aparelho. O arquivo pode conter informações privadas da equipe.</p><section className="mt-6 rounded-xl border border-border bg-surface p-5"><h2 className="text-xl font-bold text-foreground">Escolha os dados</h2><div className="mt-3 grid gap-2 sm:grid-cols-2">{backupKeys.map((key) => <label className="min-h-11 text-foreground" key={key}><input checked={selected.includes(key)} onChange={() => toggle(key)} type="checkbox" /> {backupLabels[key]}</label>)}</div><button className="mt-4 min-h-12 rounded-lg bg-accent-strong px-4 font-semibold text-accent-foreground" disabled={!selectedKeys.length} onClick={exportBackup} type="button">Exportar arquivo JSON</button></section><section className="mt-5 rounded-xl border border-border bg-surface p-5"><h2 className="text-xl font-bold text-foreground">Importar arquivo</h2><label className="mt-3 block font-semibold text-foreground">Arquivo JSON<input accept="application/json,.json" className="mt-2 block w-full text-foreground" onChange={(e) => void chooseFile(e)} type="file" /></label><label className="mt-4 block font-semibold text-foreground">Como aplicar<select className="mt-1 min-h-11 w-full rounded-lg border border-border bg-canvas px-3" onChange={(e) => setMode(e.target.value as 'merge'|'replace')} value={mode}><option value="merge">Mesclar (IDs iguais: arquivo substitui o registro)</option><option value="replace">Substituir dados selecionados</option></select></label>{fileData && <div className="mt-4 rounded-lg border border-border p-3 text-foreground"><p>Backup válido · versão {fileData.version} · {new Date(fileData.createdAt).toLocaleString()}</p><p className="mt-1 text-sm text-muted">Contém: {Object.keys(fileData.data).map((k) => backupLabels[k as (typeof backupKeys)[number]]).join(', ') || 'nenhum dado'}</p><button className="mt-3 min-h-11 rounded-lg bg-accent-strong px-4 font-semibold text-accent-foreground" onClick={importBackup} type="button">Importar seleção</button></div>}</section>{message && <p className="mt-4 rounded-lg bg-success-subtle p-3 text-success" role="status">{message}</p>}{error && <p className="mt-4 rounded-lg bg-danger-subtle p-3 text-danger" role="alert">{error}</p>}<p className="mt-4 text-sm text-muted">O app não envia backups para um servidor. Guarde o arquivo em local seguro; qualquer pessoa com acesso a ele pode ler os dados exportados.</p></main></div>
}
