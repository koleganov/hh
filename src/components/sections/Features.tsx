import { motion, type Variants } from 'framer-motion'
import { AnimatedCounter } from '../ui'

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

export function Features() {
  const stats = [
    {
      number: '5K+',
      label: 'AI Educated',
      color: 'text-[#17E9E0]',
      numericValue: 5000
    },
    {
      number: '80%',
      label: 'Started A Business',
      color: 'text-[#FF6B9D]',
      numericValue: 80
    },
    {
      number: '200+',
      label: 'AI Tasks Tools',
      color: 'text-[#9B59B6]',
      numericValue: 200
    },
    {
      number: '300%',
      label: 'Productivity Growth',
      color: 'text-accent-orange',
      numericValue: 300
    }
  ]

  const features = [
    {
      title: 'Honesty — Foundation of Trust and Growth',
      description: 'We show real processes, we don\'t sell illusions. Every course is based on proven methods.',
      icon: '✓'
    },
    {
      title: 'Discipline — Gives Freedom and Stability',
      description: 'Our courses teach a systematic approach. Order in knowledge leads to order in income.',
      icon: '⚡'
    },
    {
      title: 'Efficiency — Remove Noise, Keep What Works',
      description: 'Only practical tools and methods that bring real income here and now.',
      icon: '🎯'
    },
    {
      title: 'Faith — Foundation Without Expiration Date',
      description: 'Faith in your strength and the right tools. Faith guides, disciplines and leads to money.',
      icon: '💎'
    }
  ]

  return (
    <section className="py-[120px] bg-bg-dark">
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
            OUR MISSION
          </div>
          <h2 className="text-5xl font-extrabold mb-6 text-text-primary">
            Show the Way Out of the System
          </h2>
          <p className="text-xl text-text-secondary max-w-[800px] mx-auto leading-relaxed mb-8">
            Show that you can and should be strong. You can and should live life and be the one who becomes the reason for another's happy and free life.
          </p>
          <p className="text-3xl font-bold text-accent-orange mb-20">Be confident in yourself, because you have us.</p>
        </motion.div>

        <div className="grid grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px' }}
              variants={fadeUpVariant}
              custom={index}
              style={{ willChange: 'transform, opacity' }}
              className="rounded-2xl p-8 text-center hover:border-accent-orange hover:-translate-y-1 transition-colors"
            >
              <div className={`mb-4 ${stat.color}`}>
                <AnimatedCounter value={stat.number} color={stat.color} />
              </div>
              <div className="text-lg text-text-primary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              layout
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px' }}
              variants={fadeUpVariant}
              custom={index}
              style={{ willChange: 'transform, opacity' }}
              className="bg-bg-card border border-border p-10 rounded-2xl hover:border-accent-orange"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary min-h-[64px]">{feature.title}</h3>
              <p className="text-base text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
