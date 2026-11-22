import { useMemo, type ReactNode } from 'react'
import { useLocalJsonState } from '../../../shared/storage/localJsonStorage'
import { emptyTeamData, isTeamData, teamStorageKey } from '../data/teamData'
import { TeamContext } from './teamContext'

export function TeamProvider({ children }: { children: ReactNode }) {
  const [data, setData, isSaved] = useLocalJsonState(teamStorageKey, emptyTeamData, isTeamData)
  const value = useMemo(() => ({ data, setData, isSaved }), [data, setData, isSaved])
  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
}
