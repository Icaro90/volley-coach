import { describe, expect, it } from 'vitest'
import { isBackup, mergeArray } from '../../src/features/backup/data/backup'

describe('backup local', () => {
  it('valida o manifesto versionado e rejeita formato ou chaves desconhecidas', () => {
    expect(isBackup({ format: 'volley-coach-backup', version: 1, createdAt: '2026-11-22T00:00:00Z', data: { 'volley-coach.favorites.v1': [] } })).toBe(true)
    expect(isBackup({ format: 'wrong', version: 1, createdAt: 'now', data: {} })).toBe(false)
    expect(isBackup({ format: 'volley-coach-backup', version: 1, createdAt: 'now', data: { unknown: [] } })).toBe(false)
  })

  it('mescla por ID e mantém os dados do arquivo em conflito', () => {
    expect(mergeArray([{ id: 'a', value: 1 }, { id: 'b', value: 2 }], [{ id: 'a', value: 3 }, { id: 'c', value: 4 }])).toEqual([
      { id: 'a', value: 3 }, { id: 'b', value: 2 }, { id: 'c', value: 4 },
    ])
  })
})
