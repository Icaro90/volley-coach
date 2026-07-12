import type { ReactNode } from 'react'
import { Link } from 'react-router'

type BackLinkProps = {
  children: ReactNode
  to: string
}

export function BackLink({ children, to }: BackLinkProps) {
  return (
    <Link
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-100"
      to={to}
    >
      <span aria-hidden="true">←</span>
      {children}
    </Link>
  )
}
