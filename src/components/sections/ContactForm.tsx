import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact-form" className="py-[120px] bg-bg-card">
      <div className="max-w-[1400px] mx-auto px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px 0px' }}
          variants={fadeUpVariant}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 border border-accent-orange text-accent-orange text-sm font-bold tracking-widest mb-6">
            CONTACT US
          </div>
          <h2 className="text-5xl font-extrabold mb-6 text-text-primary">
            Get in Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-[700px] mx-auto leading-relaxed">
            Have questions? Want to learn more about our courses? We're here to help. Send us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-10">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px 0px' }}
            variants={fadeUpVariant}
            custom={0}
            style={{ willChange: 'transform, opacity' }}
            onSubmit={handleSubmit}
            className="bg-bg-dark border border-border rounded-2xl p-10 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-orange transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-orange transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-text-primary font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-orange transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-orange transition-colors resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent-orange text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-[#ff5722] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,107,53,0.4)] transition-all"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px 0px' }}
            variants={fadeUpVariant}
            custom={1}
            style={{ willChange: 'transform, opacity' }}
            className="bg-gradient-to-br from-accent-orange to-[#ff8c42] rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg mb-6">
                <span className="text-white text-sm font-bold tracking-wider">SPECIAL OFFER</span>
              </div>
              
              <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Get 30% Off Your First Course
              </h3>
              
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                New to HH Study? Start your AI learning journey with an exclusive discount. Limited time offer for new students only.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white">Lifetime access to all course materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white">Certificate of completion included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white">24/7 support from our expert team</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-white">30%</span>
                  <span className="text-white/80 text-xl">OFF</span>
                </div>
                <p className="text-white/80 text-sm">Use code: <span className="font-bold text-white">NEWSTUDENT30</span></p>
              </div>
              
              <button
                className="w-full bg-white text-accent-orange px-8 py-4 text-lg font-bold rounded-lg hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)] transition-all"
              >
                Claim Your Discount
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
