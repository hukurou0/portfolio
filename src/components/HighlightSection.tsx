import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { articles } from '../data/articles'
import { talks } from '../data/talks'

export function HighlightSection() {
  const highlightProject = projects[0]
  const highlightArticle = articles[0]
  const highlightTalk = talks[0]

  return (
    <section className="pb-10 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {highlightProject && (
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-xl mb-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-purple-600 mb-2">Latest Project</h3>
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{highlightProject.title}</h4>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{highlightProject.description}</p>
              <a href={highlightProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          )}
          
          {highlightArticle && (
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 p-4 rounded-xl mb-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-blue-600 mb-2">Recent Article</h3>
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{highlightArticle.title}</h4>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{highlightArticle.description}</p>
              <a href={highlightArticle.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          )}
          
          {highlightTalk && (
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-400 p-4 rounded-xl mb-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-purple-600 mb-2">Featured Talk</h3>
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{highlightTalk.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{highlightTalk.event}</p>
              <p className="text-xs text-gray-600 mb-4">{highlightTalk.date}</p>
              <a href={highlightTalk.slideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
                View Slides
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          )}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Link 
            to="/works" 
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl font-medium text-gray-800 border border-gray-300 glass-button hover:scale-105 transition-all duration-300"
          >
            全て見る
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}