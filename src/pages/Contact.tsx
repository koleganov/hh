import { motion, type Variants } from 'framer-motion'
import { ContactForm } from '../components/sections/ContactForm'

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
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

export function ContactPage() {
  return (
    <div className="bg-bg-dark pt-24">
      

      <ContactForm />
    </div>
  )
}
