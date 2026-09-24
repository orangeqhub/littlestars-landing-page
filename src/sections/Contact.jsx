import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'
import Button from '../components/Button.jsx'
import { site } from '../data/site.js'

const WHATSAPP_NUMBER = '919618684700'

const infoCards = [
  { icon: 'phone',  title: 'Call Us',   value: site.phone,   href: site.phoneHref,   external: false },
  { icon: 'mail',   title: 'Email Us',  value: site.email,   href: site.emailHref,   external: false },
  { icon: 'pin',    title: 'Visit Us',  value: site.address, href: site.addressHref, external: true  },
]

const AGE_LABELS = {
  '0-2': '0 \u2013 2 years',
  '3-5': '3 \u2013 5 years',
  '6-9': '6 \u2013 9 years',
  '10-13': '10 \u2013 13 years',
  '14+': '14 years and above',
}

const buildWhatsAppMessage = (formData) => {
  const ageLabel = formData.childAge ? AGE_LABELS[formData.childAge] : ''
  const lines = [
    `Hello ${site.name},`,
    '',
    'New Appointment Request',
    '',
    `Parent / Guardian Name: ${formData.name.trim()}`,
    `Phone Number: ${formData.phone.trim()}`,
  ]
  if (formData.email.trim()) lines.push(`Email Address: ${formData.email.trim()}`)
  if (ageLabel) lines.push(`Child's Age: ${ageLabel}`)
  lines.push('', 'How can we help:', formData.message.trim(), '', 'Thank you.')
  return lines.join('\n')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', childAge: '', message: '' })

  const update = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm((f) => ({ ...f, phone: value.replace(/\D/g, '').slice(0, 10) }))
      return
    }
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !/^\d{10}$/.test(form.phone) || !form.message.trim()) return
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(form))}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Start the Conversation"
          text="Have a question or ready to book a pediatric rehabilitation appointment? Reach out — our friendly care team will get back to you within one working day."
        />

        <div className="contact-grid">
          <Reveal className="contact-info-col">
            <div className="contact-cards">
              {infoCards.map((c) => (
                <div className="contact-card" key={c.title}>
                  <span className="contact-card-icon">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <div>
                    <h3>{c.title}</h3>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="contact-card contact-card--hours">
                <span className="contact-card-icon">
                  <Icon name="clock" size={22} />
                </span>
                <div>
                  <h3>Working Hours</h3>
                  {site.hours.map((h) => (
                    <p className="hours-row" key={h.day}>
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-map" aria-hidden="true">
              <Icon name="pin" size={30} />
              <p>We’re easy to reach — drop by for a warm tour of our center.</p>
            </div>
          </Reveal>

          <Reveal delay={140} className="contact-form-card">
            <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <label className="field">
                    <span>Parent / Guardian Name *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={update}
                    />
                  </label>
                  <label className="field">
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={update}
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label className="field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={update}
                    />
                  </label>
                  <label className="field">
                    <span>Child’s Age</span>
                    <select name="childAge" value={form.childAge} onChange={update}>
                      <option value="">Select age</option>
                      <option value="0-2">0 – 2 years</option>
                      <option value="3-5">3 – 5 years</option>
                      <option value="6-9">6 – 9 years</option>
                      <option value="10-13">10 – 13 years</option>
                      <option value="14+">14 years and above</option>
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span>How can we help? *</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us a little about your child and your hopes for their care…"
                    value={form.message}
                    onChange={update}
                  />
                </label>

                <Button as="button" type="submit" variant="primary" size="lg" icon="calendar" className="form-submit">
                  Request Appointment
                </Button>
                <p className="form-note">We respect your privacy. Your details stay with our care team only.</p>
              </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}