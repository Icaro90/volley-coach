export type MatchSide = 'home' | 'away'
export type MatchEventType = 'rally-point' | 'ace' | 'service-error' | 'attack-error' | 'other-error'
export type MatchScore = { home: number; away: number }
export type FinishedSet = MatchScore & { number: number }
export type MatchSnapshot = { currentScore: MatchScore; sets: FinishedSet[]; status: 'active' | 'completed' }
export type RallyEvent = MatchSnapshot & {
  id: string
  winner: MatchSide
  cause: MatchSide | null
  eventType: MatchEventType
  setNumber: number
  before: MatchSnapshot
  createdAt: string
}
export type ScoutMatch = {
  id: string
  homeName: string
  awayName: string
  bestOf: 3 | 5
  regularSetTarget: number
  decidingSetTarget: number
  status: 'active' | 'completed'
  currentScore: MatchScore
  sets: FinishedSet[]
  events: RallyEvent[]
  createdAt: string
  scoreboardId?: string
}
export type ScoutAction =
  | { type: 'point'; winner: MatchSide }
  | { type: 'classified'; eventType: Exclude<MatchEventType, 'rally-point'>; cause: MatchSide }
  | { type: 'undo' }

export const scoutStorageKey = 'volley-coach.scout.v1'
export const eventLabels: Record<MatchEventType, string> = {
  'rally-point': 'Ponto sem classificação', ace: 'Ace / saque vencedor', 'service-error': 'Erro de saque', 'attack-error': 'Erro de ataque', 'other-error': 'Outro erro',
}

const isSide = (value: unknown): value is MatchSide => value === 'home' || value === 'away'
const isScore = (value: unknown): value is MatchScore => Boolean(value && typeof value === 'object' && Number.isInteger((value as MatchScore).home) && (value as MatchScore).home >= 0 && Number.isInteger((value as MatchScore).away) && (value as MatchScore).away >= 0)
const isFinishedSetList = (value: unknown): value is FinishedSet[] => Array.isArray(value) && value.every((set) => isScore(set) && Number.isInteger((set as FinishedSet).number) && (set as FinishedSet).number > 0)
const isSnapshot = (value: unknown): value is MatchSnapshot => Boolean(value && typeof value === 'object' && isScore((value as MatchSnapshot).currentScore) && isFinishedSetList((value as MatchSnapshot).sets) && ['active', 'completed'].includes((value as MatchSnapshot).status))

export function isScoutMatchList(value: unknown): value is ScoutMatch[] {
  return Array.isArray(value) && value.every((match) => {
    if (!match || typeof match !== 'object') return false
    const item = match as ScoutMatch
    return typeof item.id === 'string' && typeof item.homeName === 'string' && typeof item.awayName === 'string' &&
      (item.bestOf === 3 || item.bestOf === 5) && Number.isInteger(item.regularSetTarget) && item.regularSetTarget >= 1 &&
      Number.isInteger(item.decidingSetTarget) && item.decidingSetTarget >= 1 && ['active', 'completed'].includes(item.status) &&
      isScore(item.currentScore) && isFinishedSetList(item.sets) && Array.isArray(item.events) && item.events.every((event) =>
        typeof event.id === 'string' && isSide(event.winner) && (event.cause === null || isSide(event.cause)) &&
        ['rally-point', 'ace', 'service-error', 'attack-error', 'other-error'].includes(event.eventType) &&
        Number.isInteger(event.setNumber) && isSnapshot(event.before) && isSnapshot(event) && typeof event.createdAt === 'string',
      ) && typeof item.createdAt === 'string' && (item.scoreboardId === undefined || typeof item.scoreboardId === 'string')
  })
}

export function createScoutMatch(input: { id: string; homeName: string; awayName: string; bestOf: 3 | 5; regularSetTarget?: number; decidingSetTarget?: number; createdAt?: string; scoreboardId?: string }): ScoutMatch {
  return {
    id: input.id,
    homeName: input.homeName.trim(),
    awayName: input.awayName.trim(),
    bestOf: input.bestOf,
    regularSetTarget: input.regularSetTarget ?? 25,
    decidingSetTarget: input.decidingSetTarget ?? 15,
    status: 'active',
    currentScore: { home: 0, away: 0 },
    sets: [],
    events: [],
    createdAt: input.createdAt ?? new Date().toISOString(),
    scoreboardId: input.scoreboardId,
  }
}

function snapshot(match: ScoutMatch): MatchSnapshot {
  return { currentScore: match.currentScore, sets: match.sets, status: match.status }
}

function record(match: ScoutMatch, winner: MatchSide, eventType: MatchEventType, cause: MatchSide | null, id: string) {
  if (match.status === 'completed') return match
  const before = snapshot(match)
  const setNumber = match.sets.length + 1
  const currentScore = { ...match.currentScore, [winner]: match.currentScore[winner] + 1 }
  const target = setNumber === match.bestOf ? match.decidingSetTarget : match.regularSetTarget
  const homeWon = currentScore.home >= target && currentScore.home - currentScore.away >= 2
  const awayWon = currentScore.away >= target && currentScore.away - currentScore.home >= 2
  let sets = match.sets
  let status: ScoutMatch['status'] = match.status
  let nextScore = currentScore
  if (homeWon || awayWon) {
    sets = [...sets, { number: setNumber, ...currentScore }]
    const homeSets = sets.filter((set) => set.home > set.away).length
    const awaySets = sets.filter((set) => set.away > set.home).length
    if (homeSets > match.bestOf / 2 || awaySets > match.bestOf / 2) status = 'completed'
    else nextScore = { home: 0, away: 0 }
  }
  const event: RallyEvent = { id, winner, cause, eventType, setNumber, before, currentScore: nextScore, sets, status, createdAt: new Date().toISOString() }
  return { ...match, currentScore: nextScore, sets, status, events: [...match.events, event] }
}

export function scoutReducer(match: ScoutMatch, action: ScoutAction): ScoutMatch {
  switch (action.type) {
    case 'point': return record(match, action.winner, 'rally-point', null, `rally-${Date.now()}-${match.events.length}`)
    case 'classified': {
      const winner = action.eventType === 'ace' ? action.cause : action.cause === 'home' ? 'away' : 'home'
      return record(match, winner, action.eventType, action.cause, `rally-${Date.now()}-${match.events.length}`)
    }
    case 'undo': {
      const last = match.events.at(-1)
      if (!last) return match
      return { ...match, currentScore: last.before.currentScore, sets: last.before.sets, status: last.before.status, events: match.events.slice(0, -1) }
    }
  }
}

export function matchPointCounts(match: ScoutMatch) {
  return { home: match.events.filter((event) => event.winner === 'home').length, away: match.events.filter((event) => event.winner === 'away').length }
}

export function matchEventCounts(match: ScoutMatch) {
  return (['ace', 'service-error', 'attack-error', 'other-error'] as const).map((eventType) => ({
    eventType,
    label: eventLabels[eventType],
    home: match.events.filter((event) => event.eventType === eventType && event.cause === 'home').length,
    away: match.events.filter((event) => event.eventType === eventType && event.cause === 'away').length,
  }))
}
