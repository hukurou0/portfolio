import { XIcon, MailIcon, LinkedInIcon } from './icons'

export function Hero() {
  return (
    <header className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
            フクの遊び場
          </h2>
          <p className="text-xs sm:text-sm md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            生成AIネイティブな体験を追求し、<br />
            AIを人々にとっての「新たな日常」とする。
          </p>
          <div className="flex gap-3 justify-center">
            <a 
              href="https://x.com/huku_developer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-3 rounded-xl hover:scale-105 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a 
              href="mailto:huku.developer@gmail.com" 
              className="glass-button p-3 rounded-xl hover:scale-105 transition-all duration-300"
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/%E5%BA%B7%E4%BB%8B-%E7%A6%8F%E5%B3%B6-548b362a1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-3 rounded-xl hover:scale-105 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}