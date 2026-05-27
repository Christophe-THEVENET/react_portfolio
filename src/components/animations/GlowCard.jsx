import { useState } from 'react'
import { motion } from 'motion/react'

const GlowCard = ({ children, className = '', glowColor = 'rgba(71,179,177,0.12)', rounded = 'rounded-2xl' }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        boxShadow: '0 4px 12px rgba(47,142,142,0.15)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <motion.div
        className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${rounded}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(400px circle at 50% 50%, ${glowColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

export default GlowCard
