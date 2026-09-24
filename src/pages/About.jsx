import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icons.jsx'
import about1 from '../assets/images/about-1.jpeg.png'
import about2 from '../assets/images/about-2.jpeg.jpeg'
import { Star } from '../components/FloatingStars.jsx'
import { navigate, ROUTES, scrollToId } from '../lib/router.js'

const messageParagraphs = [
  'Hi parents, this is Dr. Sindhura, founder of Little Stars Early Intervention Center, Guntur.',
  'I started my career as a rehab assistant in Australia, then moved to New Zealand to gain further experience in rehabilitation. Afterwards, we moved to Guntur and established Little Stars Rehabilitation Center.',
  'Primarily, we focus on early intervention for children up to seven years old who are experiencing developmental delays. We provide rigorous treatment and therapy plans. Unlike centers where a child comes in for a standard one-hour session and is sent home, we offer detailed, ongoing guidance for both parents and children here at Little Stars.',
  'So parents, if you notice developmental delays in your child, are wondering what steps will help them improve, or feel confused about where to go, you can visit and consult with us at Little Stars Early Intervention Center, Guntur. We are here to guide and help you in a very detailed manner. Thank you.',
]

const homeClick = (e) => {
  e.preventDefault()
  if (window.location.pathname !== ROUTES.HOME) navigate(ROUTES.HOME)
  else scrollToId('home')
}

export default function About() {
  return (
    <>
      {/* ======== Hero / Banner ======== */}
      <section className="about-hero" id="about">
        <div className="about-hero-glow about-hero-glow--one" aria-hidden="true" />
        <div className="about-hero-glow about-hero-glow--two" aria-hidden="true" />
        <Star size={26} className="about-hero-star about-hero-star--one" style={{ color: '#ffc85c' }} />
        <Star size={18} className="about-hero-star about-hero-star--two" style={{ color: '#a7d9f5' }} />
        <Star size={24} className="about-hero-star about-hero-star--three" style={{ color: '#dfc2ee' }} />

        <div className="container about-hero-inner">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <a href="/" onClick={homeClick}>Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>

          <Reveal>
            <span className="eyebrow about-hero-eyebrow">
              <span className="eyebrow-star" aria-hidden="true" />
              About Us
              <span className="eyebrow-star" aria-hidden="true" />
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="about-hero-title">
              About <span className="text-gradient">Little Stars</span> Early Intervention Center
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="about-hero-sub">
              A professional pediatric rehabilitation center where gentle, evidence-based physiotherapy
              and developmental care meet play — helping every child move, learn and grow with
              confidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======== 1. About Little Stars ======== */}
      <section className="about-section about-intro" id="about-intro">
        <div className="container about-grid">
          <Reveal variant="left" className="about-copy">
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Little Stars Early Intervention Center"
              className="about-heading"
            />
            <Reveal delay={120}>
              <p className="about-lead">
                Founded by Dr. Sindhura, Little Stars Early Intervention Center in Guntur is dedicated
                to supporting children with developmental delays and guiding families through tailored
                therapeutic care.
              </p>
            </Reveal>
          </Reveal>

          <Reveal variant="right" className="about-visual" delay={120}>
            <div className="img-frame" style={{ aspectRatio: '1 / 1.05' }}>
              <img src={about1} alt="Little Stars therapist working with a child" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======== 2. Our Journey & Expertise ======== */}
      <section className="about-section about-section--soft" id="about-journey">
        <div className="container about-grid about-grid--swap">
          <Reveal variant="right" className="about-visual" delay={120}>
            <div className="img-frame" style={{ aspectRatio: '1 / 1' }}>
              <img src={about2} alt="Child receiving early developmental support" loading="lazy" />
            </div>
          </Reveal>

          <Reveal variant="left" className="about-copy">
            <SectionHeading
              align="left"
              eyebrow="Our Journey & Expertise"
              title="Bringing International Standards Home"
              className="about-heading"
            />
            <Reveal delay={120}>
              <p>
                Dr. Sindhura began her professional career as a rehabilitation assistant in Australia
                and later expanded her clinical expertise in New Zealand.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Bringing international rehabilitation standards home, she established Little Stars in
                Guntur to provide specialized early intervention for children up to seven years of age.
              </p>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* ======== 3. Our Approach ======== */}
      <section className="about-section" id="about-approach">
        <div className="container">
          <SectionHeading
            eyebrow="Our Approach"
            title="Structured, Comprehensive Care"
            text="How we support children with developmental delays and guide their families."
          />
          <Reveal delay={120}>
            <div className="about-copy-block">
              <p>
                Unlike conventional, hurried therapy sessions, our approach is built on structured,
                comprehensive care. We design rigorous, customized treatment and therapy plans,
                providing step-by-step guidance for both parents and children.
              </p>
              <p>
                If you notice developmental delays in your child or are seeking clear, reliable
                direction on the best steps forward, our team is here to support your child&rsquo;s
                growth through detailed consultations and individualized therapy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======== 4. Message from the Founder ======== */}
      <section className="about-section about-section--lilac" id="about-message">
        <div className="container">
          <SectionHeading
            eyebrow="From the Founder"
            title="A Message from Dr. Sindhura"
            text="A personal note for every parent who visits Little Stars."
          />
          <Reveal delay={140}>
            <div className="about-message">
              <span className="about-message-icon" aria-hidden="true">
                <Icon name="quote" size={40} />
              </span>
              {messageParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======== Bottom CTA ======== */}
      <section className="cta-section about-cta" id="about-cta">
        <div className="container">
          <Reveal className="cta-banner">
            <Star size={30} className="cta-star cta-star--one" style={{ color: '#ffd66b' }} />
            <Star size={20} className="cta-star cta-star--two" style={{ color: '#a7d9f5' }} />
            <Star size={24} className="cta-star cta-star--three" style={{ color: '#ffb1bd' }} />

            <span className="eyebrow eyebrow--light">
              <span className="eyebrow-star" aria-hidden="true" />
              Get Started
              <span className="eyebrow-star" aria-hidden="true" />
            </span>
            <h2 className="cta-title">Take the First Step for Your Little Star</h2>
            <p className="cta-text">
              Connect with our team to understand how personalized rehabilitation support can help
              your child.
            </p>
            <div className="cta-actions">
              <Button
                as="a"
                href={ROUTES.CONTACT}
                variant="white"
                icon="calendar"
                size="lg"
                className="cta-btn"
                onClick={(e) => {
                  e.preventDefault()
                  navigate(ROUTES.CONTACT)
                }}
              >
                Book an Appointment
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}