import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { teamRoles } from '../data/site.js'

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="A Team That Believes in Your Child"
          text="Licensed pediatric physiotherapists, occupational and speech therapists, special educators and behavior specialists — one team, one shared mission: helping your child reach their full potential. Every Little Stars therapist is trained, licensed and endlessly patient."
        />

        <div className="team-grid">
          {teamRoles.map((role, i) => (
            <Reveal key={role.title} delay={(i % 3) * 100} className="team-card">
              <span className="team-avatar" aria-hidden="true">
                {role.initials}
              </span>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}