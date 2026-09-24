import logo from '../assets/little-stars-logo.png'
import { site } from '../data/site.js'
import { getPath, navigate, ROUTES, scrollToId } from '../lib/router.js'

export default function Logo({ className = '' }) {
  const goHome = (e) => {
    e.preventDefault()
    if (getPath() === ROUTES.HOME) {
      scrollToId('home')
      window.history.replaceState(null, '', ROUTES.HOME)
    } else {
      navigate(ROUTES.HOME)
    }
  }

  return (
    <a
      href={ROUTES.HOME}
      className={`logo ${className}`}
      onClick={goHome}
      aria-label={`${site.name} - home`}
    >
      <img src={logo} alt="Little Stars Rehabilitation Center logo" className="logo-img" />
      <span className="logo-text">
        <strong>Little Stars</strong>
        <small>Rehabilitation Center</small>
      </span>
    </a>
  )
}