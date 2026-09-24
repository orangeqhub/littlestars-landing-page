import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { journeySteps } from '../data/site.js'

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="Therapy Journey"
          title="Your Child's Journey With Us"
          text="A clear, caring path — from the very first hello to confident new milestones. Here is what your family can expect from pediatric rehabilitation at every step."
        />

        <div className="journey-track">
          {journeySteps.map((j, i) => (
            <Reveal key={j.step} delay={i * 130} className="journey-step">
              <span className="journey-dot" aria-hidden="true">
                {j.step}
              </span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
              {i < journeySteps.length - 1 && <span className="journey-arrow" aria-hidden="true">&#8594;</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}