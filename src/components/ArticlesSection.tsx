import { useState } from 'react'
import type { Article } from '../types'
import { Card } from './Card'
import { BookIcon, ChevronDownIcon, ChevronUpIcon } from './icons'

interface ArticlesSectionProps {
  articles: Article[]
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  const [showAll, setShowAll] = useState(false)
  const displayCount = 2 // 最初に表示する記事数
  const displayedArticles = showAll ? articles : articles.slice(0, displayCount)

  return (
    <>
      {/* All Articles */}
      <section id="articles" className="py-10 md:py-20 scroll-mt-16">
        <div className="text-center mb-8 md:mb-12 glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Articles</h2>
          <p className="text-base md:text-lg text-gray-700">AIネイティブなソフトウェアとその未来</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
          {displayedArticles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.description}
              link={article.link}
              variant="article"
              icon={<BookIcon className="w-12 h-12 md:w-20 md:h-20 text-blue-600 z-10" />}
              meta={article.date}
              tags={article.tags}
            />
          ))}
        </div>
        
        {/* もっと見るボタン */}
        {articles.length > displayCount && (
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
                  <span>もっと見る ({articles.length - displayCount}件)</span>
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