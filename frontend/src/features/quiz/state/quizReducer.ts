import { quizQuestions } from '../data/questions'

export type QuizPhase = 'intro' | 'question' | 'feedback' | 'result'

export type QuizState = {
  phase: QuizPhase
  currentQuestionIndex: number
  selectedOptionId: string | null
  score: number
}

export type QuizAction =
  | { type: 'start' }
  | { type: 'selectOption'; optionId: string }
  | { type: 'confirmAnswer' }
  | { type: 'nextQuestion' }
  | { type: 'restart' }

export const initialQuizState: QuizState = {
  phase: 'intro',
  currentQuestionIndex: 0,
  selectedOptionId: null,
  score: 0,
}

function isOptionFromCurrentQuestion(state: QuizState, optionId: string) {
  return quizQuestions[state.currentQuestionIndex].options.some((option) => option.id === optionId)
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'start':
      return state.phase === 'intro' ? { ...initialQuizState, phase: 'question' } : state

    case 'selectOption':
      if (state.phase !== 'question' || !isOptionFromCurrentQuestion(state, action.optionId)) {
        return state
      }

      return { ...state, selectedOptionId: action.optionId }

    case 'confirmAnswer': {
      if (state.phase !== 'question' || !state.selectedOptionId) {
        return state
      }

      const currentQuestion = quizQuestions[state.currentQuestionIndex]
      const score =
        state.selectedOptionId === currentQuestion.correctOptionId ? state.score + 1 : state.score

      return { ...state, phase: 'feedback', score }
    }

    case 'nextQuestion':
      if (state.phase !== 'feedback') {
        return state
      }

      if (state.currentQuestionIndex === quizQuestions.length - 1) {
        return { ...state, phase: 'result' }
      }

      return {
        ...state,
        phase: 'question',
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedOptionId: null,
      }

    case 'restart':
      return initialQuizState
  }
}
