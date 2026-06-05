import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      if (isHomePage) {
        const sections = navLinks.map(link => link.href.replace('#', ''))
        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHomePage) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/' + href)
    }
  }

  const handleStoreClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/store')
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0A0A1A]/90 backdrop-blur-xl border-b border-[#D47FA6]/15 shadow-lg shadow-[#D47FA6]/5' 
        : 'bg-transparent'
    }`}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D47FA6]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-[#D47FA6] to-[#2A9DF4] rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,127,166,0.4)] transition-all duration-300">
                <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D47FA6]/20 to-[#2A9DF4]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg italic text-[#D47FA6] group-hover:text-[#2A9DF4] transition-colors leading-tight">
                Mosetta Cermak Philips
              </span>
              <span className="text-[10px] font-quicksand font-semibold text-[#D47FA6]/40 uppercase tracking-[0.2em] leading-tight">
                Author
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-quicksand font-semibold transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') && isHomePage
                    ? 'text-[#2A9DF4]'
                    : 'text-[#D47FA6]/50 hover:text-[#D47FA6]'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && isHomePage && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#2A9DF4] rounded-full"></span>
                )}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-[#D47FA6]/15">
              <a
                href="/store"
                onClick={handleStoreClick}
                className="relative px-6 py-2.5 bg-gradient-to-r from-[#D47FA6] to-[#C06A8E] text-white font-quicksand font-bold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,127,166,0.4)] hover:scale-105 inline-block group/store"
              >
                <span className="relative z-10">Get the Book</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A9DF4] to-[#1A8DE4] rounded-full opacity-0 group-hover/store:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#D47FA6] hover:text-[#2A9DF4] transition-colors"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#0A0A1A]/98 border border-[#D47FA6]/15 rounded-2xl shadow-2xl mt-3 p-5 backdrop-blur-xl">
            {/* Mobile nav links */}
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 font-quicksand font-semibold transition-all duration-300 rounded-xl ${
                    activeSection === link.href.replace('#', '') && isHomePage
                      ? 'text-[#2A9DF4] bg-[#2A9DF4]/10 border border-[#2A9DF4]/20'
                      : 'text-[#D47FA6]/60 hover:text-[#D47FA6] hover:bg-[#D47FA6]/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      activeSection === link.href.replace('#', '') && isHomePage
                        ? 'bg-[#2A9DF4]'
                        : 'bg-[#D47FA6]/20'
                    }`}></span>
                    {link.name}
                  </div>
                </a>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <a
              href="/store"
              onClick={handleStoreClick}
              className="block px-4 py-3.5 bg-gradient-to-r from-[#D47FA6] to-[#C06A8E] text-white text-center font-quicksand font-bold rounded-xl hover:shadow-[0_0_25px_rgba(212,127,166,0.4)] transition-all duration-300"
            >
              Get the Book
            </a>
            
            {/* Mobile footer info */}
            <div className="mt-4 pt-4 border-t border-[#D47FA6]/10 text-center">
              <p className="text-[10px] font-quicksand text-[#D47FA6]/30 uppercase tracking-[0.2em]">
                How Christopher T. Twinkles Came To Be
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}