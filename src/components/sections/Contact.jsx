import { useState } from 'react'
import {
  Mail,
  MapPin,
  Send,
  AlertCircle,
  Phone,
  MapPinHouse,
  Map,
  ShieldCheck,
  Tally4,
} from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants'
import { FiGithub } from 'react-icons/fi'
import FadeIn from '@/components/animations/FadeIn'
import { FaLinkedinIn, FaFacebookF, FaInstagram, } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const socialIcons = {
    github: FiGithub,
    linkedin: FaLinkedinIn,
    facebook: FaFacebookF,
    instagram: FaInstagram,
    x: FaXTwitter,
  }

  // Validation rules
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Le nom est requis'
        if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères'
        if (value.trim().length > 50) return 'Le nom ne peut pas dépasser 50 caractères'
        return ''
      case 'email':
        if (!value.trim()) return 'L\'email est requis'
        if (!emailRegex.test(value)) return 'Format d\'email invalide'
        return ''
      case 'message':
        if (!value.trim()) return 'Le message est requis'
        if (value.trim().length < 10) return 'Le message doit contenir au moins 10 caractères'
        if (value.trim().length > 1000) return 'Le message ne peut pas dépasser 1000 caractères'
        return ''
      default:
        return ''
    }
  }

  // Validate all fields
  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validate on change if field was already touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))

    // Validate on blur
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true })

    // Validate form
    if (!validateForm()) return

    setIsSubmitting(true)

    const form = e.target
    const formDataEncoded = new URLSearchParams(new FormData(form)).toString()

    try {
      setSubmitError(false)
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded,
      })
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error)
      setSubmitError(true)
      setTimeout(() => setSubmitError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Check if form is valid
  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim() &&
    !errors.name &&
    !errors.email &&
    !errors.message

  // Input class based on error state
  const getInputClass = (fieldName) => {
    const baseClass =
      'w-full rounded-lg border bg-black/30 px-4 py-3 text-white placeholder-white/30 transition-all duration-300 focus:outline-none'
    const errorClass = 'border-red-500/50 focus:border-red-500/70'
    const normalClass = 'border-white/10 focus:border-primary/50'

    return `${baseClass} ${touched[fieldName] && errors[fieldName] ? errorClass : normalClass}`
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-white/7 opacity-30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white/7 opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/7 opacity-30 blur-3xl" />
      </div>

      <FadeIn delay={0}>
        <div className="mb-12 text-center">
          <div className="bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Mail className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Me contacter
            </span>
          </div>

          <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-normal text-white lg:text-5xl">
            Un Projet ? Discutons
          </h2>
          <p className="mx-auto max-w-xl text-lg text-white/60">
            Mission freelance, site vitrine ou application sur mesure ?
            Parlons-en autour d'un café (virtuel ou réel).
          </p>
        </div>
      </FadeIn>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column - Form */}
          <FadeIn delay={100}>
            <div className="border-primary/20 hover:border-primary/35 from-primary/15 via-primary/5 hover:to-primary/3 to-primary/2 hover:from-primary/17 hover:via-primary/7 rounded-2xl border bg-linear-to-br p-8 transition-colors duration-300">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Ne pas remplir si vous êtes humain:
                    <input name="bot-field" />
                  </label>
                </div>

                {/* Name field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Votre nom"
                    className={getInputClass('name')}
                  />
                  {touched.name && errors.name && (
                    <p className="flex items-center gap-1.5 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="votre@email.com"
                    className={getInputClass('email')}
                  />
                  {touched.email && errors.email && (
                    <p className="flex items-center gap-1.5 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Parlez-moi de votre projet..."
                    className={`${getInputClass('message')} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p className="flex items-center gap-1.5 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button - Gradient style */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="from-primary/20 to-primary flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-linear-to-r px-6 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Success notification */}
                {isSubmitted && (
                  <div className="border-primary/30 bg-primary/10 rounded-lg border p-4">
                    <p className="text-primary text-sm">
                      Message envoyé avec succès ! Je vous répondrai rapidement.
                    </p>
                  </div>
                )}

                {/* Error notification */}
                {submitError && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                    <p className="text-sm text-red-400">
                      Une erreur est survenue. Veuillez réessayer ou me
                      contacter directement par email.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Right Column - Info */}
          <FadeIn delay={200}>
            <div className="flex flex-col justify-center">
              {/* Contact Cards **************************************** */}
              <div className="mb-5 space-y-3">
                {/* Location Card */}
                <div className="group hover:border-primary/30 from-primary/0 via-primary/0.5 to-primary/5 border-primary/20 flex items-center gap-4 rounded-xl border bg-linear-to-l p-2.5 transition-all duration-300">
                  <div className="border-primary/30 from-primary/10 to-primary/5 flex h-9.5 w-10 items-center justify-center rounded-xl border bg-linear-to-br">
                    <Map className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">Secteur</p>
                    <p className="font-medium text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group hover:border-primary/30 from-primary/0 via-primary/0.5 to-primary/5 border-primary/20 flex items-center gap-4 rounded-xl border bg-linear-to-l p-2.5 transition-all duration-300">
                  <div className="border-primary/30 from-primary/10 to-primary/5 flex h-9.5 w-10 items-center justify-center rounded-xl border bg-linear-to-br">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">Téléphone</p>
                    <p className="font-medium text-white">
                      {PERSONAL_INFO.telephone}
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group hover:border-primary/30 from-primary/0 via-primary/0.5 to-primary/5 border-primary/20 flex items-center gap-4 rounded-xl border bg-linear-to-l p-2.5 transition-all duration-300">
                  <div className="border-primary/30 from-primary/10 to-primary/5 flex h-9.5 w-10 items-center justify-center rounded-xl border bg-linear-to-br">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium text-white">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="group hover:border-primary/30 from-primary/0 via-primary/0.5 to-primary/5 border-primary/20 flex items-center gap-4 rounded-xl border bg-linear-to-l p-2.5 transition-all duration-300">
                  <div className="border-primary/30 from-primary/10 to-primary/5 flex h-9.5 w-10 items-center justify-center rounded-xl border bg-linear-to-br">
                    <MapPinHouse className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">Adresse</p>
                    <p className="font-medium text-white">
                      {PERSONAL_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Assurance Card */}
                <div className="group hover:border-primary/30 from-primary/0 via-primary/0.5 to-primary/5 border-primary/20 flex items-center gap-4 rounded-xl border bg-linear-to-l p-2.5 transition-all duration-300">
                  <div className="border-primary/30 from-primary/10 to-primary/5 flex h-9.5 w-10 items-center justify-center rounded-xl border bg-linear-to-br">
                    <ShieldCheck className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">Assurance</p>
                    <p className="font-medium text-white">
                      {PERSONAL_INFO.insurance}
                    </p>
                  </div>
                </div>

                {/* Siret Card */}
                <div className="group hover:border-primary/30 from-primary/0 via-primary/0.5 to-primary/5 border-primary/20 flex items-center gap-4 rounded-xl border bg-linear-to-l p-2.5 transition-all duration-300">
                  <div className="border-primary/30 from-primary/10 to-primary/5 flex h-9.5 w-10 items-center justify-center rounded-xl border bg-linear-to-br">
                    <Tally4 className="text-primary h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/60">Siret</p>
                    <p className="font-medium text-white">
                      {PERSONAL_INFO.siret}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social, index) => {
                    const IconComponent =
                      socialIcons[social.name.toLowerCase()] || FiGithub
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon hover:border-primary/50 hover:bg-primary/10 flex h-13 w-15 items-center justify-center rounded-lg border border-white/10 bg-black/20 transition-all duration-300"
                      >
                        <IconComponent className="group-hover/icon:text-primary h-6 w-6 text-white/70" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
