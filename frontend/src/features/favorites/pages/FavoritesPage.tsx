import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { useFavorites } from '../../../shared/favorites/FavoritesProvider'
import { exercises } from '../../training/data/exercises'
import { rules } from '../../rules/data/rules'

export function FavoritesPage() {
  const { favorites, remove, isSaved } = useFavorites()
  const items = favorites.map((favorite) => {
    const item = favorite.type === 'rule'
      ? rules.find((rule) => rule.id === favorite.id)
      : exercises.find((exercise) => exercise.id === favorite.id)
    return item ? { favorite, title: item.title, description: 'summary' in item ? item.summary : item.objective, path: favorite.type === 'rule' ? `/rules/${item.id}` : `/training/${item.id}` } : null
  }).filter((item) => item !== null).sort((a, b) => b.favorite.savedAt.localeCompare(a.favorite.savedAt))

  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
        <BackLink to="/">Voltar para a Home</BackLink>
        <h1 className="mt-6 text-4xl font-bold text-foreground">Favoritos</h1>
        <p className="mt-3 leading-7 text-muted">Regras e exercícios salvos para encontrar com rapidez neste dispositivo.</p>
        {!isSaved && <p className="mt-4 rounded-lg border border-danger-border bg-danger-subtle p-3 text-sm text-muted" role="status">Não foi possível salvar alterações neste dispositivo.</p>}
        {items.length ? <ul className="mt-7 space-y-3">{items.map(({ favorite, title, description, path }) => (
          <li className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4" key={`${favorite.type}:${favorite.id}`}>
            <Link className="min-w-0 flex-1 rounded-lg" to={path}><h2 className="font-semibold text-foreground">{title}</h2><p className="mt-1 text-sm text-muted">{description}</p></Link>
            <button className="min-h-11 rounded-lg border border-border px-3 font-semibold text-foreground hover:bg-surface-raised" onClick={() => remove(favorite.type, favorite.id)} type="button">Remover</button>
          </li>
        ))}</ul> : (
          <section className="mt-7 rounded-xl border border-border bg-surface p-6" aria-labelledby="empty-title"><h2 className="text-lg font-semibold text-foreground" id="empty-title">Sua lista está vazia</h2><p className="mt-2 text-muted">Use o botão Favoritar em uma regra ou exercício para salvá-lo aqui.</p><Link className="mt-4 inline-block min-h-11 rounded-lg bg-accent-strong px-4 py-3 font-semibold text-accent-foreground" to="/rules">Explorar regras</Link></section>
        )}
        <p className="mt-7 text-xs leading-5 text-muted">Os favoritos ficam neste navegador ou instalação do app. Limpar os dados do app pode apagá-los.</p>
      </main>
    </div>
  )
}
