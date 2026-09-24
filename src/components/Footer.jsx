import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { navLinks, services, site } from '../data/site.js'
import { ROUTES, navigate, goHomeToSection } from '../lib/router.js'

export default function Footer() {
  const year = new Date().getFullYear()

  const navTo = (e, target) => {
    e.preventDefault()
    if (target === 'about') navigate(ROUTES.ABOUT)
    else if (target === 'contact') navigate(ROUTES.CONTACT)
    else goHomeToSection(target)
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{site.tagline}. Gentle, evidence-based pediatric rehabilitation that helps every child grow, learn, move and thrive.</p>
          <div className="footer-socials">
            {site.socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} className="footer-social" onClick={(e) => navTo(e, 'contact')}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.target}>
                <a href={`#${l.target}`} onClick={(e) => navTo(e, l.target)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" onClick={(e) => navTo(e, 'services')}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li>
              <Icon name="phone" size={17} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={17} />
              <a href={site.emailHref}>{site.email}</a>
            </li>
            <li>
              <Icon name="pin" size={17} />
              <span>{site.address}</span>
            </li>
            <li>
              <Icon name="clock" size={17} />
              <span>Mon – Sat · 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p className="footer-made">Made with <span className="footer-heart">&hearts;</span> for every little star</p>
        </div>
      </div>
    </footer>
  )
}