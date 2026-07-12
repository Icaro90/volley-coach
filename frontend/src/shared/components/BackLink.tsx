import type { ReactNode } from 'react'
import { Link } from 'react-router'

type BackLinkProps = {
  children: ReactNode
  to: string
}

export function BackLink({ children, to }: BackLinkProps) {
  return (
    <Link
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-raised"
      to={to}
    >
      <span aria-hidden="true">←</span>
      {children}
    </Link>
  )
}
