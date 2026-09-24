import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import welcomeImg from '../assets/images/welcome.jpg'
import { ROUTES, navigate } from '../lib/router.js'

export default function Welcome() {
  const openAbout = (e) => {
    e.preventDefault()
    navigate(ROUTES.ABOUT)
  }

  return (
    <section className="section welcome" id="about">
      <div className="container welcome-grid">
        <Reveal variant="left" className="welcome-visual">
          <div className="img-frame welcome-img-frame">
            <img src={welcomeImg} alt="Child happily stacking learning blocks during occupational therapy" />
          </div>
          <div className="experience-badge float-slow" aria-hidden="true">
            <span className="experience-num">15+</span>
            <span className="experience-label">Years of combined<br />pediatric experience</span>
          </div>
        </Reveal>

        <div className="welcome-content">
          <SectionHeading
            align="left"
            eyebrow="About Little Stars"
            title="Supporting Every Child's Journey"
            text="Little Stars is a child-centered pediatric rehabilitation center where gentle, evidence-based physiotherapy and play-centered therapy meet — so progress feels less like work and more like discovery."
            className="welcome-heading"
          />

          <Reveal delay={120}>
            <p className="welcome-learn">
              Find out who we are, what we believe and how our team can help your child grow in
              confidence, independence and everyday skills.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="welcome-learn-actions">
              <Button href="/about" icon="arrow" onClick={openAbout}>
                Learn More About Us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}