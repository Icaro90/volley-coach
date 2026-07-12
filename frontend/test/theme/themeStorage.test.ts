import { describe, expect, test, vi } from 'vitest'
import { readStoredTheme, saveTheme, themeStorageKey } from '../../src/shared/theme/themeStorage'

describe('themeStorage', () => {
  test('returns a saved supported theme', () => {
    const storage = {
      getItem: vi.fn(() => 'light'),
      setItem: vi.fn(),
    }

    expect(readStoredTheme(storage)).toBe('light')
    expect(storage.getItem).toHaveBeenCalledWith(themeStorageKey)
  })

  test('uses no stored theme when the value is missing or unsupported', () => {
    const storage = {
      getItem: vi.fn(() => 'system'),
      setItem: vi.fn(),
    }

    expect(readStoredTheme(storage)).toBeNull()
  })

  test('keeps the current session working when storage throws', () => {
    const storage = {
      getItem: vi.fn(() => {
        throw new Error('Storage unavailable')
      }),
      setItem: vi.fn(() => {
        throw new Error('Storage unavailable')
      }),
    }

    expect(readStoredTheme(storage)).toBeNull()
    expect(() => saveTheme(storage, 'dark')).not.toThrow()
  })

  test('saves the selected theme with the application key', () => {
    const storage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
    }

    saveTheme(storage, 'dark')

    expect(storage.setItem).toHaveBeenCalledWith(themeStorageKey, 'dark')
  })
})
