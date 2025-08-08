import type { ReactNode } from 'react'

interface CardProps {
  title: string
  description?: string
  link?: string
  variant: 'project' | 'article' | 'talk'
  icon: ReactNode
  badge: string
  badgeColor: string
  meta?: string
  tags?: string[]
  children?: ReactNode
}

export function Card({
  title,
  description,
  link,
  variant,
  icon,
  badge,
  badgeColor,
  meta,
  tags,
  children
}: CardProps) {
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
    <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className={`w-full h-48 bg-gradient-to-br ${gradientMap[variant]} opacity-20 flex items-center justify-center relative`}>
        {icon}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block px-3 py-1.5 glass-button rounded-full ${badgeColor} text-sm font-bold`}>
            {badge}
          </span>
          {meta && (
            <span className="text-sm text-gray-600">
              {meta}
            </span>
          )}
        </div>
        <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${hoverColorMap[variant]} transition-colors`}>
          {title}
        </h3>
        {description && (
          <p className="text-gray-700 mb-4 text-sm">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        {content}
      </a>
    )
  }

  return content
}