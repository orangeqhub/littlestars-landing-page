import parallaxImage from '../assets/images/parallax-effect.png'

export default function ParallaxEffect() {
  return (
    <section className="parallax-effect" aria-hidden="true">
      <div
        className="parallax-effect-media"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      />
      <div className="parallax-effect-overlay" />
    </section>
  )
}