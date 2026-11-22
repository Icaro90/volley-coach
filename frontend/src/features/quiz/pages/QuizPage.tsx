import { useMemo, useReducer, useState } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { QuizFeedback } from '../components/QuizFeedback'
import { QuizQuestion } from '../components/QuizQuestion'
import { difficultyLabels, quizDifficulties, quizQuestions, quizTopics, topicLabels, type QuizDifficulty, type QuizTopic } from '../data/questions'
import { initialQuizState, quizReducer } from '../state/quizReducer'

function getResultMessage(score: number, total: number) {
  if (score === total) return 'Excelente! Você acertou todas as perguntas.'
  if (score >= Math.ceil(total * 0.6)) return 'Muito bem! Continue praticando para reforçar as regras.'
  return 'Bom começo! Consulte as regras e tente novamente quando quiser.'
}

export function QuizPage() {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState)
  const [selectedTopic, setSelectedTopic] = useState<QuizTopic | 'all'>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuizDifficulty | 'all'>('all')
  const filteredQuestions = useMemo(() => quizQuestions.filter((question) =>
    (selectedTopic === 'all' || question.topic === selectedTopic) &&
    (selectedDifficulty === 'all' || question.difficulty === selectedDifficulty),
  ), [selectedTopic, selectedDifficulty])
  const currentQuestion = state.questions[state.currentQuestionIndex]
  const totalQuestions = state.questions.length

  return (
    <div className="min-h-screen bg-canvas"><AppHeader />
      <main className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
        <BackLink to="/">Voltar para a Home</BackLink>
        {state.phase === 'intro' && <section className="mt-8" aria-labelledby="quiz-title">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Pratique as regras</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground" id="quiz-title">Quiz por tema e nível</h1>
          <p className="mt-4 leading-7 text-muted">Escolha o que quer praticar. Você receberá cada pergunta uma vez e verá a explicação ao responder.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="font-semibold text-foreground">Tema
              <select className="mt-2 min-h-12 w-full rounded-lg border border-border bg-surface px-3 font-normal" onChange={(event) => setSelectedTopic(event.target.value as QuizTopic | 'all')} value={selectedTopic}>
                <option value="all">Todos os temas</option>{quizTopics.map((topic) => <option key={topic.id} value={topic.id}>{topic.label}</option>)}
              </select>
            </label>
            <label className="font-semibold text-foreground">Nível
              <select className="mt-2 min-h-12 w-full rounded-lg border border-border bg-surface px-3 font-normal" onChange={(event) => setSelectedDifficulty(event.target.value as QuizDifficulty | 'all')} value={selectedDifficulty}>
                <option value="all">Todos os níveis</option>{quizDifficulties.map((difficulty) => <option key={difficulty.id} value={difficulty.id}>{difficulty.label}</option>)}
              </select>
            </label>
          </div>
          <p aria-live="polite" className="mt-4 text-sm text-muted">{filteredQuestions.length} perguntas disponíveis{selectedTopic !== 'all' ? ` · ${topicLabels[selectedTopic]}` : ''}{selectedDifficulty !== 'all' ? ` · ${difficultyLabels[selectedDifficulty]}` : ''}</p>
          <button className="mt-6 min-h-12 rounded-lg bg-accent-strong px-5 py-3 font-semibold text-accent-foreground transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50" disabled={filteredQuestions.length === 0} onClick={() => dispatch({ type: 'start', questionIds: filteredQuestions.map((question) => question.id) })} type="button">Começar quiz</button>
        </section>}

        {state.phase === 'question' && currentQuestion && <div className="mt-8"><QuizQuestion onConfirmAnswer={() => dispatch({ type: 'confirmAnswer' })} onSelectOption={(optionId) => dispatch({ type: 'selectOption', optionId })} question={currentQuestion} questionNumber={state.currentQuestionIndex + 1} selectedOptionId={state.selectedOptionId} totalQuestions={totalQuestions} /></div>}
        {state.phase === 'feedback' && state.selectedOptionId && currentQuestion && <div className="mt-8"><QuizFeedback isLastQuestion={state.currentQuestionIndex === totalQuestions - 1} onNextQuestion={() => dispatch({ type: 'nextQuestion' })} question={currentQuestion} selectedOptionId={state.selectedOptionId} /></div>}
        {state.phase === 'result' && <section className="mt-8 rounded-2xl border border-accent/30 bg-accent-subtle p-6" aria-labelledby="result-title">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Quiz concluído</p>
          <h1 className="mt-3 text-3xl font-bold text-foreground" id="result-title">Você acertou {state.score} de {totalQuestions} perguntas</h1>
          <p className="mt-2 text-lg font-semibold text-foreground">Aproveitamento: {Math.round((state.score / totalQuestions) * 100)}%</p>
          <p className="mt-4 leading-7 text-muted">{getResultMessage(state.score, totalQuestions)}</p>
          <div className="mt-8 flex flex-wrap gap-3"><button className="min-h-12 rounded-lg bg-accent-strong px-4 py-3 font-semibold text-accent-foreground" onClick={() => dispatch({ type: 'restart' })} type="button">Escolher outro quiz</button><Link className="min-h-12 rounded-lg border border-border bg-surface px-4 py-3 font-semibold text-foreground" to="/rules">Consultar regras básicas</Link></div>
        </section>}
      </main>
    </div>
  )
}
