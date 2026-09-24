import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'
import careImg from '../assets/images/care.jpg'
import { carePillars } from '../data/site.js'

export default function Care() {
  return (
    <section className="section care" id="care">
      <div className="container care-grid">
        <div className="care-content">
          <SectionHeading
            align="left"
            eyebrow="Care Designed Around Your Child"
            title="Care Designed Around Your Child"
            text="Behind every technique is one simple belief: your child is more than a diagnosis. We look at the whole child — their favourite toys, their biggest smiles, their own wonderful pace — and design evidence-based rehabilitation around them."
            className="care-heading"
          />

          <div className="care-pillars">
            {carePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="care-pillar">
                <span className="care-pillar-num">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="right" className="care-visual">
          <div className="img-frame care-img-frame">
            <img src={careImg} alt="Therapist guiding a smiling child with a therapy ball during physiotherapy" />
          </div>
          <div className="care-chip float-slow" aria-hidden="true">
            <span className="chip-icon chip-icon--coral">
              <Icon name="sprout" size={20} />
            </span>
            <span>
              <strong>Every child thrives</strong>
              at their own pace
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}