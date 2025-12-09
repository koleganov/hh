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

export function Testimonials() {
  const testimonials = [
    {
      name: 'Dmitry Volkov',
      role: 'Entrepreneur',
      text: 'In 3 months of training I increased my income 5 times. The methods work 100%. This is not just courses, this is a mindset transformation.',
      rating: 5
    },
    {
      name: 'Anna Sokolova',
      role: 'Marketer',
      text: 'Finally found a system that actually works. Built a personal brand from scratch, now clients find me themselves. Highly recommend!',
      rating: 5
    },
    {
      name: 'Maxim Petrov',
      role: 'Investor',
      text: 'Invested $50 in myself and got returns hundreds of times more. The knowledge they provide is priceless. Best investment of my life.',
      rating: 5
    },
    {
      name: 'Elena Koroleva',
      role: 'Coach',
      text: 'Completed 4 courses already and each time I get a new level of understanding. The community is incredible, support is top level. Thank you for this!',
      rating: 5
    }
  ]

  return (
    <section className="py-[120px] bg-bg-card">
      <div className="max-w-[1400px] mx-auto px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px 0px' }}
          variants={fadeUpVariant}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-text-primary">
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary">
            Thousands of people have already changed their lives
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px' }}
              variants={fadeUpVariant}
              custom={index}
              style={{ willChange: 'transform, opacity' }}
              className="bg-bg-dark border border-border rounded-2xl p-10 transition-border hover:border-accent-orange hover:-translate-y-1"
            >
              <div className="mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#FFD700] text-xl mr-1">★</span>
                ))}
              </div>
              <p className="text-lg text-text-secondary leading-relaxed italic mb-8">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="text-xl font-bold text-text-primary mb-1">{testimonial.name}</div>
                  <div className="text-sm text-accent-orange">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
