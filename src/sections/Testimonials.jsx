import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return undefined
    timer.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(timer.current)
  }, [paused])

  const t = testimonials[index]

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container testimonials-container">
        <SectionHeading
          eyebrow="Happy Families"
          title="Words From Our Families"
          text="Genuine words from families — the quotes below are clearly marked placeholders until we publish real Little Stars family stories."
        />

        <Reveal className="testimonial-reveal">
          <div
            className="testimonial-shell"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="testimonial-quote-mark" aria-hidden="true">
              <Icon name="quote" size={44} />
            </div>

            <div className="testimonial-track">
              {testimonials.map((item, i) => (
                <figure
                  key={item.name}
                  className={`testimonial-card ${i === index ? 'is-active' : ''}`}
                  aria-hidden={i !== index}
                >
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Icon key={s} name="star" size={18} />
                    ))}
                  </div>
                  <blockquote>{item.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial-avatar">{item.initials}</span>
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.role}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="testimonial-nav">
              <button type="button" className="testimonial-btn" aria-label="Previous testimonial" onClick={() => go(-1)}>
                <Icon name="chevronLeft" size={20} />
              </button>

              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`dot ${i === index ? 'is-active' : ''}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>

              <button type="button" className="testimonial-btn" aria-label="Next testimonial" onClick={() => go(1)}>
                <Icon name="chevronRight" size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}