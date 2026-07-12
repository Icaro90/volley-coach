export type QuizOption = {
  id: string
  text: string
}

type QuizSource = {
  title: string
  edition: string
  url: string
  relevantRules: string[]
  reviewedAt: string
}

export type QuizQuestion = {
  id: string
  topic: 'scoring' | 'service' | 'three-hits' | 'ball-handling' | 'ball-in-or-out'
  prompt: string
  options: QuizOption[]
  correctOptionId: string
  explanation: string
  source: QuizSource
}

const fivbSource = {
  title: 'Official Volleyball Rules',
  edition: 'FIVB 2025–2028',
  url: 'https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf',
  reviewedAt: '2026-07-11',
} as const

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'point-after-ball-lands',
    topic: 'scoring',
    prompt: 'Seu ataque toca o chão dentro da quadra adversária. O que acontece?',
    options: [
      { id: 'a', text: 'Sua equipe marca um ponto.' },
      { id: 'b', text: 'A jogada continua até outra equipe sacar.' },
      { id: 'c', text: 'O ponto só vale se o saque foi da sua equipe.' },
      { id: 'd', text: 'A equipe adversária ganha o direito de escolher o saque.' },
    ],
    correctOptionId: 'a',
    explanation: 'A equipe marca ponto quando a bola toca com sucesso a quadra adversária.',
    source: { ...fivbSource, relevantRules: ['6.1.1.1'] },
  },
  {
    id: 'service-foot-on-line',
    topic: 'service',
    prompt: 'No instante do saque, o pé da pessoa que saca toca a linha de fundo. A jogada é válida?',
    options: [
      { id: 'a', text: 'Sim, porque o pé pode tocar a linha depois do apito.' },
      { id: 'b', text: 'Sim, se a bola passar por cima da rede.' },
      { id: 'c', text: 'Não, é falta de saque.' },
      { id: 'd', text: 'Não, mas a equipe pode repetir o saque.' },
    ],
    correctOptionId: 'c',
    explanation: 'No momento do golpe de saque, a pessoa não pode tocar a linha de fundo.',
    source: { ...fivbSource, relevantRules: ['12.4.4'] },
  },
  {
    id: 'three-hits-after-block',
    topic: 'three-hits',
    prompt: 'Depois de bloquear a bola, quantos toques sua equipe ainda pode usar para devolvê-la?',
    options: [
      { id: 'a', text: 'Dois toques, porque o bloqueio conta como o primeiro.' },
      { id: 'b', text: 'Três toques, porque o bloqueio não entra na contagem.' },
      { id: 'c', text: 'Um toque, porque o bloqueio encerra a jogada.' },
      { id: 'd', text: 'Quatro toques, porque houve um bloqueio.' },
    ],
    correctOptionId: 'b',
    explanation: 'O bloqueio não conta como um dos três toques permitidos para devolver a bola.',
    source: { ...fivbSource, relevantRules: ['9.1', '14.4.1'] },
  },
  {
    id: 'holding-the-ball',
    topic: 'ball-handling',
    prompt: 'Durante o levantamento, a pessoa segura a bola por um instante e depois a empurra. O que é marcado?',
    options: [
      { id: 'a', text: 'Condução, porque a bola foi segurada em vez de rebater.' },
      { id: 'b', text: 'Ponto direto para a equipe que levantou.' },
      { id: 'c', text: 'Bloqueio, porque a bola ficou parada.' },
      { id: 'd', text: 'Jogada válida, se for o primeiro toque da equipe.' },
    ],
    correctOptionId: 'a',
    explanation: 'A bola deve rebater no contato; segurá-la ou lançá-la caracteriza condução.',
    source: { ...fivbSource, relevantRules: ['9.2.2', '9.3.3'] },
  },
  {
    id: 'ball-touching-line',
    topic: 'ball-in-or-out',
    prompt: 'A bola cai perto da linha e uma pequena parte dela toca a linha. A bola é dentro ou fora?',
    options: [
      { id: 'a', text: 'Fora, porque a maior parte da bola caiu fora.' },
      { id: 'b', text: 'Dentro, porque qualquer parte da bola tocou a linha.' },
      { id: 'c', text: 'Fora, porque somente a bola inteira sobre a linha vale.' },
      { id: 'd', text: 'A jogada deve ser repetida.' },
    ],
    correctOptionId: 'b',
    explanation: 'A bola é dentro quando qualquer parte dela toca a quadra, inclusive a linha.',
    source: { ...fivbSource, relevantRules: ['8.3'] },
  },
]
