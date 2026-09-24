import Icon from './Icons.jsx'
import { site } from '../data/site.js'

const SHOW = ['facebook', 'instagram', 'whatsapp']

export default function SocialFloat() {
  const buttons = site.socials.filter((s) => SHOW.includes(s.icon))

  return (
    <div className="social-float" aria-label="Social media links">
      {buttons.map((s) => (
        <a
          key={s.icon}
          href={s.href}
          className={`social-float-btn social-float-btn--${s.icon}`}
          aria-label={s.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={s.icon} size={20} />
        </a>
      ))}
    </div>
  )
}
