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
      <section id="projects" className="py-16 scroll-mt-16">
        <div className="text-center mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects / Products</h2>
          <p className="text-lg text-gray-700">社会へ届ける具体的な成果物</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              variant="project"
              icon={<CodeIcon className="w-20 h-20 text-purple-600 z-10" />}
              badge={project.role}
              badgeColor="text-purple-700"
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