import { Link } from 'react-router'
import { AppHeader } from '../../shared/components/AppHeader'

const sections = [
  {
    title: 'Entender o jogo',
    links: [
      { title: 'Rodízio', description: 'Posições e ordem de saque', path: '/rotation', icon: '🔄' },
      { title: 'Consulta rápida', description: 'Respostas curtas para a quadra', path: '/quick-reference', icon: '⚡' },
      { title: 'Glossário', description: 'Termos e fundamentos do vôlei', path: '/glossary', icon: '📖' },
    ],
  },
  {
    title: 'Acompanhar treinos e jogos',
    links: [
      { title: 'Diário de treino', description: 'Registre o que praticou', path: '/diary', icon: '📝' },
      { title: 'Scout de partida', description: 'Placar e eventos do jogo', path: '/scout', icon: '📊' },
    ],
  },
  {
    title: 'Gestão do time e partidas',
    links: [
      { title: 'Placar de partida', description: 'Contagem rápida de pontos e sets', path: '/scoreboard', icon: '🏐' },
      { title: 'Gestão do time', description: 'Atletas, presença e planos de jogo', path: '/team', icon: '👥' },
      { title: 'Modo de quadra', description: 'Controles grandes e cronômetro', path: '/court-mode', icon: '⏱️' },
      { title: 'Backup de dados', description: 'Exportar e importar seus registros', path: '/backup', icon: '💾' },
    ],
  },
]

export function MorePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <AppHeader />
      <main className="mx-auto max-w-2xl px-5 pb-10 pt-9 sm:px-8 sm:pt-12">
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">Explore</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Mais recursos</h1>
        <p className="mt-3 leading-7 text-muted">Ferramentas para aprender, treinar e acompanhar suas partidas.</p>

        {sections.map((section) => (
          <section aria-labelledby={`more-${section.title}`} className="mt-8" key={section.title}>
            <h2 className="text-lg font-bold text-foreground" id={`more-${section.title}`}>{section.title}</h2>
            <ul className="mt-3 divide-y divide-border border-y border-border">
              {section.links.map((item) => (
                <li key={item.path}>
                  <Link className="flex min-h-16 items-center gap-3 py-3 text-foreground transition hover:text-accent" to={item.path}>
                    <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-xl">{item.icon}</span>
                    <span className="min-w-0 flex-1"><span className="block font-semibold">{item.title}</span><span className="mt-0.5 block text-sm text-muted">{item.description}</span></span>
                    <span aria-hidden="true" className="text-xl text-muted">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  )
}
