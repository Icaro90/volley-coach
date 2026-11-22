import { quizQuestions, type QuizQuestion } from '../data/questions'

export type QuizPhase = 'intro' | 'question' | 'feedback' | 'result'

export type QuizState = {
  phase: QuizPhase
  questions: QuizQuestion[]
  currentQuestionIndex: number
  selectedOptionId: string | null
  score: number
}

export type QuizAction =
  | { type: 'start'; questionIds?: string[] }
  | { type: 'selectOption'; optionId: string }
  | { type: 'confirmAnswer' }
  | { type: 'nextQuestion' }
  | { type: 'restart' }

export const initialQuizState: QuizState = {
  phase: 'intro',
  questions: [],
  currentQuestionIndex: 0,
  selectedOptionId: null,
  score: 0,
}

function currentQuestion(state: QuizState) {
  return state.questions[state.currentQuestionIndex]
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'start': {
      if (state.phase !== 'intro') return state
      const allowedIds = action.questionIds ? new Set(action.questionIds) : null
      const questions = allowedIds ? quizQuestions.filter((question) => allowedIds.has(question.id)) : quizQuestions
      if (questions.length === 0) return state
      return { ...initialQuizState, phase: 'question', questions }
    }

    case 'selectOption': {
      const question = currentQuestion(state)
      if (state.phase !== 'question' || !question?.options.some((option) => option.id === action.optionId)) return state
      return { ...state, selectedOptionId: action.optionId }
    }

    case 'confirmAnswer': {
      const question = currentQuestion(state)
      if (state.phase !== 'question' || !state.selectedOptionId || !question) return state
      const score = state.selectedOptionId === question.correctOptionId ? state.score + 1 : state.score
      return { ...state, phase: 'feedback', score }
    }

    case 'nextQuestion':
      if (state.phase !== 'feedback') return state
      if (state.currentQuestionIndex === state.questions.length - 1) return { ...state, phase: 'result' }
      return { ...state, phase: 'question', currentQuestionIndex: state.currentQuestionIndex + 1, selectedOptionId: null }

    case 'restart':
      return initialQuizState
  }
}
