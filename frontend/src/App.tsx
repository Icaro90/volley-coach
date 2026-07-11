import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/rules"
        element={
          <PlaceholderPage
            title="Regras básicas"
            description="Em breve, consulte aqui as regras fundamentais do vôlei."
          />
        }
      />
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
