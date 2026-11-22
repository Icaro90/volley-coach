import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

export function readLocalJson<T>(
  key: string,
  fallback: T,
  isValid: (value: unknown) => value is T,
): T {
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback

    const value: unknown = JSON.parse(raw)
    if (isValid(value)) return value

    window.localStorage.removeItem(key)
  } catch {
    // Private browsing, quota failures, and malformed local data must not crash the app.
  }

  return fallback
}

export function writeLocalJson<T>(key: string, value: T): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function useLocalJsonState<T>(
  key: string,
  fallback: T,
  isValid: (value: unknown) => value is T,
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [value, setValue] = useState(() => readLocalJson(key, fallback, isValid))
  const [isSaved, setIsSaved] = useState(true)

  useEffect(() => {
    setIsSaved(writeLocalJson(key, value))
  }, [key, value])

  return [value, setValue, isSaved]
}
