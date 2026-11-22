import type { Fundamental } from '../../training/data/exercises'

export const courtPositions = ['Levantador', 'Oposto', 'Ponteiro', 'Central', 'Líbero'] as const
export type CourtPosition = (typeof courtPositions)[number]
export type Athlete = { id: string; name: string; number?: string; positions: CourtPosition[]; category?: string; experience?: string; notes?: string; active: boolean }
export type AttendanceStatus = 'present' | 'absent' | 'excused' | 'pending'
export type AttendanceCall = { id: string; activity: string; date: string; entries: { athleteId: string; status: AttendanceStatus; note?: string }[] }
export type SkillAssessment = { id: string; athleteId: string; fundamental: Fundamental; score: number; date: string; note?: string }
export type Challenge = { id: string; title: string; description: string; fundamental?: Fundamental; startDate: string; endDate: string; participantIds: string[]; progress: Record<string, 'not-started' | 'in-progress' | 'complete'>; archived: boolean }
export type GamePlan = { id: string; opponent: string; date: string; competition?: string; servePlan?: string; receivePlan?: string; blockDefense?: string; combinations?: string; notes?: string; formationId?: string; scoutId?: string; archived: boolean }
export type Formation = { id: string; name: string; assignments: Partial<Record<'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6', string>>; reserves: string[]; notes?: string; archived: boolean }
export type TeamData = { athletes: Athlete[]; attendance: AttendanceCall[]; assessments: SkillAssessment[]; challenges: Challenge[]; gamePlans: GamePlan[]; formations: Formation[] }

export const emptyTeamData: TeamData = { athletes: [], attendance: [], assessments: [], challenges: [], gamePlans: [], formations: [] }
export const teamStorageKey = 'volley-coach.team.v1'

export function rotateFormationSlots(assignments: Formation['assignments']): Formation['assignments'] {
  return { P1: assignments.P2, P2: assignments.P3, P3: assignments.P4, P4: assignments.P5, P5: assignments.P6, P6: assignments.P1 }
}

export function isTeamData(value: unknown): value is TeamData {
  if (!value || typeof value !== 'object') return false
  const v = value as TeamData
  return ['athletes', 'attendance', 'assessments', 'challenges', 'gamePlans', 'formations'].every((k) => Array.isArray((v as unknown as Record<string, unknown>)[k])) &&
    v.athletes.every((a) => typeof a.id === 'string' && typeof a.name === 'string' && Array.isArray(a.positions) && typeof a.active === 'boolean') &&
    v.attendance.every((c) => typeof c.id === 'string' && typeof c.date === 'string' && Array.isArray(c.entries)) &&
    v.assessments.every((a) => typeof a.id === 'string' && typeof a.athleteId === 'string' && Number.isInteger(a.score) && a.score >= 1 && a.score <= 5) &&
    v.challenges.every((c) => typeof c.id === 'string' && typeof c.title === 'string' && Array.isArray(c.participantIds)) &&
    v.gamePlans.every((p) => typeof p.id === 'string' && typeof p.opponent === 'string') &&
    v.formations.every((f) => typeof f.id === 'string' && typeof f.name === 'string' && typeof f.assignments === 'object')
}

export const id = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
