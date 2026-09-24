import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, text, align = 'center', className = '' }) {
  return (
    <div className={`section-head section-head--${align} ${className}`}>
      <Reveal>
        {eyebrow && (
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true" />
            {eyebrow}
            <span className="eyebrow-star" aria-hidden="true" />
          </span>
        )}
        {title && <h2 className="section-title">{title}</h2>}
      </Reveal>
      {text && (
        <Reveal delay={120}>
          <p className="section-text">{text}</p>
        </Reveal>
      )}
    </div>
  )
}