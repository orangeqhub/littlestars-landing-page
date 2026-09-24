import Reveal from '../components/Reveal.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { stats } from '../data/site.js'

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-star stats-star--one" aria-hidden="true" />
      <div className="stats-star stats-star--two" aria-hidden="true" />
      <div className="container">
        <Reveal className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat" key={s.label}>
              <span className="stat-number">
                <AnimatedCounter value={s.value} suffix={s.suffix} duration={1600 + i * 150} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}