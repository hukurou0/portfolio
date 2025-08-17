import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ/ホーム */}
          <Link to="/" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
            Huku
          </Link>
          
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
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  location.pathname === '/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/works" 
                className={`font-medium transition-colors ${
                  location.pathname === '/works' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Works
              </Link>
            </div>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        {isOpen && (
          <div className="sm:hidden pb-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`block font-medium px-4 py-3 rounded-lg transition-colors ${
                location.pathname === '/' 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/works" 
              onClick={() => setIsOpen(false)}
              className={`block font-medium px-4 py-3 rounded-lg transition-colors ${
                location.pathname === '/works' 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              Works
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}