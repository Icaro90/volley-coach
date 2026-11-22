import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { useLocalJsonState } from '../storage/localJsonStorage'
import {
  favoritesStorageKey,
  isFavoriteList,
  toggleFavorite,
  type FavoriteRef,
  type FavoriteType,
} from './favorites'

type FavoritesContextValue = {
  favorites: FavoriteRef[]
  isSaved: boolean
  toggle: (type: FavoriteType, id: string) => void
  remove: (type: FavoriteType, id: string) => void
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites, isSaved] = useLocalJsonState(
    favoritesStorageKey,
    [],
    isFavoriteList,
  )

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      isSaved,
      toggle: (type, id) => setFavorites((items) => toggleFavorite(items, type, id)),
      remove: (type, id) =>
        setFavorites((items) => items.filter((item) => item.type !== type || item.id !== id)),
    }),
    [favorites, isSaved, setFavorites],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const value = useContext(FavoritesContext)
  if (!value) throw new Error('useFavorites precisa estar dentro de FavoritesProvider.')
  return value
}
