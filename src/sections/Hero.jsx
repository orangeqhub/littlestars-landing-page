import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import FloatingStars from '../components/FloatingStars.jsx'
import Icon from '../components/Icons.jsx'
import heroImg from '../assets/images/hero-baby.jpg'
import { navigate, ROUTES } from '../lib/router.js'

const scrollTo = (e, id) => {
  e.preventDefault()
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <FloatingStars data-parallax data-parallax-speed="0.12" data-parallax-max="24" />
      <div className="hero-blob-scene hero-blob-scene--one" data-parallax data-parallax-speed="0.15" data-parallax-max="26" aria-hidden="true">
        <div className="hero-blob hero-blob--one" />
      </div>
      <div className="hero-blob-scene hero-blob-scene--two" data-parallax data-parallax-speed="0.15" data-parallax-max="26" aria-hidden="true">
        <div className="hero-blob hero-blob--two" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <span className="hero-badge">
              <Icon name="star" size={15} />
              Welcome to Little Stars Rehabilitation Center
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero-title">
              Helping Little Stars <span className="text-gradient">Shine Brighter</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="hero-text">
              Compassionate pediatric physiotherapy, occupational therapy and rehabilitation —
              helping every child move, learn, play and thrive with confidence.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-actions">
              <Button
                href={ROUTES.CONTACT}
                icon="calendar"
                onClick={(e) => {
                  e.preventDefault()
                  navigate(ROUTES.CONTACT)
                }}
              >
                Book an Appointment
              </Button>
              <Button href="#services" variant="ghost" icon="arrow" onClick={(e) => scrollTo(e, 'services')}>
                Explore Our Services
              </Button>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="hero-trust">
              <div className="trust-avatars" aria-hidden="true">
                <span className="avatar avatar--1">M</span>
                <span className="avatar avatar--2">A</span>
                <span className="avatar avatar--3">D</span>
                <span className="avatar avatar--4">S</span>
              </div>
              <div className="trust-text">
                <div className="trust-stars" aria-label="Rated 4.9 out of 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" size={14} />
                  ))}
                </div>
                <p>Trusted by 1,200+ happy families</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={150} className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="hero-img-frame img-frame">
              <img src={heroImg} alt="A parent gently holding a baby's foot at Little Stars Rehabilitation Center" />
            </div>

            <div className="hero-chip hero-chip--top float-slow" aria-hidden="true">
              <span className="chip-icon chip-icon--mint">
                <Icon name="sparkle" size={20} />
              </span>
              <span>
                <strong>Play-Based</strong>
                Therapy that feels like fun
              </span>
            </div>

            <div className="hero-chip hero-chip--bottom float-slower" aria-hidden="true">
              <span className="chip-icon chip-icon--purple">
                <Icon name="heart" size={20} />
              </span>
              <span>
                <strong>Family-Centered</strong>
                You’re part of the team
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" width="100%" height="90">
          <path
            d="M0 60 C 240 100, 480 10, 720 45 C 960 80, 1200 20, 1440 55 L 1440 90 L 0 90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}