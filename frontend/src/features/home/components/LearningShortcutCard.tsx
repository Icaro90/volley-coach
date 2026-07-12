import { Link } from 'react-router'
import type { HomeShortcut } from '../data/homeShortcuts'

type LearningShortcutCardProps = {
  shortcut: HomeShortcut
}

export function LearningShortcutCard({ shortcut }: LearningShortcutCardProps) {
  return (
    <li>
      <Link
        className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-orange-300 hover:shadow-md"
        to={shortcut.path}
      >
        <span aria-hidden="true" className="text-2xl">
          {shortcut.icon}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">{shortcut.title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{shortcut.description}</p>
      </Link>
    </li>
  )
}
