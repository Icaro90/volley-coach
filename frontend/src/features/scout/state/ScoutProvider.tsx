import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { useLocalJsonState } from '../../../shared/storage/localJsonStorage'
import { isScoutMatchList, scoutStorageKey, scoutReducer, type ScoutAction, type ScoutMatch } from '../data/scout'

type ScoutContextValue = {
  matches: ScoutMatch[]
  isSaved: boolean
  addMatch: (match: ScoutMatch) => void
  updateMatch: (id: string, action: ScoutAction) => void
  removeMatch: (id: string) => void
  linkScoreboard: (id: string, scoreboardId: string) => void
}

const ScoutContext = createContext<ScoutContextValue | null>(null)

export function ScoutProvider({ children }: { children: ReactNode }) {
  const [matches, setMatches, isSaved] = useLocalJsonState(scoutStorageKey, [], isScoutMatchList)
  const value = useMemo<ScoutContextValue>(() => ({
    matches,
    isSaved,
    addMatch: (match) => setMatches((items) => [match, ...items]),
    updateMatch: (id, action) => setMatches((items) => items.map((match) => match.id === id ? scoutReducer(match, action) : match)),
    removeMatch: (id) => setMatches((items) => items.filter((match) => match.id !== id)),
    linkScoreboard: (id, scoreboardId) => setMatches((items) => items.map((match) => match.id === id ? { ...match, scoreboardId } : match)),
  }), [matches, isSaved, setMatches])
  return <ScoutContext.Provider value={value}>{children}</ScoutContext.Provider>
}

export function useScout() {
  const value = useContext(ScoutContext)
  if (!value) throw new Error('useScout precisa estar dentro de ScoutProvider.')
  return value
}
