import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0A0A1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1A] via-[#120C2E] to-[#1A1040]"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-20"
        style={{
          background: 'conic-gradient(from 0deg, transparent, #D47FA6 15deg, transparent 30deg, #2A9DF4 45deg, transparent 60deg, #D47FA6 75deg, transparent 90deg, #2A9DF4 105deg, transparent 120deg, #D47FA6 135deg, transparent 150deg, #2A9DF4 165deg, transparent 180deg, #D47FA6 195deg, transparent 210deg, #2A9DF4 225deg, transparent 240deg, #D47FA6 255deg, transparent 270deg, #2A9DF4 285deg, transparent 300deg, #D47FA6 315deg, transparent 330deg, #2A9DF4 345deg, transparent 360deg)',
          filter: 'blur(20px)',
          animation: 'galaxySpin 60s linear infinite'
        }}>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#D47FA6]/15 via-[#2A9DF4]/10 to-[#321A47]/20 rounded-full blur-[80px] animate-galaxy-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-br from-white/10 via-[#D47FA6]/15 to-[#2A9DF4]/10 rounded-full blur-[40px] animate-galaxy-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2A9DF4]/30 to-transparent blur-sm animate-cosmic-drift"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D47FA6]/20 to-transparent blur-sm animate-cosmic-drift" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm animate-cosmic-drift" style={{ animationDelay: '5s' }}></div>
      </div>

      {[...Array(120)].map((_, i) => (
        <div key={`star-${i}`} className="absolute rounded-full"
          style={{
            width: `${0.5 + Math.random() * 2.5}px`, height: `${0.5 + Math.random() * 2.5}px`,
            top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.8 ? '#FFFFFF' : Math.random() > 0.5 ? '#2A9DF4' : '#D47FA6',
            opacity: Math.random() * 0.6 + 0.1,
            boxShadow: Math.random() > 0.9 ? '0 0 4px rgba(255,255,255,0.5), 0 0 8px rgba(255,255,255,0.2)' : 'none',
            animation: `starGlow ${2 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}

      <div className="absolute top-10 right-20 w-[300px] h-[200px] bg-gradient-to-br from-[#D47FA6]/8 via-[#2A9DF4]/5 to-transparent rounded-full blur-[60px] animate-nebula-drift"></div>
      <div className="absolute bottom-20 left-10 w-[250px] h-[180px] bg-gradient-to-br from-[#2A9DF4]/8 via-[#D47FA6]/5 to-transparent rounded-full blur-[50px] animate-nebula-drift" style={{ animationDelay: '4s' }}></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#D47FA6]/5 rounded-full animate-galaxy-orbit"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#2A9DF4]/5 rounded-full animate-galaxy-orbit" style={{ animationDirection: 'reverse', animationDuration: '45s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#D47FA6]/8 rounded-full animate-galaxy-orbit" style={{ animationDuration: '25s' }}></div>

      {[...Array(12)].map((_, i) => (
        <div key={`particle-${i}`} className="absolute w-1 h-1 bg-[#2A9DF4]/40 rounded-full animate-particle-orbit"
          style={{ top: '50%', left: '50%', animationDelay: `${i * 0.3}s`, transform: `rotate(${i * 30}deg) translateX(320px)` }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#D47FA6]/30 text-[#D47FA6] px-4 py-2 mb-8 text-sm font-quicksand font-bold rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D47FA6] rounded-full animate-star-glow"></span>
              Author & Storyteller
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(42,157,244,0.3)]">
              {authorInfo.name}
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#D47FA6] via-[#2A9DF4] to-[#D47FA6] mb-8 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-xl text-[#D47FA6] mb-6 font-quicksand font-semibold">
              Creator of <span className="text-[#2A9DF4] font-bold">How Christopher T. Twinkles Came To Be</span>
            </p>
            <p className="text-[#D47FA6]/70 leading-relaxed max-w-lg mx-auto md:mx-0 font-playfair italic text-base border-l-2 border-[#2A9DF4]/50 pl-6 py-2 bg-[#2A9DF4]/5">
              "A cosmic tale of love, miracles, and a three-dollar teddy bear that changed the universe."
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/3 backdrop-blur-sm text-[#D47FA6] text-sm font-quicksand font-bold border border-[#D47FA6]/20 hover:border-[#D47FA6]/50 hover:bg-[#D47FA6]/8 hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-8 py-4 bg-gradient-to-r from-[#D47FA6] to-[#C06A8E] text-white font-quicksand font-bold hover:from-[#2A9DF4] hover:to-[#1A8DE4] transition-all text-center hover-lift rounded-full shadow-[0_0_25px_rgba(212,127,166,0.3)]">
                About the Author
              </a>
              <a href="#book" onClick={(e) => handleScroll(e, '#book')} className="px-8 py-4 border-2 border-[#D47FA6]/40 text-[#D47FA6] font-quicksand font-bold hover:border-[#2A9DF4] hover:text-[#2A9DF4] transition-all text-center hover-lift rounded-full backdrop-blur-sm">
                The Book
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm animate-rise-up">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#D47FA6]/15 via-[#2A9DF4]/10 to-transparent blur-3xl animate-galaxy-pulse"></div>
              <div className="absolute -inset-4 bg-[#2A9DF4]/8 blur-2xl animate-star-glow"></div>
              
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0A0A1A]/90 to-[#120C2E]/80 backdrop-blur-sm shadow-2xl border border-[#D47FA6]/25 overflow-hidden hover-lift">
                <div className="aspect-[3/4] overflow-hidden ">
                  <img
                    src="/images/profile.png"
                    alt={authorInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#0A0A1A]', 'to-[#1A1040]')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <div class="text-4xl font-playfair font-bold text-[#D47FA6] mb-2 drop-shadow-[0_0_10px_rgba(212,127,166,0.4)]">MCP</div>
                          <p class="text-sm font-quicksand font-bold text-[#D47FA6]/70 uppercase tracking-wider">${authorInfo.name}</p>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-[#2A9DF4]/20 to-transparent blur-2xl animate-star-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}