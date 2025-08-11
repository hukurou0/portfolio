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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsSection 
          projects={projects} 
          talks={talks}
          articles={articles}
        />
        <ArticlesSection 
          articles={articles}
          projects={projects}
          talks={talks}
        />
        <TalksSection 
          talks={talks}
          projects={projects}
          articles={articles}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App