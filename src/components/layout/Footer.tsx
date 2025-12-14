import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border py-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-20">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-20 mb-[60px]">
          <div className="max-w-[400px]">
            <div className="text-3xl font-bold flex items-baseline gap-1 mb-6">
              <span className="text-accent-orange font-bold">HH</span>
            </div>
            <p className="text-base text-text-secondary leading-relaxed">
              Powerful all-in-one learning platform offering engaging courses that equip learners with practical AI skills to generate real income.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-text-primary">Quick Links</h3>
            <ul className="space-y-3 list-none">
              <li><Link to="/" className="text-base text-text-secondary hover:text-accent-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-base text-text-secondary hover:text-accent-orange transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-base text-text-secondary hover:text-accent-orange transition-colors">AI Courses</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-text-primary">Contact</h3>
            <ul className="space-y-3 list-none">
              <li className="text-base text-text-secondary">Email: info@hhstudy.com</li>
              <li className="text-base text-text-secondary">Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-10 border-t border-border text-text-secondary text-sm">
          <p>&copy; 2025 HH Study. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

