import type { QuizQuestion } from '../data/questions'

type QuizFeedbackProps = {
  question: QuizQuestion
  selectedOptionId: string
  isLastQuestion: boolean
  onNextQuestion: () => void
}

export function QuizFeedback({
  question,
  selectedOptionId,
  isLastQuestion,
  onNextQuestion,
}: QuizFeedbackProps) {
  const correctOption = question.options.find((option) => option.id === question.correctOptionId)
  const selectedOption = question.options.find((option) => option.id === selectedOptionId)
  const isCorrect = selectedOptionId === question.correctOptionId

  return (
    <section aria-live="polite" aria-labelledby="quiz-feedback-title" role="status">
      <div
        className={`rounded-xl border p-5 ${
          isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
        }`}
      >
        <h2 className="text-xl font-bold text-slate-900" id="quiz-feedback-title">
          {isCorrect ? 'Resposta correta!' : 'Resposta incorreta'}
        </h2>
        {!isCorrect && selectedOption && (
          <p className="mt-3 leading-7 text-slate-700">Sua resposta: {selectedOption.text}</p>
        )}
        <p className="mt-3 leading-7 text-slate-700">
          Resposta correta: <strong>{correctOption?.text}</strong>
        </p>
        <p className="mt-3 leading-7 text-slate-700">{question.explanation}</p>
      </div>

      <button
        className="mt-6 rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700"
        onClick={onNextQuestion}
        type="button"
      >
        {isLastQuestion ? 'Ver resultado' : 'Próxima pergunta'}
      </button>
    </section>
  )
}
