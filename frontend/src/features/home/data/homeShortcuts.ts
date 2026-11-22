export type HomeShortcut = {
  title: string
  description: string
  path: string
  icon: string
}

export const homeShortcuts: HomeShortcut[] = [
  { title: 'Regras', description: 'Tire dúvidas sobre o jogo.', path: '/rules', icon: '📘' },
  { title: 'Treinos', description: 'Pratique um fundamento.', path: '/training', icon: '🏐' },
  { title: 'Quiz', description: 'Teste o que você aprendeu.', path: '/quiz', icon: '🧠' },
  { title: 'Favoritos', description: 'Acesse o que você salvou.', path: '/favorites', icon: '⭐' },
]
