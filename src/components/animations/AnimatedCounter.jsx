import { useRef, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useInView, animate } from 'motion/react'

const AnimatedCounter = ({
  value,
  className = '',
  duration = 2,
  delay = 0,
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState('0')
  const hasAnimated = useRef(false)

  const parseValue = (val) => {
    if (typeof val !== 'string') return { number: 0, suffix: '' }
    const match = val.match(/^(\d+)(.*)$/)
    if (!match) return { number: 0, suffix: '' }
    return { number: parseInt(match[1], 10), suffix: match[2] || '' }
  }

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const { number, suffix } = parseValue(value)

      const timer = setTimeout(() => {
        const controls = animate(0, number, {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
          onUpdate: (latest) => {
            setDisplayValue(`${Math.round(latest)}${suffix}`)
          },
        })
        return () => controls.stop()
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, duration, delay])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {displayValue}
    </motion.div>
  )
}

export default AnimatedCounter
