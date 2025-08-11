import { useEffect } from 'react'
import type { Links, Link } from '../types'
import { ExternalLinkIcon, CloseIcon } from './icons'

interface LinkModalProps {
  isOpen: boolean
  onClose: () => void
  links: Links
  title: string
  projects?: any[]
  articles?: any[]
  talks?: any[]
}

export function LinkModal({ isOpen, onClose, links, title, projects, articles, talks }: LinkModalProps) {
  const resolveLink = (referenceType: 'project' | 'article' | 'talk', referenceId: number): string => {
    switch (referenceType) {
      case 'project':
        const project = projects?.find(p => p.id === referenceId)
        return project?.link || '#'
      case 'article':
        const article = articles?.find(a => a.id === referenceId)
        return article?.link || '#'
      case 'talk':
        const talk = talks?.find(t => t.id === referenceId)
        return talk?.slideUrl || '#'
      default:
        return '#'
    }
  }

  const resolveTitle = (referenceType: 'project' | 'article' | 'talk', referenceId: number): string | undefined => {
    switch (referenceType) {
      case 'project':
        return projects?.find(p => p.id === referenceId)?.title
      case 'article':
        return articles?.find(a => a.id === referenceId)?.title
      case 'talk':
        return talks?.find(t => t.id === referenceId)?.title
      default:
        return undefined
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-40 backdrop-blur-sm" />
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
      <div 
        className="rounded-2xl max-w-md w-full p-6 animate-scale-in shadow-2xl glass-card relative border-2 border-white border-opacity-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
          aria-label="閉じる"
        >
          <CloseIcon className="w-5 h-5 text-gray-600" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-1 pr-8">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{links.description ?? 'どのリンクを開きますか？'}</p>
        <div className="space-y-2">
          {links.links.map((link: Link, linkIndex: number) => {
            const url = resolveLink(link.referenceType, link.referenceId)
            const itemTitle = resolveTitle(link.referenceType, link.referenceId)
            const typeLabel = link.referenceType === 'project' ? 'プロジェクト' : link.referenceType === 'article' ? '記事' : '登壇'
            return (
              <a
                key={linkIndex}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-between p-4 rounded-xl hover:scale-105 transition-all duration-300 block hover:shadow-lg group"
                onClick={onClose}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-purple-600 font-medium">{typeLabel}</span>
                  </div>
                  <span className="text-gray-800 font-medium block">{itemTitle ?? `${typeLabel} #${link.referenceId}`}</span>
                </div>
                <ExternalLinkIcon className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors flex-shrink-0 ml-3" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}