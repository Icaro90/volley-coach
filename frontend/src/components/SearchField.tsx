export function SearchField() {
  return (
    <div>
      <label className="sr-only" htmlFor="rule-search">
        Pesquisar uma regra
      </label>
      <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm">
        <span aria-hidden="true" className="text-slate-500">
          🔎
        </span>
        <input
          className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
          id="rule-search"
          name="rule-search"
          placeholder="Pesquisar uma regra..."
          type="search"
        />
      </div>
    </div>
  )
}
