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

type ViewType = 'home' | 'projects' | 'articles' | 'talks'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home')

  const projects: Project[] = [
    {
      id: 1,
      title: "Alexa × Dify RAG音声アシスタント",
      description: "生成AIとAlexaを組み合わせ、自然な対話でRAG検索を実現。日常の情報アクセスをより直感的に。",
      role: "設計・開発",
      techStack: ["Dify", "Alexa Skills Kit", "AWS Lambda", "OpenAI"],
      link: "https://github.com/example",
      image: "https://via.placeholder.com/600x400/00C19A/ffffff?text=Alexa+×+Dify",
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
    },
    {
      id: 3,
      title: "AIネイティブコミュニティ運営",
      description: "生成AI活用の実践者が集まるコミュニティを立ち上げ、累計500名が参加。",
      role: "主催者",
      techStack: ["Discord", "Notion", "GitHub"],
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400/00C19A/ffffff?text=Community",
    },
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
      title: "なぜエンジニアにDifyを勧めるのか",
      description: "AIを使った「コアロジック」と「インターフェース」を分離するためのDify",
      link: "https://note.com/huku_developer/n/n94aefcf62042",
      date: "2025-03-07",
      tags: ["Dify", "AI UX"]
    },
    {
      id: 2,
      title: "生成AIの本質は生成機能ではない",
      description: "コンピュータの知能化としての生成AI",
      link: "https://note.com/huku_developer/n/n7d67f84c96fb",
      date: "2024-07-27",
      tags: ["知能"]
    },
  ]

  const talks: Talk[] = [
    {
      id: 1,
      title: "【思い出枠】初めて公開したアプリケーションの紹介資料",
      event: "英語の教授に授業内で紹介時間をいただいて",
      description: "Connect-課題の共同管理アプリ",
      slideUrl: "https://speakerdeck.com/huku/ke-ti-nogong-tong-guan-li-apuri-connect",
      date: "2023-04-15"
    },
    {
      id: 2,
      title: "LLMアプリケーションの作り方",
      event: "大学の自由発表",
      description: "LLMの基礎とアプリケーションの作り方について",
      slideUrl: "https://speakerdeck.com/huku/llmapurikesiyonnozuo-rifang",
      date: "2024-06-19"
    },
    {
      id: 3,
      title: "新卒就活で使った資料",
      event: "就活",
      description: "学部1-3年でやったことのまとめ",
      slideUrl: "https://speakerdeck.com/huku/xin-zu-jiu-huo-deshi-tutazi-liao",
      date: "2024-09-01"
    },
    {
      id: 4,
      title: "ライフコンパス 本選",
      event: "PKSHA 生成AIハッカソン 本選",
      description: "あなたの人生に見通しの良さを-ライフコンパス",
      slideUrl: "https://speakerdeck.com/huku/pkshasheng-cheng-aihatukason",
      date: "2024-11-15"
    },
    
    {
      id: 5,
      title: "AI as a Tool",
      event: "自分主催の若手エンジニア向けイベント《AIの波に乗り遅れるな!!》",
      description: "AIアプリ開発を理解し、自分の手段にする",
      slideUrl: "https://speakerdeck.com/huku/ainobo-nicheng-richi-reruna-ai-as-a-tool",
      date: "2025-02-12"
    },
    {
      id: 7,
      title: "次世代AIアプリのアーキテクチャと体験設計",
      event: "Tech.Uni AI勉強会",
      description: "ワークフローとエージェントのバランスについて、HITLの設計について",
      slideUrl: "https://speakerdeck.com/huku/ci-shi-dai-aiapurinoakitekutiyatoti-yan-she-ji",
      date: "2025-06-16"
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-30 animate-gradient"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="glass-card rounded-3xl p-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Generative AI, Human Everyday.
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              生成AIネイティブな体験を追求し、<br />
              AIを人々にとっての「新たな日常」とする。
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://x.com/huku_developer" target="_blank" rel="noopener noreferrer" 
                className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X
              </a>
              <a href="https://note.com/huku_developer" target="_blank" rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
                </svg>
                Note
              </a>
              <a href="https://www.linkedin.com/in/%E5%BA%B7%E4%BB%8B-%E7%A6%8F%E5%B3%B6-548b362a1/" target="_blank" rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="border-t-2 border-white/50"></div>

      {/* Navigation Bar */}
      {currentView !== 'home' && (
        <nav className="sticky top-0 z-50 glass-dark border-b-2 border-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-3 text-gray-800 hover:text-purple-600 transition-colors"
              >
                <div className="w-10 h-10 glass-button rounded-lg flex items-center justify-center">
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
            <section className="pb-16 border-b-2 border-white/30">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Projects / Products</h2>
                  <p className="text-sm text-gray-600 mt-1">社会へ届ける具体的な成果物</p>
                </div>
                <button
                  onClick={() => setCurrentView('projects')}
                  className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-800 text-sm font-medium"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.id} className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 flex items-center justify-center relative">
                      <svg className="w-20 h-20 text-purple-600 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1.5 glass-button rounded-full text-purple-700 text-sm font-bold mb-3">
                        {project.role}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-700 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Articles Section */}
            <section className="pb-16 border-b-2 border-white/30">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Articles</h2>
                  <p className="text-sm text-gray-600 mt-1">AIネイティブなソフトウェアとその未来について</p>
                </div>
                <button
                  onClick={() => window.open('https://note.com/huku_developer', '_blank')}
                  className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-800 text-sm font-medium"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.slice(0, 2).map((article) => (
                  <a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-green-400 opacity-20 flex items-center justify-center relative">
                        <svg className="w-20 h-20 text-blue-600 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="p-6">
                        {article.tags.map((tag) => (
                          <span className="inline-block px-3 py-1.5 glass-button rounded-full text-blue-700 text-sm font-bold mb-3 mr-2">
                            {tag}
                          </span>
                        ))}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                        <p className="text-gray-700 text-sm line-clamp-2">{article.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Recent Talks Section */}
            <section className="pb-16">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Talks / Slide Decks</h2>
                  <p className="text-sm text-gray-600 mt-1">カンファレンスやミートアップでの発表資料</p>
                </div>
                <button
                  onClick={() => setCurrentView('talks')}
                  className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-800 text-sm font-medium"
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[...talks].reverse().slice(0, 2).map((talk) => (
                  <a
                    key={talk.id}
                    href={talk.slideUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-indigo-400 opacity-20 flex items-center justify-center relative">
                        <svg className="w-20 h-20 text-purple-600 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1.5 glass-button rounded-full text-purple-700 text-sm font-bold mb-3">
                          Talk
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{talk.title}</h3>
                        <p className="text-sm text-purple-600 font-medium mb-2">{talk.event}</p>
                        <p className="text-gray-700 text-sm line-clamp-2">{talk.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        )}
        
        {/* All Projects */}
        {currentView === 'projects' && (
          <div className="space-y-8">
            <div className="text-center mb-12 glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects / Products</h2>
              <p className="text-lg text-gray-700">社会へ届ける具体的な成果物</p>
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
                  <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 flex items-center justify-center relative">
                      <svg className="w-20 h-20 text-purple-600 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 glass-button rounded-full text-purple-700 text-sm font-bold">
                          {project.role}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 glass rounded-lg text-gray-700 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 text-gray-600 text-xs">
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
            <div className="text-center mb-12 glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Articles</h2>
              <p className="text-lg text-gray-700">AIネイティブなソフトウェアとその未来について</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-green-400 opacity-20 flex items-center justify-center relative">
                      <svg className="w-20 h-20 text-blue-600 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 glass-button rounded-full text-blue-700 text-sm font-bold">
                          Article
                        </span>
                        <span className="text-sm text-gray-600">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        {article.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 glass rounded-lg text-gray-700 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
            <div className="text-center mb-12 glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Talks / Slide Decks</h2>
              <p className="text-lg text-gray-700">カンファレンスやミートアップでの発表資料</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[...talks].reverse().map((talk) => (
                <a
                  key={talk.id}
                  href={talk.slideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-indigo-400 opacity-20 flex items-center justify-center relative">
                      <svg className="w-20 h-20 text-purple-600 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 glass-button rounded-full text-purple-700 text-sm font-bold">
                          Talk
                        </span>
                        <span className="text-sm text-gray-600">
                          {talk.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {talk.title}
                      </h3>
                      <p className="text-sm text-purple-600 font-medium mb-3">{talk.event}</p>
                      <p className="text-gray-700 text-sm">
                        {talk.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <footer className="relative border-t-2 border-white/50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 opacity-60"></div>
        <div className="relative z-10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Create Together</h2>
              <p className="text-lg text-gray-700 mb-8">
                AIで面白いことをしたい方はお気軽にご連絡ください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://x.com/huku_developer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center gap-3 px-6 py-3 rounded-xl text-gray-800 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X DM</span>
                </a>
                <a 
                  href="mailto:huku.developer@gmail.com" 
                  className="glass-button inline-flex items-center gap-3 px-6 py-3 rounded-xl text-gray-800 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App