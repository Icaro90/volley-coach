import { Link, useLocation } from 'react-router'
import { ThemeToggle } from './ThemeToggle'

export function AppHeader() {
  const { pathname } = useLocation()
  const morePaths = ['/more', '/rotation', '/diary', '/quick-reference', '/glossary', '/scout', '/team', '/scoreboard', '/court-mode', '/backup']
  const currentTab = pathname === '/' ? 'home' : pathname === '/search' ? 'search' : pathname.startsWith('/training') ? 'training' : morePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`)) ? 'more' : null
  const links = [
    { id: 'home', label: 'Início', path: '/', icon: '⌂' },
    { id: 'search', label: 'Buscar', path: '/search', icon: '⌕' },
    { id: 'training', label: 'Treinos', path: '/training', icon: '🏐' },
    { id: 'more', label: 'Mais', path: '/more', icon: '☰' },
  ]

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-5 py-3 sm:px-8">
          <Link aria-label="Volley Coach — início" className="flex min-h-11 items-center gap-2 rounded-lg font-semibold text-foreground" to="/">
            <span aria-hidden="true" className="text-xl">🏐</span><span>Volley Coach</span>
          </Link>
          <div className="ml-auto"><ThemeToggle /></div>
        </div>
      </header>
      <nav aria-label="Navegação principal" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto grid max-w-5xl grid-cols-4 px-2 sm:px-8">
          {links.map((link) => {
            const isCurrent = currentTab === link.id
            return <Link aria-current={isCurrent ? 'page' : undefined} className={`flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-lg text-xs font-semibold transition hover:bg-surface-raised ${isCurrent ? 'text-accent-strong' : 'text-muted'}`} key={link.id} to={link.path}>
              <span aria-hidden="true" className="text-xl leading-none">{link.icon}</span><span>{link.label}</span>
            </Link>
          })}
        </div>
      </nav>
    </>
  )
}
