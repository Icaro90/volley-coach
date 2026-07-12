import { useReducer } from 'react'
import { Link } from 'react-router'
import { AppHeader } from '../../../shared/components/AppHeader'
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

export function QuizPage() {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState)
  const currentQuestion = quizQuestions[state.currentQuestionIndex]

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <Link className="text-sm font-semibold text-orange-700 underline" to="/">
          Voltar para a Home
        </Link>

        {state.phase === 'intro' && (
          <section className="mt-8" aria-labelledby="quiz-title">
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Pratique as regras
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900" id="quiz-title">
              Quiz rápido
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Responda {quizQuestions.length} perguntas sobre regras básicas de vôlei e receba
              explicações a cada resposta.
            </p>
            <button
              className="mt-8 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
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
          <section className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6" aria-labelledby="result-title">
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">Quiz concluído</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900" id="result-title">
              Você acertou {state.score} de {quizQuestions.length} perguntas
            </h1>
            <p className="mt-4 leading-7 text-slate-700">{getResultMessage(state.score)}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700"
                onClick={() => dispatch({ type: 'restart' })}
                type="button"
              >
                Reiniciar quiz
              </button>
              <Link
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-100"
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
