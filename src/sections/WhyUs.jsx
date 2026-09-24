import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { whyUs } from '../data/site.js'

const ACCENTS = ['--gold', '--orange', '--rose', '--blue', '--mint', '--purple']

export default function WhyUs() {
  return (
    <section className="section why" id="why-us">
      <div className="container">

        {/* ── Heading ── */}
        <Reveal className="why-head">
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true" />
            Why Families Choose Us
            <span className="eyebrow-star" aria-hidden="true" />
          </span>
          <h2 className="section-title">
            Care That&nbsp;Puts&nbsp;Your Child&nbsp;<span className="text-gradient">First</span>
          </h2>
          <p className="section-text">
            Parents trust us with what matters most. Here is why hundreds of
            families choose Little&nbsp;Stars for their child's rehabilitation journey.
          </p>
        </Reveal>

        {/* ── Cards ── */}
        <div className="why-grid">
          {whyUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="why-card"
              style={{ '--accent': `var(${ACCENTS[i % ACCENTS.length]})` }}
            >
              <div className="why-card-top">
                <span className="why-card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="why-card-icon">
                  <Icon name={item.icon} size={22} />
                </span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.text}</p>
              <span className="why-card-bar" aria-hidden="true" />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}