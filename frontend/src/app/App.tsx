import { Route, Routes } from 'react-router'
import { HomePage } from '../features/home/HomePage'
import { QuizPage } from '../features/quiz/pages/QuizPage'
import { RotationPage } from '../features/rotation/pages/RotationPage'
import { RuleDetailPage } from '../features/rules/pages/RuleDetailPage'
import { RulesPage } from '../features/rules/pages/RulesPage'
import { SearchResultsPage } from '../features/search/pages/SearchResultsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/rules/:ruleId" element={<RuleDetailPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/rotation" element={<RotationPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  )
}

export default App
