import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import Button from './Button.jsx'
import { navLinks, site } from '../data/site.js'
import { ROUTES, navigate, goHomeToSection } from '../lib/router.js'

export default function Navbar({ path = ROUTES.HOME }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(
    path === ROUTES.ABOUT ? 'about' : path === ROUTES.CONTACT ? 'contact' : 'home'
  )
  const isPage = path === ROUTES.ABOUT || path === ROUTES.CONTACT

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    if (isPage) {
      setActive(path === ROUTES.ABOUT ? 'about' : 'contact')
      return undefined
    }
    setActive(() => (window.location.hash ? window.location.hash.slice(1) : 'home'))
    const sections = navLinks.map((l) => document.getElementById(l.target)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isPage, path])

  const goTo = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (id === 'about') {
      navigate(ROUTES.ABOUT)
      return
    }
    if (id === 'contact') {
      navigate(ROUTES.CONTACT)
      return
    }
    goHomeToSection(id)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar-inner">
        <Logo />

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className={`nav-link ${active === link.target ? 'is-active' : ''}`}
              onClick={(e) => goTo(e, link.target)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <Button href={ROUTES.CONTACT} variant="primary" icon="calendar" size="md"
            onClick={(e) => goTo(e, 'contact')}
            className="navbar-cta"
          >
            Book an Appointment
          </Button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-links" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              style={{ transitionDelay: open ? `${120 + i * 55}ms` : '0ms' }}
              className={`mobile-link ${active === link.target ? 'is-active' : ''}`}
              onClick={(e) => goTo(e, link.target)}
            >
              <span className="mobile-link-num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-bottom" style={{ transitionDelay: open ? '480ms' : '0ms' }}>
          <Button href={ROUTES.CONTACT} variant="primary" icon="calendar" onClick={(e) => goTo(e, 'contact')}>
            Book an Appointment
          </Button>
          <a className="mobile-phone" href={site.phoneHref}>
            <Icon name="phone" size={18} /> {site.phone}
          </a>
        </div>
      </div>

      <div className={`nav-overlay ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
    </header>
  )
}