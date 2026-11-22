import { diaryStorageKey, isDiaryEntryList } from '../../diary/data/entries'
import { isScoutMatchList, scoutStorageKey } from '../../scout/data/scout'
import { isFavoriteList, favoritesStorageKey } from '../../../shared/favorites/favorites'
import { isTeamData, teamStorageKey } from '../../team/data/teamData'
import { isMatchResultList, isScoreMatch, matchHistoryKey, scoreboardKey } from '../../scoreboard/data/scoreboard'

export const backupKeys = [favoritesStorageKey, diaryStorageKey, scoutStorageKey, teamStorageKey, matchHistoryKey, scoreboardKey] as const
export const allowedBackupKeys: ReadonlySet<string> = new Set(backupKeys)
export const backupLabels: Record<(typeof backupKeys)[number], string> = { [favoritesStorageKey]: 'Favoritos', [diaryStorageKey]: 'Diário de treino', [scoutStorageKey]: 'Scout', [teamStorageKey]: 'Dados do time', [matchHistoryKey]: 'Histórico de partidas', [scoreboardKey]: 'Placar em andamento' }
export type Backup = { format: 'volley-coach-backup'; version: 1; createdAt: string; data: Partial<Record<(typeof backupKeys)[number], unknown>> }

export function isBackup(value: unknown): value is Backup {
  if (!value || typeof value !== 'object') return false
  const item = value as Backup
  if (item.format !== 'volley-coach-backup' || item.version !== 1 || typeof item.createdAt !== 'string' || !item.data || typeof item.data !== 'object') return false
  return Object.entries(item.data).every(([key, data]) => {
    if (!allowedBackupKeys.has(key)) return false
    switch (key) {
      case favoritesStorageKey: return isFavoriteList(data)
      case diaryStorageKey: return isDiaryEntryList(data)
      case scoutStorageKey: return isScoutMatchList(data)
      case teamStorageKey: return isTeamData(data)
      case matchHistoryKey: return isMatchResultList(data)
      case scoreboardKey: return data === null || isScoreMatch(data)
      default: return false
    }
  })
}

export function mergeValue(existing: unknown, incoming: unknown, key: string): unknown {
  if (key === teamStorageKey && existing && incoming && typeof existing === 'object' && typeof incoming === 'object') {
    const a = existing as Record<string, unknown>; const b = incoming as Record<string, unknown>
    return Object.fromEntries(Object.keys(b).map((section) => [section, mergeArray(a[section], b[section])]))
  }
  if (Array.isArray(existing) && Array.isArray(incoming)) return mergeArray(existing, incoming)
  return incoming
}

export function mergeArray(existing: unknown, incoming: unknown): unknown[] {
  const oldItems = Array.isArray(existing) ? existing : []; const newItems = Array.isArray(incoming) ? incoming : []
  const map = new Map<string, unknown>()
  for (const item of oldItems) map.set(item && typeof item === 'object' && 'id' in item ? String((item as {id: unknown}).id) : JSON.stringify(item), item)
  for (const item of newItems) map.set(item && typeof item === 'object' && 'id' in item ? String((item as {id: unknown}).id) : JSON.stringify(item), item)
  return [...map.values()]
}
