import Reveal from '@/components/animations/Reveal'

export default function SectionTag({ num, eyebrow, title, lead }) {
  return (
    <header className="mb-12 md:mb-18">
      <Reveal>
        <div
          className="mono flex items-center gap-3.5 mb-6"
          style={{ color: 'var(--accent)' }}
        >
          <span style={{ color: 'var(--mute)' }}>{num}</span>
          <Reveal mode="line" delay={150}>
            <span
              className="block w-8 h-px"
              style={{ background: 'var(--accent)' }}
            />
          </Reveal>
          <span>{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(48px, 6vw, 96px)',
            lineHeight: 1,
            letterSpacing: '-0.035em',
            fontWeight: 300,
            color: 'var(--ink)',
            maxWidth: '14ch',
          }}
        >
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={250}>
          <p
            className="serif italic"
            style={{
              marginTop: '32px',
              fontSize: 'clamp(18px, 1.6vw, 22px)',
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              maxWidth: '720px',
              fontWeight: 300,
              letterSpacing: '-0.005em',
            }}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </header>
  )
}
