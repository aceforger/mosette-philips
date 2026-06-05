import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#2A1A3F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#D47FA6]/6 rounded-full blur-[110px] animate-galaxy-orbit"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#2A9DF4]/6 rounded-full blur-[90px] animate-galaxy-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-rise-up">
          <div className="inline-flex items-center gap-2 border border-[#D47FA6]/30 text-[#D47FA6] px-4 py-2 mb-4 text-sm font-quicksand font-bold rounded-full">
            <span className="w-2 h-2 bg-[#2A9DF4] rounded-full animate-glow-fade"></span>
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D47FA6] to-[#2A9DF4] mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-[#321A47]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#D47FA6]/10 animate-rise-up hover-lift">
            <p className="text-[#D47FA6]/80 text-lg leading-relaxed font-playfair">{authorInfo.bio}</p>
          </div>
          <div className="bg-[#321A47]/50 backdrop-blur-sm p-8 rounded-2xl border-l-3 border-[#2A9DF4] animate-rise-up-delayed hover-lift">
            <p className="text-[#D47FA6]/60 leading-relaxed font-playfair">{authorInfo.bio2}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {authorInfo.roles.map((role, i) => (
              <span key={i} className="px-5 py-2.5 bg-[#321A47]/50 text-[#D47FA6] text-sm font-quicksand font-bold border border-[#D47FA6]/20 hover:border-[#2A9DF4]/50 hover:text-[#2A9DF4] hover-lift transition-all rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}