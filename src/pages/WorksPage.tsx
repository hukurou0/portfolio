import { ProjectsSection } from '../components/ProjectsSection'
import { ArticlesSection } from '../components/ArticlesSection'
import { TalksSection } from '../components/TalksSection'
import { projects } from '../data/projects'
import { articles } from '../data/articles'
import { talks } from '../data/talks'

export function WorksPage() {
  return (
    <div className="min-h-screen">
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
    </div>
  )
}