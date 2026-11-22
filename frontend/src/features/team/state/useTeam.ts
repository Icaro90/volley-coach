import { useContext } from 'react'
import { TeamContext } from './teamContext'

export function useTeam() {
  const value = useContext(TeamContext)
  if (!value) throw new Error('useTeam precisa estar dentro de TeamProvider.')
  return value
}
