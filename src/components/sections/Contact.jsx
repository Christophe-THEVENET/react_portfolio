import { useState } from 'react'
import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants'

const projectTypes = [
  { id: 'mission', label: 'Mission' },
  { id: 'vitrine', label: 'Vitrine' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'app', label: 'Application' },
]

const contactDetails = [
  { label: 'Email', value: PERSONAL_INFO.email },
  { label: 'Téléphone', value: PERSONAL_INFO.telephone },
  { label: 'Adresse', value: `${PERSONAL_INFO.location}`, extra: 'Distanciel France entière' },
  { label: 'Siret', value: PERSONAL_INFO.siret },
  { label: 'RC Pro', value: PERSONAL_INFO.insurance },
]

function InputField({ type = 'text', placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full outline-none transition-colors duration-150"
      style={{
        background: 'transparent',
        border: '1px solid var(--rule)',
        padding: '12px 16px',
        color: 'var(--ink)',
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rule)')}
    />
  )
}

function FieldLabel({ label, children }) {
  return (
    <div className="mb-5">
      <div className="mono-sm mb-2" style={{ color: 'var(--mute)' }}>{label}</div>
      {children}
    </div>
  )
}

function DetailRow({ label, value, extra }) {
  return (
    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid var(--rule)' }}>
      <div className="mono-sm mb-1.5" style={{ color: 'var(--mute)' }}>{label}</div>
      <div
        className="serif"
        style={{ fontSize: '18px', color: 'var(--ink)', letterSpacing: '-0.005em' }}
      >
        {value}
      </div>
      {extra && <div className="mono-sm mt-1.5" style={{ color: 'var(--mute)' }}>{extra}</div>}
    </div>
  )
}

export const Contact = () => {
  const [type, setType] = useState('vitrine')
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.target
    const encoded = new URLSearchParams(new FormData(form)).toString()

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      console.error("Erreur lors de l'envoi")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:px-16 md:py-40"
    >
      <SectionTag
        num="06"
        eyebrow="Démarrer"
        title={
          <>
            Discutons
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              de votre projet
            </span>
            .
          </>
        }
        lead={`Décrivez votre besoin en quelques lignes — réponse sous 24h. Ou plus rapide : un email à ${PERSONAL_INFO.email}.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16">
        <Reveal>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="p-8 md:p-10"
            style={{
              border: '1px solid var(--rule)',
              background: 'var(--bg-card)',
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Ne pas remplir si vous êtes humain:
                <input name="bot-field" />
              </label>
            </div>

            <FieldLabel label="Type de projet">
              <div
                className="grid"
                style={{
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  border: '1px solid var(--rule)',
                }}
              >
                {projectTypes.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setType(t.id)}
                    className="mono-sm py-3.5 px-2 transition-all duration-150"
                    style={{
                      border: 'none',
                      borderLeft: i === 0 ? 'none' : '1px solid var(--rule)',
                      background: type === t.id ? 'var(--accent)' : 'transparent',
                      color: type === t.id ? 'var(--bg)' : 'var(--ink-2)',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </FieldLabel>
            <input type="hidden" name="type" value={type} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FieldLabel label="Nom — prénom">
                <InputField
                  placeholder="C. Thevenet"
                />
              </FieldLabel>
              <FieldLabel label="Email">
                <InputField type="email" placeholder="vous@exemple.fr" />
              </FieldLabel>
            </div>

            <FieldLabel label="Société (facultatif)">
              <InputField placeholder="—" />
            </FieldLabel>

            <FieldLabel label="Brief">
              <textarea
                name="message"
                rows={5}
                placeholder="Quelques lignes sur le projet, l'audience, les contraintes connues…"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full outline-none resize-y"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--rule)',
                  padding: '14px 16px',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  lineHeight: 1.65,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rule)')}
              />
            </FieldLabel>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 pt-6"
              style={{ borderTop: '1px solid var(--rule)' }}
            >
              <div className="mono-sm" style={{ color: 'var(--mute)' }}>
                ↳ Réponse sous 24h ouvrées
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mono px-7 py-4 border-none cursor-pointer transition-colors duration-200 disabled:opacity-50"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer →'}
              </button>
            </div>

            {isSubmitted && (
              <div className="mono-sm mt-4 pt-4" style={{ color: 'var(--accent)' }}>
                ✓ Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}
          </form>
        </Reveal>

        <Reveal delay={150}>
          <aside>
            <div className="mono mb-5" style={{ color: 'var(--mute)' }}>
              ⊹ Coordonnées
            </div>
            {contactDetails.map((d) => (
              <DetailRow key={d.label} {...d} />
            ))}

            <div className="mono mt-8 mb-4" style={{ color: 'var(--mute)' }}>
              ⊹ Réseaux
            </div>
            <div className="flex gap-2 flex-wrap">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-sm px-4 py-2.5 transition-all duration-150"
                  style={{
                    border: '1px solid var(--rule)',
                    color: 'var(--ink-2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rule)'
                    e.currentTarget.style.color = 'var(--ink-2)'
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
