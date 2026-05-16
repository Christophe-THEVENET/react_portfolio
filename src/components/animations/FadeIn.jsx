import { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'motion/react'

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  direction = 'up',
  distance = 20,
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -50px 0px',
    amount: threshold,
  })

  const directionStyle = isInView
    ? {}
    : {
        transform: `translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${
          direction === 'down' || direction === 'right' ? '-' : ''
        }${distance}px)`,
      }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={directionStyle}
    >
      {children}
    </motion.div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const FadeInStagger = ({
  children,
  staggerDelay = 0.08,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -50px 0px',
    amount: threshold,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export const FadeInStaggerItem = ({ children, className = '' }) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
)

export default FadeIn
