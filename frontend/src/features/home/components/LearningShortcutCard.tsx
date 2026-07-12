import { Link } from 'react-router'
import type { HomeShortcut } from '../data/homeShortcuts'

type LearningShortcutCardProps = {
  shortcut: HomeShortcut
}

export function LearningShortcutCard({ shortcut }: LearningShortcutCardProps) {
  return (
    <li className="h-full">
      <Link
        className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent hover:bg-surface-raised hover:shadow-md"
        to={shortcut.path}
      >
        <span aria-hidden="true" className="text-2xl">
          {shortcut.icon}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-foreground">{shortcut.title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted">{shortcut.description}</p>
      </Link>
    </li>
  )
}
