import type { QuizQuestion as QuizQuestionData } from '../data/questions'

type QuizQuestionProps = {
  question: QuizQuestionData
  questionNumber: number
  totalQuestions: number
  selectedOptionId: string | null
  onSelectOption: (optionId: string) => void
  onConfirmAnswer: () => void
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  onConfirmAnswer,
}: QuizQuestionProps) {
  return (
    <section aria-labelledby="quiz-question-title">
      <p className="text-sm font-semibold text-accent">
        Pergunta {questionNumber} de {totalQuestions}
      </p>
      <fieldset className="mt-4">
        <legend className="text-xl font-bold leading-8 text-foreground" id="quiz-question-title">
          {question.prompt}
        </legend>

        <div className="mt-6 space-y-3">
          {question.options.map((option) => {
            const inputId = `quiz-${question.id}-${option.id}`

            return (
              <label
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-surface p-4 text-foreground transition has-checked:border-accent has-checked:bg-accent-subtle"
                htmlFor={inputId}
                key={option.id}
              >
                <input
                  checked={selectedOptionId === option.id}
                  className="mt-1 h-4 w-4 accent-accent-strong"
                  id={inputId}
                  name={`quiz-question-${question.id}`}
                  onChange={() => onSelectOption(option.id)}
                  type="radio"
                  value={option.id}
                />
                <span className="leading-6">{option.text}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <button
        className="mt-6 rounded-lg bg-accent-strong px-4 py-3 font-semibold text-accent-foreground transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!selectedOptionId}
        onClick={onConfirmAnswer}
        type="button"
      >
        Confirmar resposta
      </button>
    </section>
  )
}
