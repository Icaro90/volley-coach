import { useReducer } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
import { BackLink } from '../../../shared/components/BackLink'
import { QuizFeedback } from '../components/QuizFeedback'
import { QuizQuestion } from '../components/QuizQuestion'
import { quizQuestions } from '../data/questions'
import { initialQuizState, quizReducer } from '../state/quizReducer'

function getResultMessage(score: number) {
  if (score === quizQuestions.length) {
    return 'Excelente! Você acertou todas as perguntas.'
  }

  if (score >= 3) {
    return 'Muito bem! Continue praticando para reforçar as regras.'
  }

  return 'Bom começo! Consulte as regras e tente novamente quando quiser.'
}

function getScorePercentage(score: number) {
  return Math.round((score / quizQuestions.length) * 100)
}

export function QuizPage() {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState)
  const currentQuestion = quizQuestions[state.currentQuestionIndex]

  return (
    <div className="min-h-screen bg-canvas">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <BackLink to="/">Voltar para a Home</BackLink>

        {state.phase === 'intro' && (
          <section className="mt-8" aria-labelledby="quiz-title">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Pratique as regras
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground" id="quiz-title">
              Quiz rápido
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Responda {quizQuestions.length} perguntas sobre regras básicas de vôlei e receba
              explicações a cada resposta.
            </p>
            <button
              className="mt-8 rounded-lg bg-accent-strong px-5 py-3 font-semibold text-accent-foreground transition hover:bg-accent"
              onClick={() => dispatch({ type: 'start' })}
              type="button"
            >
              Começar quiz
            </button>
          </section>
        )}

        {state.phase === 'question' && (
          <div className="mt-8">
            <QuizQuestion
              onConfirmAnswer={() => dispatch({ type: 'confirmAnswer' })}
              onSelectOption={(optionId) => dispatch({ type: 'selectOption', optionId })}
              question={currentQuestion}
              questionNumber={state.currentQuestionIndex + 1}
              selectedOptionId={state.selectedOptionId}
              totalQuestions={quizQuestions.length}
            />
          </div>
        )}

        {state.phase === 'feedback' && state.selectedOptionId && (
          <div className="mt-8">
            <QuizFeedback
              isLastQuestion={state.currentQuestionIndex === quizQuestions.length - 1}
              onNextQuestion={() => dispatch({ type: 'nextQuestion' })}
              question={currentQuestion}
              selectedOptionId={state.selectedOptionId}
            />
          </div>
        )}

        {state.phase === 'result' && (
          <section className="mt-8 rounded-2xl border border-accent/30 bg-accent-subtle p-6" aria-labelledby="result-title">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">Quiz concluído</p>
            <h1 className="mt-3 text-3xl font-bold text-foreground" id="result-title">
              Você acertou {state.score} de {quizQuestions.length} perguntas
            </h1>
            <p className="mt-2 text-lg font-semibold text-foreground">
              Aproveitamento: {getScorePercentage(state.score)}%
            </p>
            <p className="mt-4 leading-7 text-muted">{getResultMessage(state.score)}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="rounded-lg bg-accent-strong px-4 py-3 font-semibold text-accent-foreground transition hover:bg-accent"
                onClick={() => dispatch({ type: 'restart' })}
                type="button"
              >
                Reiniciar quiz
              </button>
              <Link
                className="rounded-lg border border-border bg-surface px-4 py-3 font-semibold text-foreground transition hover:bg-surface-raised"
                to="/rules"
              >
                Consultar regras básicas
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
