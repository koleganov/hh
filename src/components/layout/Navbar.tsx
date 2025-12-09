import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      window.location.href = '/#contact-form'
    } else {
      const contactSection = document.getElementById('contact-form')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/90 backdrop-blur-lg border-b border-border py-5">
      <div className="max-w-[1400px] mx-auto px-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-2xl font-bold flex items-baseline gap-1"
        >
          <span className="text-accent-orange font-bold">HH</span>
        </Link>
        
        <div className="flex items-center gap-10">
          <Link 
            to="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className={`text-base font-medium transition-colors hover:text-accent-orange ${
              isActive('/') ? 'text-accent-orange' : 'text-text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={(e) => handleLinkClick(e, '/about')}
            className={`text-base font-medium transition-colors hover:text-accent-orange ${
              isActive('/about') ? 'text-accent-orange' : 'text-text-primary'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/courses" 
            onClick={(e) => handleLinkClick(e, '/courses')}
            className={`text-base font-medium transition-colors hover:text-accent-orange ${
              isActive('/courses') ? 'text-accent-orange' : 'text-text-primary'
            }`}
          >
            AI Courses
          </Link>
          <button
            onClick={scrollToContact}
            className="text-base font-medium transition-colors hover:text-accent-orange text-text-primary"
          >
            Contact Us
          </button>
        </div>
        
        <Link 
          to="/login"
          onClick={(e) => handleLinkClick(e, '/login')}
        >
          <button className="bg-accent-orange text-white px-8 py-3 font-semibold rounded-lg text-base hover:bg-[#ff5722] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,107,53,0.3)] transition-all">
            Login
          </button>
        </Link>
      </div>
    </nav>
  )
}
