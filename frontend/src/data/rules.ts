export type RuleId =
  | 'scoring'
  | 'service'
  | 'three-hits'
  | 'ball-handling'
  | 'net-contact'
  | 'ball-in-or-out'

type RuleSource = {
  title: string
  edition: string
  url: string
  relevantRules: string[]
  reviewedAt: string
}

export type VolleyballRule = {
  id: RuleId
  title: string
  summary: string
  explanation: string
  example: string
  outcome: string
  diagram: {
    fileName: string
    alt: string
  }
  source: RuleSource
}

const fivbSource = {
  title: 'Official Volleyball Rules',
  edition: 'FIVB 2025–2028',
  url: 'https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf',
  reviewedAt: '2026-07-11',
} as const

export const rules: VolleyballRule[] = [
  {
    id: 'scoring',
    title: 'Pontuação',
    summary: 'Cada rally vale um ponto.',
    explanation:
      'Uma equipe faz ponto quando a bola cai na quadra adversária, quando o adversário comete uma falta ou recebe uma penalidade. A equipe que vence o rally continua sacando ou ganha o direito de sacar.',
    example:
      'Depois de uma troca de bolas, seu ataque toca o chão dentro da quadra adversária. Sua equipe marca um ponto.',
    outcome: 'Quem vence o rally recebe um ponto.',
    diagram: {
      fileName: 'scoring.svg',
      alt: 'Bola tocando o chão dentro da quadra adversária para indicar um ponto.',
    },
    source: {
      ...fivbSource,
      relevantRules: ['6.1', '6.2', '6.3'],
    },
  },
  {
    id: 'service',
    title: 'Saque',
    summary: 'O saque coloca a bola em jogo.',
    explanation:
      'Após a autorização do árbitro, a pessoa que saca deve golpear a bola com uma mão ou parte do braço. No instante do golpe, não pode tocar a linha de fundo nem o chão fora da zona de saque.',
    example:
      'Ao sacar, o pé pisa na linha de fundo antes do contato com a bola. Isso é falta de saque.',
    outcome: 'Uma falta de saque dá um ponto e o direito de sacar ao adversário.',
    diagram: {
      fileName: 'service.svg',
      alt: 'Jogador sacando atrás da linha de fundo, sem tocar a linha no momento do golpe.',
    },
    source: {
      ...fivbSource,
      relevantRules: ['12', '12.4', '12.6'],
    },
  },
  {
    id: 'three-hits',
    title: 'Três toques',
    summary: 'A equipe pode usar até três toques para devolver a bola.',
    explanation:
      'Cada equipe tem no máximo três toques para enviar a bola de volta ao outro lado. O contato de bloqueio não entra nessa contagem; depois de bloquear, a equipe ainda pode usar seus três toques.',
    example:
      'Após um bloqueio, a equipe faz recepção, levantamento e ataque. A jogada é válida porque o bloqueio não contou como um dos três toques.',
    outcome: 'Usar quatro toques antes de devolver a bola é falta e dá ponto ao adversário.',
    diagram: {
      fileName: 'three-hits.svg',
      alt: 'Sequência de três contatos da equipe com a bola antes de enviá-la sobre a rede.',
    },
    source: {
      ...fivbSource,
      relevantRules: ['9.1', '9.3.1', '14.4.1'],
    },
  },
  {
    id: 'ball-handling',
    title: 'Condução e dois toques',
    summary: 'A bola deve rebater, sem ser carregada, e o contato precisa seguir as regras.',
    explanation:
      'A bola pode tocar qualquer parte do corpo, mas não pode ser segurada ou lançada: ela deve rebater no contato. Em regra, a mesma pessoa não pode tocar a bola duas vezes seguidas. Existem exceções, como em ações de bloqueio e no primeiro toque da equipe.',
    example:
      'No levantamento, a pessoa segura a bola por um instante antes de empurrá-la. Isso caracteriza condução.',
    outcome: 'Condução ou dois toques irregulares são faltas e dão ponto ao adversário.',
    diagram: {
      fileName: 'ball-handling.svg',
      alt: 'Comparação entre uma bola rebatida e uma bola segurada durante o toque.',
    },
    source: {
      ...fivbSource,
      relevantRules: ['9.1.1', '9.2.2', '9.2.3', '9.3.3', '9.3.4'],
    },
  },
  {
    id: 'net-contact',
    title: 'Toque na rede',
    summary: 'Tocar a rede durante a ação de jogar a bola pode ser falta.',
    explanation:
      'É falta tocar a rede entre as antenas durante uma ação de jogar a bola, como no salto, ataque, tentativa de bloqueio ou aterrissagem. Nem todo contato é falta: tocar a rede fora das antenas sem interferir na jogada, por exemplo, não é automaticamente irregular.',
    example:
      'Ao atacar, a pessoa toca a faixa da rede entre as antenas antes de terminar a ação. É falta.',
    outcome: 'A falta na rede dá ponto ao adversário.',
    diagram: {
      fileName: 'net-contact.svg',
      alt: 'Jogador tocando a rede entre as antenas durante um ataque.',
    },
    source: {
      ...fivbSource,
      relevantRules: ['11.3', '11.4.4'],
    },
  },
  {
    id: 'ball-in-or-out',
    title: 'Bola dentro ou fora',
    summary: 'Se qualquer parte da bola toca a linha, a bola é dentro.',
    explanation:
      'A bola é dentro quando qualquer parte dela toca a quadra, inclusive as linhas. Ela é fora quando todas as partes que tocam o chão ficam completamente fora das linhas.',
    example:
      'A bola cai perto da linha de fundo e uma pequena parte dela toca a linha. A bola é dentro.',
    outcome: 'Se a bola cai dentro da quadra adversária, sua equipe marca ponto; se sai da quadra após seu toque, o ponto é do adversário.',
    diagram: {
      fileName: 'ball-in-or-out.svg',
      alt: 'Bola tocando a linha para indicar bola dentro e bola totalmente fora da linha para indicar bola fora.',
    },
    source: {
      ...fivbSource,
      relevantRules: ['8.3', '8.4'],
    },
  },
]
