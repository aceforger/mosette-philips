import { useState } from 'react'
import { book } from '../data'

export default function Book() {
  const [selectedBook, setSelectedBook] = useState(null)
  const bookItem = book[0]

  return (
    <section id="book" className="py-24 bg-[#321A47] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D47FA6]/6 rounded-full blur-[130px] animate-galaxy-pulse"></div>
      </div>
      {[...Array(40)].map((_, i) => (
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
        <div className="text-center mb-16 animate-rise-up">
          <div className="inline-flex items-center gap-2 border border-[#D47FA6]/30 text-[#D47FA6] px-4 py-2 mb-4 text-sm font-quicksand font-bold rounded-full">
            <span className="w-2 h-2 bg-[#D47FA6] rounded-full animate-glow-fade"></span>
            The Book
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">FEATURED WORK</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D47FA6] to-[#2A9DF4] mx-auto mt-6 rounded-full"></div>
          <p className="text-[#D47FA6]/50 text-lg mt-4 max-w-lg mx-auto font-playfair">
            Discover the cosmic tale that's capturing hearts across the galaxy
          </p>
        </div>

        {/* Book Layout - Image Left, Description Right */}
        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto animate-rise-up">
          {/* Book Cover - Left Side */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative group cursor-pointer" onClick={() => setSelectedBook(bookItem)}>
              <div className="absolute -inset-4 bg-[#D47FA6]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#2A1A3F] to-[#321A47] border border-[#D47FA6]/10 hover:border-[#D47FA6]/30 transition-all shadow-lg hover:shadow-xl hover-lift rounded-2xl overflow-hidden">
                <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#2A9DF4] text-white text-xs font-quicksand font-bold rounded-full">
                  {bookItem.statusText}
                </div>
                <img 
                  src={bookItem.coverImage} 
                  alt={bookItem.title} 
                  className="w-64 md:w-72 h-auto object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('min-h-[350px]', 'flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `<div class="text-center p-8"><div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#8B5A2B] to-[#6B3F1F] rounded-full"></div><p class="text-lg font-playfair text-[#D47FA6]">${bookItem.title}</p></div>`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Book Details - Right Side */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-6">
            <div>
              {bookItem.subtitle && (
                <p className="text-[#2A9DF4] text-sm font-quicksand font-bold uppercase tracking-wider mb-2">{bookItem.subtitle}</p>
              )}
              <h3 className="text-3xl md:text-4xl font-playfair text-white mb-3">{bookItem.title}</h3>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#D47FA6] to-[#2A9DF4] rounded-full"></div>
            </div>

            <p className="text-[#D47FA6]/70 leading-relaxed font-playfair text-base">
              {bookItem.description}
            </p>

            {bookItem.description2 && (
              <p className="text-[#D47FA6]/50 leading-relaxed font-playfair text-sm">
                {bookItem.description2}
              </p>
            )}

            {bookItem.description3 && (
              <p className="text-[#D47FA6]/40 leading-relaxed font-playfair text-sm italic border-l-2 border-[#2A9DF4]/30 pl-4">
                {bookItem.description3}
              </p>
            )}

            {bookItem.tagline && (
              <p className="text-[#D47FA6] text-base font-playfair italic">
                "{bookItem.tagline}"
              </p>
            )}

            {/* Themes */}
            <div className="flex flex-wrap gap-2">
              {bookItem.themes.map((theme, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#2A1A3F] text-[#D47FA6] text-xs font-quicksand font-bold rounded-full border border-[#D47FA6]/20">
                  {theme}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                onClick={() => setSelectedBook(bookItem)} 
                className="px-6 py-3 bg-gradient-to-r from-[#D47FA6] to-[#C06A8E] text-white font-quicksand font-bold text-sm rounded-full hover:shadow-[0_0_25px_rgba(212,127,166,0.4)] transition-all hover-lift"
              >
                View Full Details
              </button>
              {bookItem.status === 'published' && bookItem.purchaseLinks && (
                <a 
                  href={bookItem.purchaseLinks[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border-2 border-[#D47FA6]/40 text-[#D47FA6] font-quicksand font-bold text-sm rounded-full hover:border-[#2A9DF4] hover:text-[#2A9DF4] transition-all hover-lift"
                >
                  Buy on {bookItem.purchaseLinks[0].name}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#321A47]/95 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-[#2A1A3F] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D47FA6]/20 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-[#D47FA6]/10 sticky top-0 bg-[#2A1A3F] z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#2A9DF4] text-white text-xs font-quicksand font-bold rounded-full">{selectedBook.statusText}</span>
                <span className="text-[#D47FA6]/30">|</span>
                <span className="text-[#D47FA6]/60 text-xs font-quicksand uppercase">{selectedBook.subtitle}</span>
              </div>
              <button onClick={() => setSelectedBook(null)} className="text-[#D47FA6]/50 hover:text-[#D47FA6] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                  <div className="bg-[#321A47] rounded-xl p-4 flex items-center justify-center">
                    <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-full h-auto max-h-[400px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('min-h-[300px]')
                        e.target.parentElement.innerHTML = `<div class="text-center p-8"><div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#8B5A2B] to-[#6B3F1F] rounded-full"></div><p class="text-lg font-playfair text-[#D47FA6]">${selectedBook.title}</p></div>`
                      }}
                    />
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                  <div>
                    {selectedBook.subtitle && <p className="text-[#2A9DF4] text-xs font-quicksand font-bold uppercase tracking-wider mb-2">{selectedBook.subtitle}</p>}
                    <h2 className="text-3xl md:text-4xl font-playfair text-white mb-2">{selectedBook.title}</h2>
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#D47FA6] to-[#2A9DF4] mt-4 rounded-full"></div>
                  </div>
                  <p className="text-[#D47FA6]/70 leading-relaxed font-playfair">{selectedBook.description}</p>
                  {selectedBook.description2 && <p className="text-[#D47FA6]/50 leading-relaxed font-playfair text-sm">{selectedBook.description2}</p>}
                  {selectedBook.description3 && <p className="text-[#D47FA6]/40 leading-relaxed font-playfair text-sm italic border-l-2 border-[#2A9DF4]/30 pl-4">{selectedBook.description3}</p>}
                  {selectedBook.tagline && <p className="text-[#D47FA6] text-sm font-playfair italic">"{selectedBook.tagline}"</p>}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1 bg-[#321A47] text-[#D47FA6] text-xs font-quicksand font-bold rounded-full border border-[#D47FA6]/20">{theme}</span>
                    ))}
                  </div>
                  {selectedBook.status === 'published' && selectedBook.purchaseLinks && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[#2A9DF4] text-sm font-quicksand font-bold">Available at:</p>
                      <div className="flex flex-wrap gap-3">
                        {selectedBook.purchaseLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A9DF4] text-white font-quicksand font-bold text-sm rounded-full hover:bg-[#D47FA6] transition-all hover-lift">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                            </svg>
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}