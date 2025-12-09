import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Hero() {
  const [isDragging, setIsDragging] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 200 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)
  
  useEffect(() => {
    if (!isDragging && autoRotate) {
      const interval = setInterval(() => {
        rotateX.set(rotateX.get() + 0.5)
        rotateY.set(rotateY.get() + 0.5)
      }, 50)
      
      return () => clearInterval(interval)
    }
  }, [isDragging, autoRotate, rotateX, rotateY])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setAutoRotate(false)
    
    const startX = e.clientX
    const startY = e.clientY
    const startRotateX = rotateX.get()
    const startRotateY = rotateY.get()
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX
      const deltaY = moveEvent.clientY - startY
      
      const sensitivity = 0.5
      rotateY.set(startRotateY + deltaX * sensitivity)
      rotateX.set(startRotateX - deltaY * sensitivity)
    }
    
    const handleMouseUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      
      setTimeout(() => {
        setAutoRotate(true)
      }, 2000)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-bg-dark">
      <div className="max-w-[1400px] mx-auto px-20 relative z-10">
        <div className="flex items-center justify-center gap-20">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-[400px] h-[400px] flex-shrink-0 cursor-grab active:cursor-grabbing select-none"
            style={{ perspective: '1000px' }}
            onMouseDown={handleMouseDown}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              <motion.div
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full"
              >
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-accent-orange to-[#ff8c42] rounded-2xl shadow-[0_20px_60px_rgba(255,107,53,0.4)]"
                  style={{ 
                    transform: 'translateZ(100px)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-black text-white">HH</div>
                  </div>
                </div>
                
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-accent-blue to-[#6BA3E8] rounded-2xl shadow-[0_20px_60px_rgba(74,144,226,0.4)]"
                  style={{ 
                    transform: 'translateZ(-100px) rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-black text-white">STUDY</div>
                  </div>
                </div>
                
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-2xl"
                  style={{ 
                    transform: 'rotateY(90deg) translateZ(100px)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-[#17E9E0] to-[#14B8A6] rounded-2xl"
                  style={{ 
                    transform: 'rotateY(-90deg) translateZ(100px)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-[#FF6B9D] to-[#E91E63] rounded-2xl"
                  style={{ 
                    transform: 'rotateX(90deg) translateZ(100px)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl"
                  style={{ 
                    transform: 'rotateX(-90deg) translateZ(100px)',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </motion.div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-blue/20 rounded-full blur-3xl -z-10 animate-pulse" />
            
            {!isDragging && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-text-secondary text-sm whitespace-nowrap"
              >
                Drag to rotate
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 max-w-[600px] text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-7xl font-extrabold leading-tight mb-8 text-text-primary"
            >
              Learn about <span className="text-accent-orange">Artificial Intelligence</span> Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl leading-relaxed text-text-secondary mb-10 max-w-[500px] mx-auto"
            >
              HH is a powerful all-in-one learning platform offering engaging courses that equip learners with practical AI skills to generate real income.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[200px] w-[200px] h-[200px] bg-[radial-gradient(circle,#4A90E2_2px,transparent_2px)] bg-[length:20px_20px] opacity-30"></div>
        <div className="absolute top-[100px] right-[150px] w-[300px] h-[300px] border-[3px] border-dashed border-[#e53935] rounded-full opacity-40"></div>
        <div className="absolute bottom-[100px] left-[50px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(138,43,226,0.3)_0%,transparent_70%)] rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[rgba(138,43,226,0.5)] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
