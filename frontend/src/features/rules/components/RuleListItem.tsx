import { Link } from 'react-router'
import type { VolleyballRule } from '../data/rules'

type RuleListItemProps = {
  rule: VolleyballRule
}

export function RuleListItem({ rule }: RuleListItemProps) {
  return (
    <li>
      <Link
        className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-orange-300 hover:shadow-md"
        to={`/rules/${rule.id}`}
      >
        <h2 className="text-lg font-semibold text-slate-900">{rule.title}</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">{rule.summary}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-orange-700">
          Ver explicação →
        </span>
      </Link>
    </li>
  )
}
