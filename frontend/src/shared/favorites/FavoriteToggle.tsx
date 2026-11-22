import { useFavorites } from './FavoritesProvider'
import type { FavoriteType } from './favorites'

export function FavoriteToggle({ type, id, label }: { type: FavoriteType; id: string; label: string }) {
  const { favorites, toggle } = useFavorites()
  const isSaved = favorites.some((item) => item.type === type && item.id === id)
  const itemName = type === 'rule' ? 'regra' : 'exercício'

  return (
    <button
      aria-label={`${isSaved ? 'Remover' : 'Adicionar'} ${itemName} ${label} ${isSaved ? 'dos' : 'aos'} favoritos`}
      aria-pressed={isSaved}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 font-semibold text-foreground transition hover:bg-surface-raised"
      onClick={() => toggle(type, id)}
      type="button"
    >
      <span aria-hidden="true">{isSaved ? '★' : '☆'}</span>
      {isSaved ? 'Salvo' : 'Favoritar'}
    </button>
  )
}
