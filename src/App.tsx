import { useState } from 'react'
import './App.css'

interface Project {
  id: number
  title: string
  description: string
  role: string
  techStack: string[]
  link: string
  image: string
  highlight?: boolean
  learnings?: string
}

interface Article {
  id: number
  title: string
  description: string
  link: string
  date: string
  tags: string[]
}

interface Talk {
  id: number
  title: string
  event: string
  description: string
  slideUrl: string
  date: string
}

type ViewType = 'home' | 'featured' | 'projects' | 'articles' | 'talks'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home')

  const featuredHighlights: Project[] = [
    {
      id: 1,
      title: "Alexa × Dify RAG音声アシスタント",
      description: "生成AIとAlexaを組み合わせ、自然な対話でRAG検索を実現。日常の情報アクセスをより直感的に。",
      role: "設計・開発",
      techStack: ["Dify", "Alexa Skills Kit", "AWS Lambda", "OpenAI"],
      link: "https://github.com/example",
      image: "https://via.placeholder.com/600x400/00C19A/ffffff?text=Alexa+×+Dify",
      highlight: true,
      learnings: "Voice UIにおける文脈理解の重要性を実感"
    },
    {
      id: 2,
      title: "企業向けAIワークフロー自動化",
      description: "業務プロセスに生成AIを組み込み、月間100時間の作業時間削減を実現。",
      role: "リードエンジニア",
      techStack: ["Python", "LangChain", "FastAPI", "PostgreSQL"],
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400/00C19A/ffffff?text=AI+Workflow",
      highlight: true
    },
    {
      id: 3,
      title: "AIネイティブコミュニティ運営",
      description: "生成AI活用の実践者が集まるコミュニティを立ち上げ、累計500名が参加。",
      role: "主催者",
      techStack: ["Discord", "Notion", "GitHub"],
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400/00C19A/ffffff?text=Community",
      highlight: true
    }
  ]

  const projects: Project[] = [
    ...featuredHighlights,
    {
      id: 4,
      title: "感情認識チャットボット",
      description: "ユーザーの感情を理解し、適切なトーンで応答するAIアシスタント。",
      role: "開発",
      techStack: ["GPT-4", "Sentiment Analysis", "React", "Node.js"],
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400/3B82F6/ffffff?text=Emotion+AI"
    },
    {
      id: 5,
      title: "AIコード生成ツール",
      description: "自然言語からコードを生成し、開発効率を向上させるVSCode拡張機能。",
      role: "開発",
      techStack: ["TypeScript", "VSCode API", "Codex"],
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400/8B5CF6/ffffff?text=Code+Generator"
    }
  ]

  const articles: Article[] = [
    {
      id: 1,
      title: "生成AIを「当たり前」にする設計思想",
      description: "AIネイティブなプロダクト設計において重要な3つの原則について考察。",
      link: "https://note.com/example",
      date: "2024-01-20",
      tags: ["AI/UX", "プロダクト設計"]
    },
    {
      id: 2,
      title: "RAGシステムの精度を10倍にした話",
      description: "エンベディングの工夫とプロンプトエンジニアリングで劇的な改善を実現。",
      link: "https://note.com/example",
      date: "2024-01-15",
      tags: ["RAG", "技術解説"]
    },
    {
      id: 3,
      title: "Voice UIの未来 - AlexaとGPTの融合",
      description: "音声インターフェースに生成AIを組み込む際の課題と可能性。",
      link: "https://note.com/example",
      date: "2024-01-10",
      tags: ["Voice UX", "Alexa"]
    }
  ]

  const talks: Talk[] = [
    {
      id: 1,
      title: "生成AIネイティブな開発手法",
      event: "AI Developer Conference 2024",
      description: "AIを前提とした新しい開発パラダイムについて発表。",
      slideUrl: "https://speakerdeck.com/example",
      date: "2024-01-25"
    },
    {
      id: 2,
      title: "コミュニティドリブンなAI活用",
      event: "Community Meetup #10",
      description: "実践者コミュニティから生まれるイノベーションの事例を紹介。",
      slideUrl: "https://speakerdeck.com/example",
      date: "2024-01-18"
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F6F7]">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1B1E] mb-6">
              Generative AI, Human Everyday.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              生成AIネイティブな体験を追求し、<br />
              AIを人々にとっての「新たな日常」とする。
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://x.com/huku_developer" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X
              </a>
              <a href="https://note.com/huku_developer" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
                </svg>
                Note
              </a>
              <a href="https://www.linkedin.com/in/%E5%BA%B7%E4%BB%8B-%E7%A6%8F%E5%B3%B6-548b362a1/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      {currentView !== 'home' && (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-3 text-gray-700 hover:text-[#00C19A] transition-colors"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#00C19A]/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <span className="font-medium text-lg mr-2">戻る</span>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Home View - Recent Content */}
        {currentView === 'home' && (
          <div className="space-y-16">
            {/* Featured Projects Section */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1B1E]">Projects / Products</h2>
                  <p className="text-sm text-gray-500 mt-1">社会へ届ける具体的な成果物</p>
                </div>
                <button
                  onClick={() => setCurrentView('featured')}
                  className="text-[#00C19A] hover:text-[#00A884] font-medium flex items-center gap-1"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredHighlights.slice(0, 3).map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="inline-block px-3 py-1.5 bg-[#00C19A] text-white text-sm font-bold rounded mb-3">
                        {project.role}
                      </span>
                      <h3 className="text-lg font-semibold text-[#1A1B1E] mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Articles Section */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1B1E]">Articles</h2>
                  <p className="text-sm text-gray-500 mt-1">AIネイティブなソフトウェアとその未来について</p>
                </div>
                <button
                  onClick={() => setCurrentView('articles')}
                  className="text-[#00C19A] hover:text-[#00A884] font-medium flex items-center gap-1"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid gap-6">
                {articles.slice(0, 2).map((article) => (
                  <a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-[#1A1B1E] group-hover:text-[#00C19A] transition-colors flex-1">
                          {article.title}
                        </h3>
                        <span className="text-sm text-gray-500 ml-4">{article.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                      <div className="flex gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-[#00C19A] text-white rounded-full text-sm font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Recent Talks Section */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1B1E]">Talks</h2>
                  <p className="text-sm text-gray-500 mt-1">カンファレンスやミートアップでの発表資料</p>
                </div>
                <button
                  onClick={() => setCurrentView('talks')}
                  className="text-[#00C19A] hover:text-[#00A884] font-medium flex items-center gap-1"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid gap-6">
                {talks.slice(0, 2).map((talk) => (
                  <a
                    key={talk.id}
                    href={talk.slideUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-[#1A1B1E] mb-1 group-hover:text-[#00C19A] transition-colors">
                            {talk.title}
                          </h3>
                          <p className="text-sm text-[#00C19A] font-medium">{talk.event}</p>
                        </div>
                        <span className="text-sm text-gray-500">{talk.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{talk.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        )}
        
        {/* Featured Highlights */}
        {currentView === 'featured' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1B1E] mb-4">Featured Highlights</h2>
              <p className="text-lg text-gray-600">初訪問者にまず見せたい "推し" プロジェクト</p>
            </div>
            <div className="grid gap-8">
              {featuredHighlights.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-8 md:w-3/5">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-block px-4 py-2 bg-[#00C19A] text-white text-base font-bold rounded-full">
                            {project.role}
                          </span>
                          {project.learnings && (
                            <span className="text-sm text-gray-500">
                              💡 {project.learnings}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-[#1A1B1E] mb-3 group-hover:text-[#00C19A] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        {currentView === 'projects' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1B1E] mb-4">Projects / Products</h2>
              <p className="text-lg text-gray-600">社会へ届ける具体的な成果物</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 bg-[#00C19A] text-white text-sm font-bold rounded">
                          {project.role}
                        </span>
                        {project.highlight && (
                          <span className="text-yellow-500">⭐</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1B1E] mb-2 group-hover:text-[#00C19A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 text-xs">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Articles */}
        {currentView === 'articles' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1B1E] mb-4">Articles</h2>
              <p className="text-lg text-gray-600">AIネイティブなソフトウェアとその未来について</p>
            </div>
            <div className="grid gap-6">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-[#1A1B1E] group-hover:text-[#00C19A] transition-colors flex-1">
                        {article.title}
                      </h3>
                      <span className="text-sm text-gray-500 ml-4">
                        {article.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-[#00C19A] text-white rounded-full text-base font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Talks */}
        {currentView === 'talks' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1B1E] mb-4">Talks & Slide Decks</h2>
              <p className="text-lg text-gray-600">カンファレンスやミートアップでの発表資料</p>
            </div>
            <div className="grid gap-6">
              {talks.map((talk) => (
                <a
                  key={talk.id}
                  href={talk.slideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-[#1A1B1E] mb-2 group-hover:text-[#00C19A] transition-colors">
                          {talk.title}
                        </h3>
                        <p className="text-sm text-[#00C19A] font-medium">{talk.event}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {talk.date}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {talk.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1A1B1E] mb-4">Let's Create Together</h2>
            <p className="text-lg text-gray-600 mb-8">
              AIで面白いことをしたい方はお気軽にご連絡ください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://x.com/huku_developer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X DM</span>
              </a>
              <a 
                href="mailto:huku.developer@gmail.com" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App