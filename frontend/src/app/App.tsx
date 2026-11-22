import { Route, Routes } from 'react-router'
import { HomePage } from '../features/home/HomePage'
import { QuizPage } from '../features/quiz/pages/QuizPage'
import { RotationPage } from '../features/rotation/pages/RotationPage'
import { RuleDetailPage } from '../features/rules/pages/RuleDetailPage'
import { RulesPage } from '../features/rules/pages/RulesPage'
import { SearchResultsPage } from '../features/search/pages/SearchResultsPage'
import { FavoritesPage } from '../features/favorites/pages/FavoritesPage'
import { TrainingPage } from '../features/training/pages/TrainingPage'
import { ExerciseDetailPage } from '../features/training/pages/ExerciseDetailPage'
import { DiaryPage } from '../features/diary/pages/DiaryPage'
import { QuickReferencePage } from '../features/quick-reference/pages/QuickReferencePage'
import { GlossaryPage } from '../features/glossary/pages/GlossaryPage'
import { GlossaryTermPage } from '../features/glossary/pages/GlossaryTermPage'
import { ScoutPage } from '../features/scout/pages/ScoutPage'
import { MatchDetailPage } from '../features/scout/pages/MatchDetailPage'
import { MorePage } from '../features/home/MorePage'
import { TeamPage } from '../features/team/pages/TeamPage'
import { ScoreboardPage } from '../features/scoreboard/pages/ScoreboardPage'
import { CourtModePage } from '../features/court-mode/pages/CourtModePage'
import { DataBackupPage } from '../features/backup/pages/DataBackupPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/more" element={<MorePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/scoreboard" element={<ScoreboardPage />} />
      <Route path="/court-mode" element={<CourtModePage />} />
      <Route path="/backup" element={<DataBackupPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/rules/:ruleId" element={<RuleDetailPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/rotation" element={<RotationPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/training/:exerciseId" element={<ExerciseDetailPage />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/quick-reference" element={<QuickReferencePage />} />
      <Route path="/glossary" element={<GlossaryPage />} />
      <Route path="/glossary/:termId" element={<GlossaryTermPage />} />
      <Route path="/scout" element={<ScoutPage />} />
      <Route path="/scout/:matchId" element={<MatchDetailPage />} />
    </Routes>
  )
}

export default App
