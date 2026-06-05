import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { book } from '../data'

export default function Store() {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="min-h-screen py-10 bg-[#321A47] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#D47FA6]/8 rounded-full blur-[110px] animate-galaxy-orbit"></div>
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#2A9DF4]/6 rounded-full blur-[90px] animate-galaxy-pulse"></div>
      </div>
      {[...Array(50)].map((_, i) => (
        <div key={`star-${i}`} className="absolute rounded-full"
          style={{
            width: `${0.5 + Math.random() * 2}px`, height: `${0.5 + Math.random() * 2}px`,
            top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.6 ? '#2A9DF4' : '#D47FA6',
            opacity: Math.random() * 0.3 + 0.05,
            animation: `stardustSparkle ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`
          }}
        ></div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-[#D47FA6]/50 hover:text-[#D47FA6] transition-colors mb-8 group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-quicksand font-bold">Back to Home</span>
        </button>

        <div className="text-center mb-12 animate-rise-up">
          <div className="inline-flex items-center gap-2 border border-[#D47FA6]/30 text-[#D47FA6] px-4 py-2 mb-4 text-sm font-quicksand font-bold rounded-full">
            <span className="w-2 h-2 bg-[#D47FA6] rounded-full animate-glow-fade"></span>
            Book Store
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">GET YOUR COPY</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D47FA6] to-[#2A9DF4] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {book.map((bookItem, i) => (
            <div key={bookItem.id} className="group animate-rise-up w-full sm:w-[280px]" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="bg-[#2A1A3F] border border-[#D47FA6]/10 hover:border-[#D47FA6]/30 transition-all shadow-lg hover:shadow-xl hover-lift h-full flex flex-col rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#2A1A3F] to-[#321A47] overflow-hidden relative flex items-center justify-center p-6">
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#2A9DF4] text-white text-xs font-quicksand font-bold rounded-full">
                    {bookItem.statusText}
                  </div>
                  <img src={bookItem.coverImage} alt={bookItem.title} className="w-48 h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('min-h-[250px]')
                      e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8B5A2B] to-[#6B3F1F] rounded-full"></div><p class="text-lg font-playfair text-[#D47FA6]">${bookItem.title}</p></div>`
                    }}
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  {bookItem.subtitle && <p className="text-[#2A9DF4] text-xs font-quicksand font-bold uppercase tracking-wider mb-2">{bookItem.subtitle}</p>}
                  <h3 className="text-lg font-playfair text-white mb-2 group-hover:text-[#D47FA6] transition-colors">{bookItem.title}</h3>
                  <p className="text-[#D47FA6]/50 text-sm font-playfair leading-relaxed mb-4 flex-1 line-clamp-3">{bookItem.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {bookItem.themes.map((theme, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#321A47] text-[#D47FA6] text-xs font-quicksand font-bold rounded-full border border-[#D47FA6]/10">{theme}</span>
                    ))}
                  </div>
                  <div className="mt-auto space-y-2">
                    {bookItem.status === 'published' && bookItem.purchaseLinks ? (
                      bookItem.purchaseLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-[#D47FA6] text-white font-quicksand font-bold text-sm rounded-full hover:bg-[#2A9DF4] transition-all text-center hover-lift">
                          Buy on {link.name}
                        </a>
                      ))
                    ) : (
                      <div className="block w-full py-2.5 bg-[#D47FA6]/10 border border-[#D47FA6]/20 text-[#D47FA6]/60 font-quicksand font-bold text-sm rounded-full text-center">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}