import { ChevronDownIcon } from './icons'

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-30 animate-gradient"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animate-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animate-delay-4000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card rounded-3xl p-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            フクの遊び場
          </h1>
          <p className="text-xs sm:text-sm md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            生成AIネイティブな体験を追求し、<br />
            AIを人々にとっての「新たな日常」とする。
          </p>
          <a
            href="#contact"
            className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium hover:scale-105 transition-transform"
          >
            お問い合わせ
            <ChevronDownIcon />
          </a>
        </div>
      </div>
    </header>
  )
}