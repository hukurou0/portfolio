import './App.css'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { ProjectsSection } from './components/ProjectsSection'
import { ArticlesSection } from './components/ArticlesSection'
import { TalksSection } from './components/TalksSection'
import { Footer } from './components/Footer'
import { projects } from './data/projects'
import { articles } from './data/articles'
import { talks } from './data/talks'

function App() {

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <div className="border-t-2 border-white/50"></div>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          <ProjectsSection projects={projects} />
          <ArticlesSection articles={articles} />
          <TalksSection talks={talks} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App