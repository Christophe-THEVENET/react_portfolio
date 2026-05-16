import React, { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'motion/react'

const extractSegments = (children) => {
  if (typeof children === 'string') return [{ text: children, letterClass: '' }]
  if (React.isValidElement(children)) {
    const childText = extractSegments(children.props.children)
    const childClass = children.props.className || ''
    return childText.map((seg) => ({
      ...seg,
      letterClass: childClass || seg.letterClass || '',
    }))
  }
  if (Array.isArray(children)) {
    return children.flatMap((child) => extractSegments(child))
  }
  return [{ text: '', letterClass: '' }]
}

const TextReveal = ({
  children,
  segments,
  className = '',
  staggerDelay = 0.03,
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const resolvedSegments = segments || extractSegments(children)

  let globalIndex = 0

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const fullText = resolvedSegments.map((s) => s.text).join('')

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-label={fullText}
    >
      {resolvedSegments.map((segment, segIdx) =>
        [...segment.text].map((letter) => {
          const idx = globalIndex++
          return (
            <motion.span
              key={`${segIdx}-${idx}`}
              variants={letterVariants}
              className={`inline-block ${segment.letterClass || ''}`}
              style={{ whiteSpace: letter === ' ' ? 'pre' : undefined }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          )
        }),
      )}
    </motion.span>
  )
}

export default TextReveal
