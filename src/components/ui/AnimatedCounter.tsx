import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  color?: string
}

export function AnimatedCounter({ value, color }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
  const suffix = value.replace(/[0-9.]/g, '')

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const duration = 2000
    const startValue = 0
    const endValue = numericValue

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (endValue - startValue) * easeOutQuart
      
      setCount(Math.floor(currentValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, numericValue])

  const formatValue = (num: number) => {
    if (value.includes('K')) {
      return `${num}K${suffix.replace('K', '')}`
    } else if (value.includes('%')) {
      return `${num}%`
    } else if (value.includes('+')) {
      return `${num}+`
    }
    return num.toString()
  }

  return (
    <div ref={ref} className={color}>
      <span className="text-6xl font-extrabold">{formatValue(count)}</span>
    </div>
  )
}
