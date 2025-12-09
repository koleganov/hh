import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components/layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { CoursesPage } from './pages/CoursesPage'
import { Login } from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
