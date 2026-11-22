export type QuizOption = { id: string; text: string }
export type QuizTopic = 'scoring' | 'service' | 'three-hits' | 'ball-handling' | 'ball-in-or-out'
export type QuizDifficulty = 'beginner' | 'intermediate' | 'advanced'

type QuizSource = { title: string; edition: string; url: string; relevantRules: string[]; reviewedAt: string }

export type QuizQuestion = {
  id: string
  topic: QuizTopic
  difficulty: QuizDifficulty
  prompt: string
  options: QuizOption[]
  correctOptionId: string
  explanation: string
  source: QuizSource
}

export const quizTopics: { id: QuizTopic; label: string }[] = [
  { id: 'scoring', label: 'Pontuação e sets' },
  { id: 'service', label: 'Saque' },
  { id: 'three-hits', label: 'Toques e bloqueio' },
  { id: 'ball-handling', label: 'Contato com a bola' },
  { id: 'ball-in-or-out', label: 'Dentro ou fora' },
]

export const quizDifficulties: { id: QuizDifficulty; label: string }[] = [
  { id: 'beginner', label: 'Iniciante' },
  { id: 'intermediate', label: 'Intermediário' },
  { id: 'advanced', label: 'Avançado' },
]

const fivbSource = {
  title: 'Official Volleyball Rules',
  edition: 'FIVB 2025–2028',
  url: 'https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN.pdf',
  reviewedAt: '2026-11-21',
} as const

type QuizSeed = [QuizTopic, QuizDifficulty, string, [string, string, string, string], number, string, string[]]

