import { Link } from 'react-router'

type PlaceholderPageProps = {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
      <p className="mt-2 text-slate-600">{description}</p>
      <Link className="mt-6 inline-block text-blue-700 underline" to="/">
        Voltar para a Home
      </Link>
    </main>
  )
}
