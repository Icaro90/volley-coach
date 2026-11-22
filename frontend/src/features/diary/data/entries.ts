import { fundamentals, type Fundamental } from '../../training/data/exercises'

export type DiaryEntry = {
  id: string
  date: string
  durationMinutes: number
  fundamentals: Fundamental[]
  exerciseIds: string[]
  effort: number | null
  note: string
}

export const diaryStorageKey = 'volley-coach.diary.v1'

export function isDiaryEntryList(value: unknown): value is DiaryEntry[] {
  return Array.isArray(value) && value.every((entry) => {
    if (!entry || typeof entry !== 'object') return false
    const item = entry as Record<string, unknown>
    return (
      typeof item.id === 'string' && typeof item.date === 'string' &&
      Number.isInteger(item.durationMinutes) && (item.durationMinutes as number) > 0 &&
      Array.isArray(item.fundamentals) && item.fundamentals.every((value) => fundamentals.includes(value as Fundamental)) &&
      Array.isArray(item.exerciseIds) && item.exerciseIds.every((id) => typeof id === 'string') &&
      (item.effort === null || (Number.isInteger(item.effort) && (item.effort as number) >= 1 && (item.effort as number) <= 5)) &&
      typeof item.note === 'string'
    )
  })
}
