import { useState, useRef, useCallback } from 'react'
import { Map, Phone, Mail, MapPinHouse, ShieldCheck, Tally4, Share2, ArrowDownRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from '@/components/animations/Reveal'
import { useMagnetic } from '@/hooks/useMagnetic'
import SectionTag from '@/components/ui/SectionTag'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants'
import SocialLink from '@/components/ui/SocialLink'

const contactDetails = [
  { icon: Map, label: 'Secteur', value: PERSONAL_INFO.location },
  {
    icon: Phone,
    label: 'Téléphone',
    value: PERSONAL_INFO.telephone,
    href: `tel:+33${PERSONAL_INFO.telephone.replace(/\s/g, '').slice(1)}`,
  },
  { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
  { icon: MapPinHouse, label: 'Adresse', value: PERSONAL_INFO.address },
  { icon: ShieldCheck, label: 'Assurance', value: PERSONAL_INFO.insurance },
  { icon: Tally4, label: 'Siret', value: PERSONAL_INFO.siret },
]

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

function validateField(name, value) {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Le nom est requis'
      if (value.trim().length < 2) return 'Au moins 2 caractères'
      if (value.trim().length > 50) return '50 caractères maximum'
      if (/[<>{}]/.test(value)) return 'Caractères non autorisés'
      return ''
    case 'email':
      if (!value.trim()) return "L'email est requis"
      if (!emailRegex.test(value)) return "Format d'email invalide"
      return ''
    case 'message':
      if (!value.trim()) return 'Le message est requis'
      if (value.trim().length < 10) return 'Au moins 10 caractères'
      if (value.trim().length > 1000) return '1000 caractères maximum'
      return ''
    default:
      return ''
  }
}

function InputField({ type = 'text', placeholder, name, value, onChange, onBlur, error }) {
  return (
    <div>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? 'rgba(239, 68, 68, 0.5)' : 'transparent'
          onBlur?.(e)
        }}
        className="w-full outline-none transition-colors duration-150"
        style={{
          background: 'rgba(0,0,0,0.3)',
          border: '1px solid transparent',
          padding: '12px 16px',
          color: 'var(--ink)',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          textTransform: 'none',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(71,179,177,0.3)')}
      />
      <div
        id={`${name}-error`}
        role="alert"
        className="mono-sm mt-1.5"
        style={{
          color: 'rgba(239, 68, 68, 0.8)',
          minHeight: '18px',
          visibility: error ? 'visible' : 'hidden',
        }}
      >
        {error || '\u00A0'}
      </div>
    </div>
  )
}

function FieldLabel({ label, htmlFor, children }) {
  return (
    <div className="mb-3">
      <label htmlFor={htmlFor} className="mono-sm mb-2 block" style={{ color: 'var(--ink-2)' }}>{label}</label>
      {children}
    </div>
  )
}

function ContactDetailItem({ d, i, scrollYProgress }) {
  const total = contactDetails.length
  const start = (i / total) * 0.5
  const end = Math.min(start + 0.45, 1)
  const x = useTransform(scrollYProgress, [start, end], [35, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const IconComp = d.icon

  const valueStyle = {
    fontSize: '17px',
    color: 'var(--ink)',
    letterSpacing: '-0.01em',
    lineHeight: 1.3,
  }

  return (
    <motion.li style={{ x, opacity }}>
      {i > 0 && (
        <div
          className="mx-3 my-1"
          style={{ height: '1px', background: 'var(--rule)' }}
        />
      )}
      <div
        className="grid gap-4 items-center py-4 px-3"
        style={{ gridTemplateColumns: '44px 1fr' }}
      >
        <div
          className="flex items-center justify-center py-2 rounded-lg"
          style={{ background: 'rgba(71,179,177,0.06)' }}
        >
          <IconComp className="h-4 w-4" style={{ color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <div>
          {d.href ? (
            <a
              href={d.href}
              className="serif block transition-colors duration-200 hover:opacity-80"
              style={valueStyle}
            >
              {d.value}
            </a>
          ) : (
            <p className="serif" style={valueStyle}>
              {d.value}
            </p>
          )}
          <p className="mono-sm mt-1" style={{ color: 'var(--mute)' }}>
            {d.label}
          </p>
        </div>
      </div>
    </motion.li>
  )
}

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const textareaRef = useRef(null)
  const submitRef = useMagnetic(0.18)

  const handleResizeStart = useCallback((e) => {
    e.preventDefault()
    const textarea = textareaRef.current
    if (!textarea) return

    const startY = e.clientY ?? e.touches?.[0]?.clientY
    const startHeight = textarea.offsetHeight

    const onMove = (moveEvent) => {
      const currentY = moveEvent.clientY ?? moveEvent.touches?.[0]?.clientY
      textarea.style.height = Math.max(140, startHeight + (currentY - startY)) + 'px'
    }

    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', onUp)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchmove', onMove)
    document.addEventListener('touchend', onUp)
  }, [])

  const asideRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: asideRef,
    offset: ['start 82%', 'start 48%'],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })

    const newErrors = {}
    ;['name', 'email', 'message'].forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    const form = e.target
    const encoded = new URLSearchParams(new FormData(form)).toString()

    try {
      setSubmitError(false)
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err)
      setSubmitError(true)
      setTimeout(() => setSubmitError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative mx-auto px-6 md:px-16"
      style={{ paddingTop: 'clamp(88px, 11vh, 144px)', paddingBottom: 'clamp(88px, 11vh, 144px)', maxWidth: '1600px' }}
    >
      <SectionTag
        num=""
        eyebrow="Contact"
        title={
          <>
            Discutons
            <br />
             <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                de votre projet
              </span>
          </>
        }
        lead="Décrivez votre besoin en quelques lignes."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[53fr_47fr] gap-12 lg:gap-16 items-stretch">
        <Reveal className="h-full">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="h-full flex flex-col p-8 md:p-10"
            style={{ border: '1px solid var(--rule-soft)', background: '#192222' }}
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Ne pas remplir si vous êtes humain:
                <input name="bot-field" />
              </label>
            </div>

            <div className="flex flex-col gap-3">
              <FieldLabel label="Nom — prénom" htmlFor="name">
                <InputField
                  name="name"
                  placeholder="C. Thevenet"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name ? errors.name : ''}
                />
              </FieldLabel>
              <FieldLabel label="Email" htmlFor="email">
                <InputField
                  type="email"
                  name="email"
                  placeholder="vous@exemple.fr"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email ? errors.email : ''}
                />
              </FieldLabel>
            </div>

            <div className="flex flex-col mt-3">
              <FieldLabel label="Message" htmlFor="message">
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Quelques lignes sur le projet, l'audience, les contraintes connues..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={touched.message && errors.message ? 'true' : undefined}
                    aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        touched.message && errors.message ? 'rgba(239, 68, 68, 0.5)' : 'transparent'
                      handleBlur(e)
                    }}
                    className="w-full outline-none resize-none"
                    style={{
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid transparent',
                      padding: '14px 16px',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      textTransform: 'none',
                      lineHeight: 1.65,
                      minHeight: '140px',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(71,179,177,0.3)')}
                  />
                  <div
                    className="absolute bottom-1.5 right-1.5 cursor-s-resize select-none touch-none opacity-40 hover:opacity-80 transition-opacity duration-150"
                    onMouseDown={handleResizeStart}
                    onTouchStart={handleResizeStart}
                  >
                    <ArrowDownRight className="h-4 w-4" style={{ color: 'var(--mute)' }} />
                  </div>
                </div>
                {touched.message && errors.message ? (
                  <div id="message-error" role="alert" className="mono-sm mt-1.5" style={{ color: 'rgba(239, 68, 68, 0.8)', minHeight: '18px' }}>
                    {errors.message}
                  </div>
                ) : (
                  <div className="mono-sm mt-1.5" style={{ minHeight: '18px', visibility: 'hidden' }}>
                    {'\u00A0'}
                  </div>
                )}
              </FieldLabel>
            </div>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto pt-6"
              style={{ borderTop: '1px solid var(--rule)' }}
            >
              <p className="mono-sm" style={{ color: 'var(--mute)' }}>
                <span aria-hidden="true">↳ </span>Réponse sous 24h ouvrées
              </p>
              <button
                ref={submitRef}
                type="submit"
                className="mono px-7 py-4 border-none cursor-pointer transition-colors duration-200"
                style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer →'}
              </button>
            </div>

            {isSubmitted && (
              <p
                role="status"
                className="mono-sm mt-4 pt-4"
                style={{ color: 'var(--accent)', borderTop: '1px solid var(--rule)' }}
              >
                Message envoyé avec succès — je vous répondrai rapidement.
              </p>
            )}

            {submitError && (
              <p
                role="alert"
                className="mono-sm mt-4 pt-4"
                style={{ color: 'rgba(239, 68, 68, 0.8)', borderTop: '1px solid var(--rule)' }}
              >
                Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
              </p>
            )}
          </form>
        </Reveal>

        <aside ref={asideRef} className="flex flex-col" aria-labelledby="contact-coordonnees">
          <Reveal>
            <h3
              id="contact-coordonnees"
              className="mono mb-5 flex items-center gap-2"
              style={{ color: 'var(--mute)' }}
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Coordonnées
            </h3>
          </Reveal>

          <address style={{ fontStyle: 'normal' }}>
            <ul className="flex flex-col">
              {contactDetails.map((d, i) => (
                <ContactDetailItem
                  key={d.label}
                  d={d}
                  i={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </ul>
          </address>

          <div className="mt-auto pt-8">
            <h3
              id="contact-reseaux"
              className="mono mb-4 flex items-center gap-2"
              style={{ color: 'var(--mute)' }}
            >
              <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
              Réseaux
            </h3>
            <ul aria-labelledby="contact-reseaux" className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={social.name} social={social} index={index} size="xl" />
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
