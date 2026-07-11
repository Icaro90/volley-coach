import { Route, Routes } from 'react-router'
import { HomePage } from '../features/home/HomePage'
import { RuleDetailPage } from '../features/rules/pages/RuleDetailPage'
import { RulesPage } from '../features/rules/pages/RulesPage'
import { SearchResultsPage } from '../features/search/pages/SearchResultsPage'
import { PlaceholderPage } from '../shared/pages/PlaceholderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/rules/:ruleId" element={<RuleDetailPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route
        path="/rotation"
        element={
          <PlaceholderPage
            title="Rodízio"
            description="Em breve, entenda posições e a ordem em quadra."
          />
        }
      />
      <Route
        path="/quiz"
        element={
          <PlaceholderPage
            title="Quiz rápido"
            description="Em breve, teste seus conhecimentos sobre vôlei."
          />
        }
      />
    </Routes>
  )
}

export default App
