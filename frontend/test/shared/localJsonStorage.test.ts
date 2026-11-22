import { beforeEach, describe, expect, it } from 'vitest'
import { readLocalJson, writeLocalJson } from '../../src/shared/storage/localJsonStorage'

const isStringList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string')

describe('localJsonStorage', () => {
  beforeEach(() => localStorage.clear())

  it('returns the fallback when no value has been saved', () => {
    expect(readLocalJson('missing', ['default'], isStringList)).toEqual(['default'])
  })

  it('reads valid JSON and removes invalid data', () => {
    localStorage.setItem('items', JSON.stringify(['serve']))
    expect(readLocalJson('items', [], isStringList)).toEqual(['serve'])

    localStorage.setItem('broken', JSON.stringify({ items: 'wrong shape' }))
    expect(readLocalJson('broken', [], isStringList)).toEqual([])
    expect(localStorage.getItem('broken')).toBeNull()
  })

  it('writes JSON and reports storage failures', () => {
    expect(writeLocalJson('items', ['pass'])).toBe(true)
    expect(localStorage.getItem('items')).toBe('["pass"]')

    const original = Storage.prototype.setItem
    Storage.prototype.setItem = () => { throw new Error('quota') }
    expect(writeLocalJson('items', ['set'])).toBe(false)
    Storage.prototype.setItem = original
  })
})
