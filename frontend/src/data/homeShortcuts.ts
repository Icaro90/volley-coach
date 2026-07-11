export type HomeShortcut = {
  title: string
  description: string
  path: '/rules' | '/rotation' | '/quiz'
  icon: string
}

export const homeShortcuts: HomeShortcut[] = [
  {
    title: 'Regras básicas',
    description: 'Saque, pontos, toques e faltas.',
    path: '/rules',
    icon: '📘',
  },
  {
    title: 'Rodízio',
    description: 'Entenda posições e a ordem em quadra.',
    path: '/rotation',
    icon: '🔄',
  },
  {
    title: 'Quiz rápido',
    description: 'Teste seus conhecimentos em poucos minutos.',
    path: '/quiz',
    icon: '🧠',
  },
]
