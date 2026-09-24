import Reveal from '../components/Reveal.jsx'
import referenceImg from '../assets/images/reference.png'

export default function Showcase() {
  return (
    <section className="section showcase" id="showcase">
      <div className="container showcase-inner">
        <Reveal variant="up" className="showcase-banner">
          <img
            className="showcase-banner-media"
            src={referenceImg}
            alt="Illustration celebrating warm family care at Little Stars Rehabilitation Center"
          />
        </Reveal>
      </div>
    </section>
  )
}