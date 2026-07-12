export type Theme = 'dark' | 'light'

export const themeStorageKey = 'volley-coach.theme'

type ThemeStorage = Pick<Storage, 'getItem' | 'setItem'>

function isTheme(value: string | null): value is Theme {
  return value === 'dark' || value === 'light'
}

export function readStoredTheme(storage: ThemeStorage): Theme | null {
  try {
    const value = storage.getItem(themeStorageKey)

    return isTheme(value) ? value : null
  } catch {
    return null
  }
}

export function saveTheme(storage: ThemeStorage, theme: Theme) {
  try {
    storage.setItem(themeStorageKey, theme)
  } catch {
    // The theme still works for the current session when storage is unavailable.
  }
}
