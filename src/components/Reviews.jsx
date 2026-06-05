import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#2A1A3F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D47FA6]/5 rounded-full blur-[120px] animate-galaxy-orbit"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-rise-up">
          <div className="inline-flex items-center gap-2 border border-[#D47FA6]/30 text-[#D47FA6] px-4 py-2 mb-4 text-sm font-quicksand font-bold rounded-full">
            <span className="w-2 h-2 bg-[#D47FA6] rounded-full animate-stardust"></span>
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">WHAT READERS SAY</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D47FA6] to-[#2A9DF4] mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div key={review.id} className="animate-rise-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bg-[#321A47]/50 backdrop-blur-sm border border-[#D47FA6]/10 hover:border-[#D47FA6]/30 transition-all hover-lift h-full flex flex-col p-6 rounded-2xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#2A9DF4]' : 'text-[#D47FA6]/15'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <h3 className="text-[#D47FA6] font-quicksand font-bold text-sm mb-2">{review.title}</h3>
                <p className="text-[#D47FA6]/60 text-sm font-playfair leading-relaxed mb-4 flex-1 line-clamp-4">"{review.review}"</p>
                <div className="border-t border-[#D47FA6]/10 pt-3 mt-auto">
                  <p className="text-white text-sm font-quicksand font-bold">{review.reviewer}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#D47FA6]/40 text-xs font-playfair">{review.date}</p>
                    {review.verified && <span className="text-[#2A9DF4] text-xs font-quicksand font-bold">Verified Purchase</span>}
                  </div>
                  {review.helpful > 0 && <p className="text-[#D47FA6]/30 text-xs font-playfair mt-1">{review.helpful} {review.helpful === 1 ? 'person' : 'people'} found this helpful</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}