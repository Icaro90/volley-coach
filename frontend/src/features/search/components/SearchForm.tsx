import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'

export function SearchForm() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      setError('Digite uma dúvida para pesquisar uma regra.')
      return
    }

    setError('')
    navigate(`/search?${new URLSearchParams({ q: trimmedQuery }).toString()}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="rule-search">
        Pesquisar uma regra
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm">
          <span aria-hidden="true" className="text-slate-500">
            🔎
          </span>
          <input
            aria-describedby={error ? 'search-error' : undefined}
            aria-invalid={Boolean(error)}
            className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
            id="rule-search"
            name="query"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pesquisar uma regra..."
            type="search"
            value={query}
          />
        </div>
        <button
          className="rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
          type="submit"
        >
          Buscar
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-700" id="search-error" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
