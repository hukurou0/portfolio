import type { Article } from '../types'
import { Card } from './Card'
import { BookIcon, ChevronDownIcon } from './icons'

interface ArticlesSectionProps {
  articles: Article[]
  projects?: any[]
  talks?: any[]
}

export function ArticlesSection({ articles, projects, talks }: ArticlesSectionProps) {
  const displayCount = 2 // 最初に表示する記事数
  const displayedArticles = articles.slice(0, displayCount)

  return (
    <>
      {/* All Articles */}
      <section id="articles" className="pt-10 md:pt-20 scroll-mt-16">
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
              links={article.links}
              variant="article"
              icon={<BookIcon className="w-12 h-12 md:w-20 md:h-20 text-blue-600 z-10" />}
              meta={article.date}
              tags={article.tags}
              projects={projects}
              talks={talks}
              articles={articles}
            />
          ))}
        </div>
        
        {/* もっと見るボタン */}
        <div className="flex justify-center mt-8">
          <a
            href="https://note.com/huku_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium hover:scale-105 transition-transform"
          >
            <span>もっと見る</span>
            <ChevronDownIcon />
          </a>
        </div>
      </section>
    </>
  )
}