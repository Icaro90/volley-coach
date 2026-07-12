import { Link } from 'react-router'
import type { VolleyballRule } from '../data/rules'

type RuleListItemProps = {
  rule: VolleyballRule
}

export function RuleListItem({ rule }: RuleListItemProps) {
  return (
    <li>
      <Link
        className="block rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent hover:bg-surface-raised hover:shadow-md"
        to={`/rules/${rule.id}`}
      >
        <h2 className="text-lg font-semibold text-foreground">{rule.title}</h2>
        <p className="mt-1 text-sm leading-6 text-muted">{rule.summary}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-accent">
          Ver explicação →
        </span>
      </Link>
    </li>
  )
}
