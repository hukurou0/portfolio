import { useState } from 'react'
import type { Project } from '../types'
import { Card } from './Card'
import { CodeIcon, ChevronDownIcon, ChevronUpIcon } from './icons'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false)
  const displayCount = 2 // 最初に表示するプロジェクト数
  const displayedProjects = showAll ? projects : projects.slice(0, displayCount)

  return (
    <>
      {/* All Projects */}
      <section id="projects" className="py-10 md:py-20 scroll-mt-16">
        <div className="text-center mb-8 md:mb-12 glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Projects / Products</h2>
          <p className="text-base md:text-lg text-gray-700">社会へ届ける具体的な成果物</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              variant="project"
              icon={<CodeIcon className="w-12 h-12 md:w-20 md:h-20 text-purple-600 z-10" />}
              tags={project.techStack}
            />
          ))}
        </div>
        
        {/* もっと見るボタン */}
        {projects.length > displayCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium hover:scale-105 transition-transform"
            >
              {showAll ? (
                <>
                  <span>閉じる</span>
                  <ChevronUpIcon />
                </>
              ) : (
                <>
                  <span>もっと見る ({projects.length - displayCount}件)</span>
                  <ChevronDownIcon />
                </>
              )}
            </button>
          </div>
        )}
      </section>
    </>
  )
}