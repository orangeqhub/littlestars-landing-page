import { useEffect, useState } from 'react'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
}

const NAV_EVENT = 'little-stars:navigate'

export function getPath() {
  const { pathname } = window.location
  if (pathname === ROUTES.ABOUT || pathname.startsWith(`${ROUTES.ABOUT}/`)) {
    return ROUTES.ABOUT
  }
  if (pathname === ROUTES.CONTACT || pathname.startsWith(`${ROUTES.CONTACT}/`)) {
    return ROUTES.CONTACT
  }
  return ROUTES.HOME
}

export function navigate(path) {
  window.history.pushState(null, '', path)
  window.dispatchEvent(new Event(NAV_EVENT))
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

export function scrollToId(id) {
  if (!id || id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function goHomeToSection(id) {
  if (getPath() === ROUTES.HOME) {
    scrollToId(id)
    return
  }
  navigate(ROUTES.HOME)
  window.setTimeout(() => scrollToId(id), 90)
}

export function usePath() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const sync = () => {
      setPath(getPath())
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
    window.addEventListener('popstate', sync)
    window.addEventListener(NAV_EVENT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(NAV_EVENT, sync)
    }
  }, [])

  return path
}