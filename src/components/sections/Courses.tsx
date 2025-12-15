import { useMemo, useState } from 'react'
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

export function Courses() {
  const courses = [
    {
      title: 'AI Task Software Course',
      description: 'Learn how to create and monetize AI-powered task automation tools',
      category: 'Automation',
      price: '$199',
      students: '2000+',
      rating: 4.9
    },
    {
      title: 'AI Content Creation',
      description: 'Master AI tools for content creation and build profitable content businesses',
      category: 'Content',
      price: '$149',
      students: '1500+',
      rating: 4.8
    },
    {
      title: 'AI Trading Strategies',
      description: 'Discover AI-driven trading strategies to generate consistent income',
      category: 'Trading',
      price: '$299',
      students: '800+',
      rating: 4.9
    },
    {
      title: 'AI Automation for Business',
      description: 'Automate your business processes with AI and increase profitability',
      category: 'Business',
      price: '$249',
      students: '1200+',
      rating: 4.7
    }
  ]

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(courses.map((course) => course.category)))],
    [courses]
  )
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const filteredCourses =
    activeCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === activeCategory)

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
            Popular AI Courses
          </h2>
          <p className="text-xl text-text-secondary max-w-[700px] mx-auto leading-relaxed">
            We don't talk about business — we live it. We don't sell illusions — we show processes.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full border transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-orange text-white border-accent-orange shadow-[0_8px_24px_rgba(255,107,53,0.3)]'
                    : 'bg-bg-dark text-text-primary border-border hover:border-accent-orange'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-2 gap-10">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px' }}
              variants={fadeUpVariant}
              custom={index}
              style={{ willChange: 'transform, opacity' }}
              className="bg-bg-dark border border-border rounded-2xl p-8 transition-colors hover:border-accent-orange hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,107,53,0.2)]"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFD700] text-xl">★</span>
                  <span className="font-semibold text-lg">{course.rating}</span>
                </div>
                <div className="text-sm text-text-secondary">{course.students} Students</div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-text-primary">{course.title}</h3>
              <p className="text-base text-text-secondary leading-relaxed mb-8">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-accent-orange">{course.price}</span>
                <button className="bg-accent-orange text-white px-8 py-3 font-semibold rounded-lg hover:bg-[#ff5722] transition-all">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
