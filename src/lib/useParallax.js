import { useEffect } from 'react'

const DEFAULT_SPEED = 0.2
const DEFAULT_MAX = 60
const MOBILE_FACTOR = 0.45

export default function useParallax(deps = []) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-parallax]'))
    if (!elements.length) return undefined

    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqCoarse = window.matchMedia('(pointer: coarse)')
    if (mqReduced.matches) return undefined

    let raf = 0

    const apply = () => {
      raf = 0
      const vh = window.innerHeight || document.documentElement.clientHeight
      const vhCenter = vh / 2
      const reducedOnMobile = mqCoarse.matches || window.innerWidth < 768

      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        if (rect.width === 0 && rect.height === 0) continue

        const speed = parseFloat(el.getAttribute('data-parallax-speed')) || DEFAULT_SPEED
        const max = parseFloat(el.getAttribute('data-parallax-max')) || DEFAULT_MAX
        const center = rect.top + rect.height / 2

        let offset = (center - vhCenter) * speed
        if (reducedOnMobile) offset *= MOBILE_FACTOR
        offset = Math.max(-max, Math.min(max, offset))

        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
      }
    }

    const onScrollOrResize = () => {
      if (!raf) raf = window.requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (raf) window.cancelAnimationFrame(raf)
      for (const el of elements) el.style.transform = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}