import { XIcon, MailIcon, LinkedInIcon } from './icons'

export function Footer() {
  return (
    <footer id="contact" className="relative border-t-2 border-white/20 scroll-mt-16">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
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
                <XIcon />
                <span>X</span>
              </a>
              <a 
                href="mailto:huku.developer@gmail.com" 
                className="glass-button inline-flex items-center gap-3 px-6 py-3 rounded-xl text-gray-800 font-medium"
              >
                <MailIcon />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/%E5%BA%B7%E4%BB%8B-%E7%A6%8F%E5%B3%B6-548b362a1/" target="_blank" rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-medium">
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}