const seeds: QuizSeed[] = [
  ['scoring','beginner','Quando a bola toca o chão dentro da quadra adversária após um ataque, o que acontece?',['A equipe que atacou marca um ponto.','A jogada é repetida.','O ponto só vale se a equipe estava sacando.','O árbitro escolhe quem saca.'],0,'A equipe que vence o rally recebe um ponto.',['6.1.1.1','6.1.3']],
  ['scoring','beginner','No vôlei, quando uma equipe pode marcar ponto?',['Somente quando está sacando.','Sempre que vence o rally.','Somente após três toques.','Apenas em um ataque.'],1,'O sistema de ponto por rally concede um ponto à equipe que vence cada rally.',['6.1.1']],
  ['scoring','beginner','A equipe que recebe o saque vence o rally. O que ela ganha?',['Um ponto e o direito de sacar.','Dois pontos.','Somente o direito de sacar, sem ponto.','Uma substituição obrigatória.'],0,'A equipe receptora marca o ponto, ganha o saque e roda antes de sacar.',['6.1.3','7.6.2']],
  ['scoring','intermediate','Até quantos pontos vai um set regular, com diferença mínima de dois?',['15','21','25','30'],2,'Os sets regulares são disputados até 25 pontos, sempre com vantagem de dois.',['6.2.1']],
  ['scoring','intermediate','O placar de um set regular chega a 24–24. Como termina?',['No próximo ponto, sem diferença mínima.','Quando uma equipe abrir dois pontos de vantagem.','Quando uma equipe chegar a 30, independentemente da diferença.','Por sorteio.'],1,'O set continua até que uma equipe alcance dois pontos de vantagem.',['6.2.1']],
  ['scoring','intermediate','Qual é a meta de pontos do set decisivo?',['10','15','21','25'],1,'O quinto set decisivo é disputado até 15 pontos, com diferença mínima de dois.',['6.3']],
  ['scoring','advanced','Uma partida termina em melhor de cinco sets. Quantos sets uma equipe precisa vencer para ganhar?',['Dois','Três','Quatro','Cinco'],1,'A partida termina quando uma equipe vence três sets.',['6.3']],
  ['scoring','advanced','No set decisivo, uma equipe chega a 8 pontos primeiro. O que as equipes fazem?',['Trocam de lado sem interromper a contagem.','Reiniciam o set.','Trocam de lado e zeram o placar.','Fazem uma substituição obrigatória.'],0,'No set decisivo, as equipes trocam de lado quando a equipe líder alcança 8 pontos; o placar é mantido.',['18.2']],
  ['scoring','advanced','O placar do set decisivo fica 14–14. Qual é a condição para vencer?',['Chegar a 15 pontos, mesmo sem vantagem.','Abrir dois pontos de vantagem.','Ser a equipe que sacou primeiro.','Vencer dois rallies seguidos e encerrar, independentemente do placar.'],1,'Mesmo no set decisivo, é necessária uma vantagem de dois pontos.',['6.3']],

  ['service','beginner','Quando o saque pode ser executado?',['Depois do apito de autorização do primeiro árbitro.','Assim que a bola chega ao sacador.','Depois que a equipe adversária fizer três toques.','A qualquer momento entre os rallies.'],0,'O primeiro árbitro autoriza o saque com apito após verificar que as equipes estão prontas e o sacador tem a bola.',['12.3']],
  ['service','beginner','Após o apito de autorização, em quanto tempo o sacador deve golpear a bola?',['5 segundos','8 segundos','10 segundos','15 segundos'],1,'O sacador deve golpear a bola dentro de 8 segundos após o apito.',['12.4.4']],
  ['service','beginner','O sacador golpeia a bola antes do apito. Qual é a decisão?',['O saque vale se passar pela rede.','O saque é cancelado e repetido.','O adversário recebe dois pontos.','O rally continua normalmente.'],1,'Um saque executado antes do apito é cancelado e repetido.',['12.4.5']],
  ['service','intermediate','No instante do golpe de saque, o pé do sacador pode tocar a linha de fundo?',['Sim, desde que a bola passe pela rede.','Não.','Sim, se for o primeiro saque do set.','Somente no saque por baixo.'],1,'No instante do golpe, o sacador não pode tocar a quadra, incluindo a linha de fundo, nem o chão fora da zona de saque.',['12.4.3']],
  ['service','intermediate','Quantos lançamentos ou liberações da bola são permitidos antes do saque?',['Um.','Dois.','Três.','Não há limite.'],0,'É permitido somente um lançamento ou liberação da bola; movimentá-la nas mãos ou quicá-la é permitido.',['12.4.2']],
  ['service','intermediate','Depois de golpear o saque, o sacador pode pisar dentro da quadra?',['Não, até o fim do rally.','Sim.','Somente após o adversário tocar na bola.','Apenas se o saque tocar na rede.'],1,'Depois do golpe, o sacador pode pisar dentro da quadra ou fora da zona de saque.',['12.4.3']],
  ['service','advanced','A equipe receptora vence o rally. Quem saca após a rotação?',['A pessoa que estava na posição 1 antes da rotação.','A pessoa que passa da posição 2 para a posição 1.','Qualquer pessoa da linha de trás.','A pessoa que fez o último ataque.'],1,'A equipe receptora roda; quem passa da posição dianteira direita para a posição traseira direita, agora posição 1, saca.',['12.2.2.2','7.6.2']],
  ['service','advanced','Quando o saque é considerado ocultado por uma barreira (screening)?',['Quando jogadores do saque impedem a equipe receptora de ver o golpe e a trajetória da bola.','Sempre que há três jogadores na rede.','Quando o sacador usa um saque por cima.','Quando a bola passa perto da antena.'],0,'Jogadores da equipe sacadora não podem ocultar do adversário o golpe de saque e a trajetória da bola até o plano vertical da rede.',['12.5.1','12.5.2']],
  ['service','advanced','A equipe sacadora forma uma barreira, mas o sacador e a trajetória permanecem visíveis. Isso é falta de barreira?',['Sim, qualquer grupo de jogadores configura falta.','Não, se o golpe e a trajetória permanecem visíveis.','Sim, sempre que jogadores estão na linha de frente.','Não, porque a regra de barreira não se aplica a saques por cima.'],1,'A barreira depende de impedir a visão do golpe e da trajetória; se ambos são visíveis, não há screening.',['12.5.1','12.5.2']],

  ['three-hits','beginner','Quantos toques de equipe podem devolver a bola ao adversário, sem contar o bloqueio?',['Um','Dois','Três','Quatro'],2,'A equipe tem até três toques para devolver a bola; o toque de bloqueio não entra nessa contagem.',['9.1','14.4.1']],
  ['three-hits','beginner','O bloqueio toca a bola. Quantos toques de equipe ainda restam?',['Um','Dois','Três','Nenhum'],2,'O toque de bloqueio não conta como um dos três toques da equipe.',['14.4.1']],
  ['three-hits','beginner','Depois de bloquear, a mesma pessoa pode tocar a bola novamente?',['Sim, o bloqueio não impede que ela faça o próximo toque.','Não, o bloqueador fica impedido de tocar.','Somente se outra pessoa já tocou duas vezes.','Apenas se o toque for com o pé.'],0,'Depois do bloqueio, qualquer jogador pode fazer o primeiro toque da equipe, inclusive a pessoa que bloqueou.',['14.4.2']],
  ['three-hits','intermediate','Depois de dois toques de equipe, o bloqueio adversário desvia a bola. Quantos toques restam?',['Um','Dois','Três','Nenhum'],1,'O bloqueio não conta como toque de equipe; depois de dois toques anteriores, restam dois.',['9.1','14.4.1']],
  ['three-hits','intermediate','Uma equipe toca a bola quatro vezes antes de devolvê-la, sem um bloqueio entre os toques. O que ocorre?',['A jogada continua se o quarto toque for leve.','É falta de quatro toques.','O ponto é repetido.','O árbitro conta apenas os três últimos.'],1,'Uma equipe não pode tocar a bola mais de três vezes antes de devolvê-la; o bloqueio não conta como toque da equipe.',['9.1','9.3.1']],
  ['three-hits','intermediate','Uma pessoa bloqueia e imediatamente faz o toque seguinte da equipe. Isso é permitido?',['Sim.','Não, a mesma pessoa não pode tocar em sequência.','Somente se a bola já tiver cruzado a rede.','Apenas no primeiro toque do set.'],0,'O toque de bloqueio não é contado como toque da equipe; o bloqueador pode fazer o próximo toque.',['14.4.2']],
  ['three-hits','advanced','Uma jogadora toca a bola duas vezes durante uma única ação no primeiro toque da equipe. Como se avalia?',['Pode ser permitido, se os contatos ocorrerem durante uma única ação.','É sempre falta de dois toques.','Conta automaticamente como dois toques de equipe.','Só é permitido após o bloqueio.'],0,'No primeiro toque da equipe, contatos consecutivos com diferentes partes do corpo podem ocorrer durante uma única ação.',['9.2.3.2']],
  ['three-hits','advanced','Depois de um bloqueio, a equipe recebe a bola e faz mais três toques antes de devolvê-la. Quantos toques de equipe houve?',['Dois','Três','Quatro','Cinco'],1,'O contato de bloqueio não entra na contagem; os três contatos seguintes são os três toques da equipe.',['9.1','14.4.1']],
  ['three-hits','advanced','Duas pessoas da mesma equipe tocam a bola simultaneamente fora de uma ação de bloqueio. Como a equipe contabiliza o lance?',['Como um toque de equipe; ambas podem jogar a bola no toque seguinte.','Como dois toques; apenas uma pode jogar depois.','Como falta automática.','Como zero toques.'],0,'Contatos simultâneos de companheiros contam como um toque, exceto quando ocorre um bloqueio; qualquer uma das duas pode fazer o toque seguinte.',['9.1.2.1','9.1.2.2']],

  ['ball-handling','beginner','Quais partes do corpo podem tocar a bola?',['Somente mãos e antebraços.','Qualquer parte do corpo.','Somente acima da cintura.','Somente mãos, cabeça ou pés.'],1,'A bola pode tocar qualquer parte do corpo, desde que o contato não seja um toque retido ou lançado.',['9.2.1','9.2.2']],
  ['ball-handling','beginner','Uma pessoa segura a bola por um instante e depois a empurra. O que é marcado?',['Jogada válida se for o primeiro toque.','Condução ou toque retido.','Bloqueio.','Bola dentro.'],1,'A bola deve rebater no contato; segurá-la ou lançá-la caracteriza falta.',['9.2.2','9.3.3']],
  ['ball-handling','beginner','A bola bate na mão e depois no ombro da mesma pessoa durante um toque claramente contínuo. Como analisar?',['Pode ser permitido se os contatos ocorrerem em uma única ação no primeiro toque da equipe.','É sempre falta.','Conta como dois toques de equipe.','Só é permitido em um bloqueio.'],0,'No primeiro toque da equipe, contatos sucessivos com diferentes partes do corpo podem ocorrer durante uma única ação.',['9.2.3.2']],
  ['ball-handling','intermediate','Após o primeiro toque controlado da equipe, a mesma pessoa pode tocar a bola duas vezes em sequência?',['Não, salvo uma exceção prevista para o primeiro toque ou após bloqueio.','Sim, em qualquer situação.','Sim, se usar partes diferentes do corpo.','Apenas se a bola estiver perto da rede.'],0,'Em regra, uma pessoa não pode tocar a bola duas vezes consecutivas; há exceções específicas para o primeiro toque da equipe e para depois de um bloqueio.',['9.2.3','9.2.3.2','14.4.2']],
  ['ball-handling','intermediate','O primeiro toque da equipe recebe uma bola de ataque e há contatos sucessivos durante uma única tentativa de defesa. O que pode ser permitido?',['Vários contatos na mesma ação.','Somente um contato corporal.','No máximo dois contatos, sempre.','Apenas se a bola tocar a rede.'],0,'A regra permite contatos sucessivos com diferentes partes do corpo durante uma única ação no primeiro toque da equipe.',['9.2.3.2']],
  ['ball-handling','intermediate','A bola repousa visivelmente nas mãos de quem levanta antes de ser enviada. Qual é o problema?',['O contato foi retido, em vez de um rebote limpo.','A bola ficou dentro.','A equipe usou somente dois toques.','Não há falta se o levantamento for alto.'],0,'Um toque retido ou lançado é falta, independentemente da altura do levantamento.',['9.2.2','9.3.3']],
  ['ball-handling','advanced','Duas pessoas da mesma equipe tocam simultaneamente a bola em uma jogada que não é de bloqueio. O contato vale como quantos toques de equipe?',['Um','Dois','Três','Nenhum'],0,'Contatos simultâneos de companheiros contam como um toque da equipe, salvo quando ocorre um bloqueio.',['9.1.2.1']],
  ['ball-handling','advanced','Após um contato simultâneo de duas companheiras, qual delas pode tocar a bola em seguida?',['Qualquer uma das duas.','Somente quem estava mais perto da rede.','Nenhuma das duas.','Somente a levantadora.'],0,'Depois do contato simultâneo entre companheiras, qualquer uma delas pode fazer o toque seguinte.',['9.1.2.2']],
  ['ball-handling','advanced','Uma pessoa ataca a bola e depois faz outro contato consecutivo, sem que outra pessoa ou o bloqueio toque nela. O que se aplica?',['Falta de dois toques consecutivos, salvo exceção regulamentar.','Jogada sempre válida após o ataque.','A contagem da equipe reinicia.','O contato seguinte conta como bloqueio.'],0,'A regra geral impede que a mesma pessoa toque duas vezes consecutivas, com exceções limitadas para ações específicas.',['9.2.3']],

  ['ball-in-or-out','beginner','A bola cai sobre a linha lateral. Ela é dentro ou fora?',['Dentro.','Fora.','Só é dentro se a maior parte tocar a quadra.','O rally é repetido.'],0,'A bola é dentro quando toca o chão da quadra, incluindo qualquer linha de delimitação.',['8.3']],
  ['ball-in-or-out','beginner','A bola cai completamente além das linhas da quadra, sem tocar nenhuma delas. Como é marcada?',['Dentro.','Fora.','Bola presa.','Ponto repetido.'],1,'A bola é fora quando toca o chão completamente fora das linhas de delimitação.',['8.4.1']],
  ['ball-in-or-out','beginner','A bola toca a antena durante a jogada. O que isso indica?',['A bola é fora.','O rally continua se tocar na rede.','A bola é dentro.','O ponto é repetido.'],0,'Tocar a antena é uma das situações em que a bola é considerada fora.',['8.4.3']],
  ['ball-in-or-out','intermediate','A bola toca a linha de fundo por uma pequena parte. Como é considerada?',['Dentro, pois tocou a linha.','Fora, pois a maior parte ficou fora.','Fora, salvo no saque.','Rally repetido.'],0,'Qualquer parte da bola que toca a quadra ou uma linha torna a bola dentro.',['8.3']],
  ['ball-in-or-out','intermediate','A bola cruza o plano da rede por fora da antena e não pela área de cruzamento permitida. Como se considera?',['Fora.','Dentro se cair na quadra.','Válida se passar acima da rede.','Rally repetido.'],0,'A bola deve cruzar a rede dentro do espaço de cruzamento; cruzar por fora da antena caracteriza bola fora.',['10.1.1','8.4.4']],
  ['ball-in-or-out','intermediate','A bola toca a antena depois de um ataque. A equipe atacante pode continuar o rally?',['Não; a bola é fora.','Sim, se tocar no chão da quadra adversária.','Sim, se o bloqueio tocar nela primeiro.','Só se era o terceiro toque.'],0,'O contato da bola com a antena torna a bola fora.',['8.4.3']],
  ['ball-in-or-out','advanced','Uma bola toca uma linha de delimitação e depois quica para fora da quadra. Qual é a decisão?',['Dentro, porque tocou a linha.','Fora, porque terminou fora.','Rally repetido.','Depende de qual equipe sacava.'],0,'A bola é dentro se qualquer parte dela toca a quadra ou uma linha no primeiro contato com o chão.',['8.3']],
  ['ball-in-or-out','advanced','A bola toca um objeto fora da quadra antes de cair. Como é marcada?',['Fora.','Dentro se ninguém tocou nela.','Válida se o objeto for baixo.','Rally repetido sempre.'],0,'Tocar um objeto fora da quadra, o teto ou uma pessoa fora da jogada torna a bola fora.',['8.4.2']],
  ['ball-in-or-out','advanced','A bola toca o piso além da linha, mas uma parte dela ainda sobrepõe a linha. Como se marca?',['Dentro.','Fora.','Rally repetido.','Só vale se a equipe adversária a tocar.'],0,'A decisão depende do contato da bola com a quadra: sobrepor/tocar a linha conta como dentro.',['8.3']],
]

export const quizQuestions: QuizQuestion[] = seeds.map(([topic, difficulty, prompt, texts, correctIndex, explanation, relevantRules], index) => ({
  id: `${topic}-${difficulty}-${index + 1}`,
  topic,
  difficulty,
  prompt,
  options: texts.map((text, optionIndex) => ({ id: String.fromCharCode(97 + optionIndex), text })),
  correctOptionId: String.fromCharCode(97 + correctIndex),
  explanation,
  source: { ...fivbSource, relevantRules },
}))

export const topicLabels = Object.fromEntries(quizTopics.map((topic) => [topic.id, topic.label])) as Record<QuizTopic, string>
export const difficultyLabels = Object.fromEntries(quizDifficulties.map((difficulty) => [difficulty.id, difficulty.label])) as Record<QuizDifficulty, string>

export function isQuizQuestionList(value: unknown): value is QuizQuestion[] {
  return Array.isArray(value) && value.every((item) => item && typeof item === 'object' && typeof item.id === 'string' && typeof item.prompt === 'string')
}
