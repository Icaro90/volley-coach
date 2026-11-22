import type { RuleId } from '../../rules/data/rules'

export type QuickReferenceItem = { ruleId: RuleId; question: string; answer: string }

export const quickReferenceItems: QuickReferenceItem[] = [
  { ruleId: 'scoring', question: 'Quem ganha o rally marca ponto?', answer: 'Sim. Cada rally concede um ponto à equipe vencedora.' },
  { ruleId: 'service', question: 'O pé pode tocar a linha no saque?', answer: 'Não no instante do golpe. Depois do contato, o sacador pode pisar na quadra.' },
  { ruleId: 'three-hits', question: 'O bloqueio conta como um dos três toques?', answer: 'Não. Depois do bloqueio, a equipe ainda pode fazer até três toques.' },
  { ruleId: 'ball-handling', question: 'Pode segurar ou carregar a bola?', answer: 'Não. A bola deve rebater no contato; segurá-la ou lançá-la é falta.' },
  { ruleId: 'net-contact', question: 'Tocar a rede durante a ação de jogar a bola é permitido?', answer: 'Em geral, não. Tocar a rede entre as antenas durante a ação de jogar a bola é falta.' },
  { ruleId: 'ball-in-or-out', question: 'Bola que toca a linha é dentro?', answer: 'Sim. Qualquer parte da bola que toca a quadra ou uma linha é dentro.' },
  { ruleId: 'center-line-invasion', question: 'Pode pisar na quadra adversária por baixo da rede?', answer: 'Só é permitido se alguma parte do pé permanecer sobre ou acima da linha central e a invasão não interferir no adversário.' },
  { ruleId: 'block', question: 'Quem está na linha de trás pode bloquear?', answer: 'Não. Somente jogadores da linha da frente podem completar um bloqueio.' },
  { ruleId: 'substitution', question: 'Uma substituição pode ser feita em qualquer momento?', answer: 'Não. Ela deve ocorrer durante uma interrupção e seguir o procedimento de substituição.' },
  { ruleId: 'back-row-attack', question: 'Jogador da linha de trás pode atacar?', answer: 'Pode, desde que não complete o ataque da zona da frente quando a bola estiver inteiramente acima do topo da rede.' },
]

export function searchQuickReference(query: string) {
  const normalized = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim()
  if (!normalized) return quickReferenceItems
  return quickReferenceItems.filter((item) => `${item.question} ${item.answer}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').includes(normalized))
}
