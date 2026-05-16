import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

const GlowCard = ({ children, className = '', glowColor = 'rgba(71,179,177,0.12)' }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative rounded-2xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(400px circle at 50% 50%, ${glowColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default GlowCard
