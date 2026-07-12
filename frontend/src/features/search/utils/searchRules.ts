import type { VolleyballRule } from '../../rules/data/rules'

const ignoredWords = new Set([
  'a',
  'as',
  'da',
  'das',
  'de',
  'do',
  'dos',
  'e',
  'em',
  'na',
  'nas',
  'no',
  'nos',
  'o',
  'os',
  'para',
  'pode',
  'por',
  'que',
  'um',
  'uma',
])

export function normalizeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/[^\p{Letter}\p{Number}]+/gu, ' ')
    .trim()
}

function getSearchTokens(query: string) {
  return normalizeSearchText(query)
    .split(' ')
    .filter((word) => word.length > 1 && !ignoredWords.has(word))
}

export function searchRules(rules: VolleyballRule[], query: string) {
  const searchTokens = getSearchTokens(query)

  if (searchTokens.length === 0) {
    return []
  }

  return rules.filter((rule) => {
    const searchableText = [rule.title, rule.summary, rule.explanation, ...rule.searchTerms].join(' ')

    const normalizedText = normalizeSearchText(searchableText)

    return searchTokens.every((token) => normalizedText.includes(token))
  })
}
