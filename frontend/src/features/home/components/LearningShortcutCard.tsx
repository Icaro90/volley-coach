import { Link } from 'react-router'
import type { HomeShortcut } from '../data/homeShortcuts'

type LearningShortcutCardProps = {
  shortcut: HomeShortcut
}

export function LearningShortcutCard({ shortcut }: LearningShortcutCardProps) {
  return (
    <li className="min-w-0">
      <Link
        className="flex min-h-28 h-full flex-col items-start rounded-xl border border-border bg-surface p-4 transition hover:border-accent hover:bg-surface-raised sm:p-5"
        to={shortcut.path}
      >
        <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-subtle text-xl">
          {shortcut.icon}
        </span>
        <h3 className="mt-3 text-base font-semibold text-foreground">{shortcut.title}</h3>
        <p className="mt-1 text-sm leading-5 text-muted">{shortcut.description}</p>
      </Link>
    </li>
  )
}
