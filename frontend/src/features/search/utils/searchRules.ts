import type { VolleyballRule } from '../../rules/data/rules'

export function normalizeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('pt-BR')
    .trim()
}

export function searchRules(rules: VolleyballRule[], query: string) {
  const normalizedQuery = normalizeSearchText(query)

  if (!normalizedQuery) {
    return []
  }

  return rules.filter((rule) => {
    const searchableText = [rule.title, rule.summary, rule.explanation].join(' ')

    return normalizeSearchText(searchableText).includes(normalizedQuery)
  })
}
