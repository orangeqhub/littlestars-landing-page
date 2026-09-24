import Reveal from '../components/Reveal.jsx'
import svcRehab  from '../assets/images/svc_rehab.jpg'
import svcPhysio from '../assets/images/svc_physio.jpg'
import svcOt     from '../assets/images/svc_ot.jpg'
import svcSpeech from '../assets/images/svc_speech.jpg'

const ITEMS = [
  {
    img: svcRehab,
    title: 'Pediatric Rehabilitation',
    text:  'Comprehensive, child-centred rehabilitation programs that address the root cause — combining multiple therapy disciplines into one coordinated plan built around your child\'s unique needs and goals.',
    side: 'left',
  },
  {
    img: svcPhysio,
    title: 'Physiotherapy',
    text:  'Root-cause physiotherapy for movement — building strength, balance, coordination and confidence, from first sitting and crawling to running and playground games.',
    side: 'right',
  },
  {
    img: svcOt,
    title: 'Occupational Therapy',
    text:  'Fine motor and everyday skills — dressing, feeding, writing and self-care — rebuilt through purposeful, play-based activity that feels like fun.',
    side: 'left',
  },
  {
    img: svcSpeech,
    title: 'Speech & Language Therapy',
    text:  'Nurturing communication from first sounds and words to clear conversation — with feeding and oral-motor support so every child\'s voice shines.',
    side: 'right',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">

      {/* decorative blobs */}
      <span className="svc-blob svc-blob--tl" aria-hidden="true" />
      <span className="svc-blob svc-blob--br" aria-hidden="true" />

      <div className="container">

        {/* heading */}
        <Reveal className="svc-head">
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true" />
            Conditions Treated
            <span className="eyebrow-star" aria-hidden="true" />
          </span>
          <h2 className="section-title">Our&nbsp;<span className="text-gradient">Services</span></h2>
        </Reveal>

        {/* timeline */}
        <div className="svc-timeline">

          {/* centre vertical rail */}
          <div className="svc-rail" aria-hidden="true" />

          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              variant={item.side === 'left' ? 'left' : 'right'}
              className={`svc-row svc-row--${item.side}`}
            >
              {/* image hexagon */}
              <div className="svc-hex-wrap">
                <div className="svc-hex">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
              </div>

              {/* connector */}
              <div className="svc-connector" aria-hidden="true">
                <span className="svc-dot" />
                <span className="svc-line" />
                <span className="svc-dot svc-dot--center" />
              </div>

              {/* text */}
              <div className="svc-copy">
                <span className="svc-num" aria-hidden="true">0{i + 1}</span>
                <h3 className="svc-title">{item.title}</h3>
                <p className="svc-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}