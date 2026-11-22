export type FavoriteType = 'rule' | 'exercise'

export type FavoriteRef = {
  type: FavoriteType
  id: string
  savedAt: string
}

export const favoritesStorageKey = 'volley-coach.favorites.v1'

export function isFavoriteRef(value: unknown): value is FavoriteRef {
  if (!value || typeof value !== 'object') return false
  const item = value as Record<string, unknown>
  return (
    (item.type === 'rule' || item.type === 'exercise') &&
    typeof item.id === 'string' &&
    typeof item.savedAt === 'string'
  )
}

export function isFavoriteList(value: unknown): value is FavoriteRef[] {
  return Array.isArray(value) && value.every(isFavoriteRef)
}

export function isFavorite(items: FavoriteRef[], type: FavoriteType, id: string) {
  return items.some((item) => item.type === type && item.id === id)
}

export function toggleFavorite(items: FavoriteRef[], type: FavoriteType, id: string): FavoriteRef[] {
  if (isFavorite(items, type, id)) {
    return items.filter((item) => item.type !== type || item.id !== id)
  }

  return [...items, { type, id, savedAt: new Date().toISOString() }]
}
