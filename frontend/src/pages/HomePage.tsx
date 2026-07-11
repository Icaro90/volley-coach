import { Link } from 'react-router'

export function HomePage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">Regras de Vôlei</h1>
      <p className="mt-2 text-slate-600">Página inicial temporária.</p>

      <nav className="mt-6" aria-label="Áreas de aprendizagem">
        <ul className="space-y-2">
          <li>
            <Link className="text-blue-700 underline" to="/rules">
              Regras básicas
            </Link>
          </li>
          <li>
            <Link className="text-blue-700 underline" to="/rotation">
              Rodízio
            </Link>
          </li>
          <li>
            <Link className="text-blue-700 underline" to="/quiz">
              Quiz rápido
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
