import { useState } from 'react'
import type { ReactNode } from 'react'
import type { Links } from '../types'
import { LinkModal } from './LinkModal'

interface CardProps {
  title: string
  description?: string
  link?: string
  links?: Links
  variant: 'project' | 'article' | 'talk'
  icon: ReactNode
  badge?: string
  badgeColor?: string
  meta?: string
  tags?: string[]
  children?: ReactNode
  projects?: any[]
  articles?: any[]
  talks?: any[]
}

export function Card({
  title,
  description,
  link,
  links,
  variant,
  icon,
  badge,
  badgeColor,
  meta,
  tags,
  children,
  projects,
  articles,
  talks
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const gradientMap = {
    project: 'from-purple-400 to-pink-400',
    article: 'from-blue-400 to-green-400',
    talk: 'from-purple-400 to-indigo-400'
  }

  const hoverColorMap = {
    project: 'group-hover:text-purple-600',
    article: 'group-hover:text-blue-600',
    talk: 'group-hover:text-purple-600'
  }

  const content = (
    <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 h-full flex flex-col">
      <div className={`w-full h-32 md:h-48 bg-gradient-to-br ${gradientMap[variant]} opacity-20 flex items-center justify-center relative`}>
        {icon}
      </div>
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          {badge && badgeColor && (
            <span className={`inline-block px-3 py-1.5 glass-button rounded-full ${badgeColor} text-sm font-bold`}>
              {badge}
            </span>
          )}
          {meta && (
            <span className="text-sm text-gray-600">
              {meta}
            </span>
          )}
        </div>
        <h3 className={`text-base md:text-xl font-semibold text-gray-800 mb-2 ${hoverColorMap[variant]} transition-colors`}>
          {title}
        </h3>
        {description && (
          <div className="text-gray-700 mb-4 text-xs md:text-sm line-clamp-3">
            {description.split('\n').map((line, index) => (
              <div key={index} className={index > 0 ? 'mt-0.5' : ''}>
                {line}
              </div>
            ))}
          </div>
        )}
        <div className="flex-1" />
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 glass rounded-lg text-gray-700 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  )

  // 複数リンクがある場合はクリックでモーダルを開く
  if (links && links.links.length > 0) {
    return (
      <>
        <div
          onClick={() => setIsModalOpen(true)}
          className="group h-full cursor-pointer"
        >
          {content}
        </div>
        <LinkModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          links={links}
          title={title}
          projects={projects}
          articles={articles}
          talks={talks}
        />
      </>
    )
  }

  // 単一リンクの場合は従来通り
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group h-full"
      >
        {content}
      </a>
    )
  }

  return content
}