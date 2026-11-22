export type Side = 'home' | 'away'
export type PointScore = { home: number; away: number }
export type ScoreSet = PointScore & { number: number }
export type ScoreFormat = { bestOf: 3 | 5; regularTarget: number; decidingTarget: number; winBy: number; label: string }
export type ScoreSnapshot = { score: PointScore; sets: ScoreSet[]; serving: Side; homeOnLeft: boolean; status: 'active' | 'completed' }
export type ScoreMatch = ScoreSnapshot & { id: string; homeName: string; awayName: string; format: ScoreFormat; createdAt: string; undoStack: ScoreSnapshot[]; saveHistory: boolean; scoutId?: string }
export type MatchResult = { id: string; homeName: string; awayName: string; sets: ScoreSet[]; format: ScoreFormat; winner: Side; date: string; source: 'scoreboard'; scoutId?: string; snapshot?: ScoreMatch }

export const scoreboardKey = 'volley-coach.scoreboard.v1'
export const matchHistoryKey = 'volley-coach.match-history.v1'
export const defaultFormat: ScoreFormat = { bestOf: 5, regularTarget: 25, decidingTarget: 15, winBy: 2, label: 'Quadra — melhor de 5' }
function isPointScore(v: unknown): v is PointScore { return Boolean(v && typeof v === 'object' && Number.isInteger((v as PointScore).home) && (v as PointScore).home >= 0 && Number.isInteger((v as PointScore).away) && (v as PointScore).away >= 0) }
function isSnapshot(v: unknown): v is ScoreSnapshot { return Boolean(v && typeof v === 'object' && isPointScore((v as ScoreSnapshot).score) && Array.isArray((v as ScoreSnapshot).sets) && ['home','away'].includes((v as ScoreSnapshot).serving) && typeof (v as ScoreSnapshot).homeOnLeft === 'boolean' && ['active','completed'].includes((v as ScoreSnapshot).status)) }
export function isScoreMatch(v: unknown): v is ScoreMatch {
  if (!v || typeof v !== 'object') return false
  const m = v as ScoreMatch
  return typeof m.id === 'string' && typeof m.homeName === 'string' && typeof m.awayName === 'string' && typeof m.createdAt === 'string' &&
    isPointScore(m.score) && ['home','away'].includes(m.serving) && ['active','completed'].includes(m.status) && typeof m.homeOnLeft === 'boolean' &&
    !!m.format && (m.format.bestOf === 3 || m.format.bestOf === 5) && Number.isInteger(m.format.regularTarget) && m.format.regularTarget > 0 && Number.isInteger(m.format.decidingTarget) && m.format.decidingTarget > 0 && Number.isInteger(m.format.winBy) && m.format.winBy > 0 && typeof m.format.label === 'string' &&
    Array.isArray(m.sets) && m.sets.every((set) => isPointScore(set) && Number.isInteger(set.number) && set.number > 0) && Array.isArray(m.undoStack) && m.undoStack.every(isSnapshot) && typeof m.saveHistory === 'boolean' && (m.scoutId === undefined || typeof m.scoutId === 'string')
}
export const isMatchResultList = (v: unknown): v is MatchResult[] => Array.isArray(v) && v.every((m) => m && typeof m.id === 'string' && typeof m.homeName === 'string' && typeof m.awayName === 'string' && Array.isArray(m.sets) && ['home','away'].includes(m.winner) && ((m as MatchResult).snapshot === undefined || isScoreMatch((m as MatchResult).snapshot)))

export function createScoreMatch(homeName: string, awayName: string, format: ScoreFormat, serving: Side, saveHistory: boolean): ScoreMatch {
  return { id: `score-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, homeName: homeName.trim(), awayName: awayName.trim(), format, score: { home: 0, away: 0 }, sets: [], serving, homeOnLeft: true, status: 'active', createdAt: new Date().toISOString(), undoStack: [], saveHistory }
}

export function scorePoint(match: ScoreMatch, winner: Side): ScoreMatch {
  if (match.status === 'completed') return match
  const before: ScoreSnapshot = { score: match.score, sets: match.sets, serving: match.serving, homeOnLeft: match.homeOnLeft, status: match.status }
  const score = { ...match.score, [winner]: match.score[winner] + 1 }
  const setNumber = match.sets.length + 1
  const target = setNumber === match.format.bestOf ? match.format.decidingTarget : match.format.regularTarget
  const setWinner: Side | null = score.home >= target && score.home - score.away >= match.format.winBy ? 'home' : score.away >= target && score.away - score.home >= match.format.winBy ? 'away' : null
  if (!setWinner) {
    const switchAtEight = setNumber === match.format.bestOf && match.score.home + match.score.away < 8 && score.home + score.away >= 8
    return { ...match, score, serving: winner, homeOnLeft: switchAtEight ? !match.homeOnLeft : match.homeOnLeft, undoStack: [...match.undoStack, before] }
  }
  const sets = [...match.sets, { number: setNumber, ...score }]
  const homeWins = sets.filter((s) => s.home > s.away).length
  const awayWins = sets.filter((s) => s.away > s.home).length
  const completed = homeWins >= Math.ceil(match.format.bestOf / 2) || awayWins >= Math.ceil(match.format.bestOf / 2)
  return { ...match, score: completed ? score : { home: 0, away: 0 }, sets, serving: winner, homeOnLeft: completed ? match.homeOnLeft : !match.homeOnLeft, status: completed ? 'completed' : 'active', undoStack: [...match.undoStack, before] }
}

export function undoScore(match: ScoreMatch): ScoreMatch {
  const before = match.undoStack.at(-1)
  return before ? { ...match, ...before, undoStack: match.undoStack.slice(0, -1) } : match
}
export function resetCurrentSet(match: ScoreMatch): ScoreMatch { return { ...match, score: { home: 0, away: 0 }, undoStack: [] } }
export function finishSetManually(match: ScoreMatch): ScoreMatch {
  if (match.status === 'completed' || match.score.home === match.score.away) return match
  const before: ScoreSnapshot = { score: match.score, sets: match.sets, serving: match.serving, homeOnLeft: match.homeOnLeft, status: match.status }
  const setNumber = match.sets.length + 1
  const sets = [...match.sets, { number: setNumber, ...match.score }]
  const homeWins = sets.filter((s) => s.home > s.away).length
  const awayWins = sets.filter((s) => s.away > s.home).length
  const completed = homeWins >= Math.ceil(match.format.bestOf / 2) || awayWins >= Math.ceil(match.format.bestOf / 2)
  return { ...match, sets, score: completed ? match.score : { home: 0, away: 0 }, status: completed ? 'completed' : 'active', homeOnLeft: completed ? match.homeOnLeft : !match.homeOnLeft, undoStack: [...match.undoStack, before] }
}
export function swapCourtSides(match: ScoreMatch): ScoreMatch { return { ...match, homeOnLeft: !match.homeOnLeft, undoStack: [...match.undoStack, { score: match.score, sets: match.sets, serving: match.serving, homeOnLeft: match.homeOnLeft, status: match.status }] } }
export function resultFromMatch(match: ScoreMatch): MatchResult | null {
  if (match.status !== 'completed') return null
  return { id: match.id, homeName: match.homeName, awayName: match.awayName, sets: match.sets, format: match.format, winner: match.sets.filter((s) => s.home > s.away).length > match.sets.filter((s) => s.away > s.home).length ? 'home' : 'away', date: match.createdAt, source: 'scoreboard', scoutId: match.scoutId, snapshot: match }
}
