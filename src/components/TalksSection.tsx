import { useState } from 'react'
import type { Talk } from '../types'
import { Card } from './Card'
import { PresentationIcon, ChevronDownIcon, ChevronUpIcon } from './icons'

interface TalksSectionProps {
  talks: Talk[]
  projects?: any[]
  articles?: any[]
}

export function TalksSection({ talks, projects, articles }: TalksSectionProps) {
  const [showAll, setShowAll] = useState(false)
  const displayCount = 2 // 最初に表示するトーク数
  const reversedTalks = [...talks].reverse()
  const displayedTalks = showAll ? reversedTalks : reversedTalks.slice(0, displayCount)

  return (
    <>
      {/* All Talks */}
      <section id="talks" className="py-10 md:py-20 scroll-mt-16">
        <div className="text-center mb-8 md:mb-12 glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Talks / Slide Decks</h2>
          <p className="text-base md:text-lg text-gray-700">カンファレンスなどでの発表資料</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
          {displayedTalks.map((talk) => (
            <Card
              key={talk.id}
              title={talk.title}
              description={talk.event}
              link={talk.slideUrl}
              links={talk.links}
              variant="talk"
              icon={<PresentationIcon className="w-12 h-12 md:w-20 md:h-20 text-purple-600 z-10" />}
              meta={talk.date}
              projects={projects}
              talks={talks}
              articles={articles}
            >
              <p className="text-gray-700 text-xs md:text-sm mt-2 line-clamp-2">
                {talk.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* もっと見るボタン */}
        {talks.length > displayCount && (
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
                  <span>もっと見る ({talks.length - displayCount}件)</span>
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