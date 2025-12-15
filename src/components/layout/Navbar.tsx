import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/90 backdrop-blur-lg border-b border-border py-5">
      <div className="max-w-[1400px] mx-auto px-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-baseline gap-1"
        >
          <span className="text-accent-orange font-bold">HH</span>
        </Link>
        
        <div className="flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-base font-medium transition-colors hover:text-accent-orange ${
              isActive('/') ? 'text-accent-orange' : 'text-text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-base font-medium transition-colors hover:text-accent-orange ${
              isActive('/about') ? 'text-accent-orange' : 'text-text-primary'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/courses" 
            className={`text-base font-medium transition-colors hover:text-accent-orange ${
              isActive('/courses') ? 'text-accent-orange' : 'text-text-primary'
            }`}
          >
            AI Courses
          </Link>
          <Link 
            to="/contact"
            className="text-base font-medium transition-colors hover:text-accent-orange text-text-primary"
          >
            Contact Us
          </Link>
        </div>
        
        <Link 
          to="/login"
        >
          <button className="bg-accent-orange text-white px-8 py-3 font-semibold rounded-lg text-base hover:bg-[#ff5722] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,107,53,0.3)] transition-all">
            Login
          </button>
        </Link>
      </div>
    </nav>
  )
}


