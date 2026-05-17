import { useScroll, useTransform } from 'motion/react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

const ScrollReveal = ({ children, index, total, containerRef, direction = 'right' }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'start 30%'],
  })

  const start = (index / (total || 1)) * 0.5
  const end = Math.min(start + 0.35, 1)
  const distance = 20

  const xStart = direction === 'left' ? -distance : direction === 'right' ? distance : 0
  const yStart = direction === 'bottom' ? distance : direction === 'top' ? -distance : 0

  const x = useTransform(scrollYProgress, [start, end], [xStart, 0])
  const y = useTransform(scrollYProgress, [start, end], [yStart, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

  return (
    <motion.div style={{ x, y, opacity }}>
      {children}
    </motion.div>
  )
}

export default ScrollReveal
