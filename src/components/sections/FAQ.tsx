import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

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

const accordionVariant: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is HH?',
    answer: 'HH is a comprehensive online learning platform that offers practical AI courses designed to help learners generate real income. We provide step-by-step training in AI tools, automation, and monetization strategies.',
  },
  {
    question: 'Do I need prior experience to enroll?',
    answer: 'No prior experience is required! Our courses are designed for both beginners and professionals. We start with foundational concepts and gradually progress to advanced topics, ensuring everyone can follow along.',
  },
  {
    question: 'How long do I have access to the courses?',
    answer: 'Once you enroll, you get lifetime access to all course content. You can learn at your own pace, revisit materials anytime, and stay updated with new content additions.',
  },
  {
    question: 'What kind of income can I expect to generate?',
    answer: 'Income potential varies based on your dedication and application of the skills learned. Many students have reported significant income increases within 3-6 months of completing our courses. Results depend on how actively you apply the strategies taught.',
  },
  {
    question: 'Are the courses self-paced or scheduled?',
    answer: 'All courses are completely self-paced. You can access the content 24/7 and learn whenever it\'s convenient for you. There are no deadlines or scheduled sessions, giving you complete flexibility.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. All transactions are secure and encrypted. You can also choose from various payment plans if available for specific courses.',
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your course within the first 30 days, contact our support team for a full refund, no questions asked.',
  },
  {
    question: 'Do you provide certificates upon completion?',
    answer: 'Yes! Upon completing any course, you\'ll receive a digital certificate of completion that you can add to your LinkedIn profile or resume to showcase your new AI skills.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }: { item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px 0px' }}
      variants={fadeUpVariant}
      custom={index}
      style={{ willChange: 'transform, opacity' }}
      className="bg-bg-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-accent-orange"
    >
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold text-text-primary pr-8">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-orange"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={accordionVariant}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden"
          >
            <div className="px-8 pb-6">
              <p className="text-base text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            FAQ
          </div>
          <h2 className="text-5xl font-extrabold mb-6 text-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-[700px] mx-auto leading-relaxed">
            Find answers to common questions about our courses, enrollment, and learning experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
