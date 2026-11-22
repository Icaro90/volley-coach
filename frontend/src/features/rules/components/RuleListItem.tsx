import { Link } from 'react-router'
import { FavoriteToggle } from '../../../shared/favorites/FavoriteToggle'
import type { VolleyballRule } from '../data/rules'

type RuleListItemProps = {
  rule: VolleyballRule
}

export function RuleListItem({ rule }: RuleListItemProps) {
  return (
    <li className="rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <Link className="min-w-0 flex-1 rounded-lg" to={`/rules/${rule.id}`}>
          <h2 className="text-lg font-semibold text-foreground">{rule.title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted">{rule.summary}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-accent">Ver explicação →</span>
        </Link>
        <FavoriteToggle id={rule.id} label={rule.title} type="rule" />
      </div>
    </li>
  )
}
