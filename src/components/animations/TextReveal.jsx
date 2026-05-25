import React, { useRef, useMemo } from 'react'
import { motion, useInView } from 'motion/react'

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
}

function renderLetters(node, keyPrefix = '') {
  if (typeof node === 'string') {
    return node.split('').map((char, i) => (
      <motion.span
        key={`${keyPrefix}${i}`}
        variants={letterVariants}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))
  }
  if (React.isValidElement(node)) {
    if (node.type === 'br') {
      return <br key={keyPrefix} />
    }
    const { children, ...rest } = node.props
    if (typeof children === 'string') {
      return children.split('').map((char, i) => (
        <motion.span
          key={`${keyPrefix}${i}`}
          variants={letterVariants}
          className={`inline-block ${rest.className || ''}`}
          style={rest.style || undefined}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))
    }
    if (Array.isArray(children)) {
      return children.flatMap((child, i) => renderLetters(child, `${keyPrefix}${i}-`))
    }
    return null
  }
  if (Array.isArray(node)) {
    return node.flatMap((child, i) => renderLetters(child, `${keyPrefix}${i}-`))
  }
  return null
}

const TextReveal = ({
  children,
  className = '',
  staggerDelay = 0.03,
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3, margin: '-80px 0px' })

  const letters = useMemo(
    () => renderLetters(React.Children.toArray(children)),
    [children],
  )

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ position: 'relative', display: 'inline' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {letters}
    </motion.span>
  )
}

export default TextReveal
