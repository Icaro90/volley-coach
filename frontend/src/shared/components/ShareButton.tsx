import { useState } from 'react'
import { Share } from '@capacitor/share'

type Props = { title: string; text: string; path: string }

export function ShareButton({ title, text, path }: Props) {
  const [message, setMessage] = useState('')
  async function share() {
    const url = new URL(path, window.location.href).toString()
    try {
      if (typeof window !== 'undefined' && (window as Window & { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.()) {
        await Share.share({ title, text, url, dialogTitle: 'Compartilhar conteúdo' })
      } else if (navigator.share) {
        await navigator.share({ title, text: `${text}\n${url}` })
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${text}\n${url}`)
        setMessage('Texto e link copiados.')
      } else {
        setMessage('Compartilhamento indisponível neste navegador.')
      }
    } catch {
      setMessage('Não foi possível compartilhar agora.')
    }
  }
  return <div><button className="min-h-11 rounded-lg border border-border bg-surface px-4 font-semibold text-foreground" onClick={share} type="button">Compartilhar</button>{message && <p className="mt-2 text-sm text-muted" role="status">{message}</p>}</div>
}
