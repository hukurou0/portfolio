import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { HighlightSection } from './components/HighlightSection'
import { WorksPage } from './pages/WorksPage'

function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen relative">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HighlightSection />
            </>
          } />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App