import { useInView } from '@/hooks/useInView'

export default function Reveal({
  children,
  delay = 0,
  mode = 'reveal',
  // eslint-disable-next-line no-unused-vars -- utilisé en JSX (<Tag>)
  as: Tag = 'div',
  style,
  className,
  ...rest
}) {
  const [ref, inView] = useInView()
  const cls =
    (mode === 'fade' ? 'ed-fade' : mode === 'line' ? 'ed-line-draw' : 'ed-reveal') +
    (inView ? ' in' : '') +
    (className ? ' ' + className : '')

  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
