import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#321A47] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#D47FA6]/6 rounded-full blur-[90px] animate-galaxy-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#2A9DF4]/6 rounded-full blur-[80px] animate-galaxy-orbit"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#D47FA6]/30 text-[#D47FA6] px-4 py-2 mb-8 text-sm font-quicksand font-bold rounded-full">
          <span className="w-2 h-2 bg-[#2A9DF4] rounded-full animate-stardust"></span>
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6 animate-rise-up">GET IN TOUCH</h2>
        <p className="text-[#D47FA6]/50 text-lg mb-12 max-w-md mx-auto font-playfair animate-rise-up-delayed">
          Contact {authorInfo.firstName} directly
        </p>
        <div className="bg-[#2A1A3F] p-10 inline-block shadow-2xl border border-[#D47FA6]/20 rounded-2xl animate-rise-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D47FA6] to-[#2A9DF4] rounded-full flex items-center justify-center animate-warm-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div className="space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#D47FA6] text-white font-quicksand font-bold hover:bg-[#2A9DF4] transition-all text-lg w-full justify-center rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#D47FA6]/30 text-[#D47FA6] font-quicksand font-bold hover:border-[#2A9DF4] hover:text-[#2A9DF4] transition-all text-lg w-full justify-center rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}