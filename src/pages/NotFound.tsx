import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-[120px] bg-bg-dark">
      <div className="max-w-[1400px] mx-auto px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <h1 className="text-9xl font-extrabold text-accent-orange mb-4">404</h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl font-extrabold mb-6 text-text-primary"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even AI gets lost sometimes. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center gap-6"
          >
            <Link to="/">
              <button className="bg-accent-orange text-white px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#ff5722] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,107,53,0.4)] transition-all">
                Go Home
              </button>
            </Link>
            <Link to="/courses">
              <button className="bg-transparent border-2 border-accent-orange text-accent-orange px-10 py-4 text-lg font-semibold rounded-lg hover:bg-accent-orange hover:text-white transition-all">
                Browse Courses
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

