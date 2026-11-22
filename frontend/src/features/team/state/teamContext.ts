import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { TeamData } from '../data/teamData'

export type TeamContextValue = { data: TeamData; setData: Dispatch<SetStateAction<TeamData>>; isSaved: boolean }
export const TeamContext = createContext<TeamContextValue | null>(null)
