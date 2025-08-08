import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ/ホーム */}
          <a href="#" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
            Huku
          </a>
          
          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* デスクトップメニュー */}
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Projects
              </a>
              <a href="#articles" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Articles
              </a>
              <a href="#talks" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Talks
              </a>
            </div>
            <a 
              href="#contact" 
              className="border border-purple-500 text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        {isOpen && (
          <div className="sm:hidden pb-4 space-y-2">
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-4 py-3 rounded-lg"
            >
              Projects
            </a>
            <a 
              href="#articles" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-4 py-3 rounded-lg"
            >
              Articles
            </a>
            <a 
              href="#talks" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-4 py-3 rounded-lg"
            >
              Talks
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center border border-purple-500 text-purple-600 px-4 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}