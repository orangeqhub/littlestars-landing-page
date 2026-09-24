const icons = {
  blocks: (
    <>
      <rect x="5" y="13" width="6.5" height="6.5" rx="1.5" />
      <rect x="12.5" y="13" width="6.5" height="6.5" rx="1.5" />
      <rect x="8.75" y="5.5" width="6.5" height="6.5" rx="1.5" />
    </>
  ),
  activity: <polyline points="3 12 7 12 9 6 13 18 15 12 19 12 21 12" />,
  chat: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.9 8.9 0 0 1-3.7-.8L3 20l1-4.9a8.2 8.2 0 0 1-1-3.6A8.4 8.4 0 0 1 11.5 3.2a8.4 8.4 0 0 1 9.5 8.3Z" />
      <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" />
    </>
  ),
  grad: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="M5.5 9.5V15c0 1.2 2.9 3 6.5 3s6.5-1.8 6.5-3V9.5" />
      <path d="M21 8.5V13" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-6" />
      <path d="M12 15c0-3.5-1.5-6-6.5-6.5 0 3.5 1.5 6 6.5 6.5Z" />
      <path d="M12 12.5C12 9.5 13.5 7.5 18.5 7 18.5 10 17 12.6 12 12.5Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.7V11c0 4.4 2.8 7.6 7 9.3 4.2-1.7 7-4.9 7-9.3V5.7L12 3Z" />
      <path d="m9 11.5 2 2 4-4.2" />
    </>
  ),
  sparkle: (
    <path d="M12 3c.7 3.2 1.3 5.3 1.6 6.8 1.5.3 3.6.9 6.4 1.6-2.8.7-4.9 1.3-6.4 1.6-.3 1.5-.9 3.6-1.6 6.4-.7-2.8-1.3-4.9-1.6-6.4-1.5-.3-3.6-.9-6.4-1.6 2.8-.7 4.9-1.3 6.4-1.6.3-1.5.9-3.6 1.6-6.8Z" />
  ),
  family: (
    <>
      <circle cx="8" cy="8.5" r="3" />
      <path d="M3.5 20c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" />
      <circle cx="16.5" cy="10" r="2.4" />
      <path d="M14 20c0-2.2 1-3.6 2.5-3.6S19 17.8 19 20" />
    </>
  ),
  heart: (
    <path d="M12 20.5C7 16.5 3.5 13.4 3.5 9.7A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8.5 2.7c0 3.7-3.5 6.8-8.5 10.8Z" />
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3.5 9h17M3.5 15h17" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <path d="M9 4.5V3.8A1 1 0 0 1 10 3h4a1 1 0 0 1 1 .8v.7" />
      <path d="M9 12h6M9 16h6M9 8.5h3" />
    </>
  ),
  puzzle: (
    <path d="M10 3h4v3.5h3.5V10H21v4h-3.5v3.5H14V21h-4v-3.5H6.5V14H3v-4h3.5V6.5H10V3Z" />
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M8 20V12M12 20V5M16 20V9" />
    </>
  ),
  users: (
    <>
      <circle cx="12" cy="7.5" r="3.2" />
      <circle cx="7" cy="9" r="2.2" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M4.8 20c0-2.9 2.6-5 7-5s7 2.1 7 5" />
      <path d="M2 20c0-1.6 1.2-2.8 3-3.3" />
      <path d="M22 20c0-1.6-1.2-2.8-3-3.3" />
    </>
  ),
  phone: (
    <path d="M5 4h4l1.8 4.2-2.3 1.5a13 13 0 0 0 5.8 5.8l1.5-2.3L20 15v4a2 2 0 0 1-2 2A16.8 16.8 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="4.5" width="17" height="17" rx="2.5" />
      <path d="M3.5 9.5h17M8 2.5V6M16 2.5V6" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01" />
    </>
  ),
  check: <path d="m20 6-11 11-5-5" />,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  star: (
    <path d="M12 2.5c.7 3 1.2 5 1.5 6.4 1.4.3 3.4.8 6 1.5-2.6.7-4.6 1.2-6 1.5-.3 1.4-.8 3.4-1.5 6.1-.7-2.7-1.2-4.7-1.5-6.1-1.4-.3-3.4-.8-6-1.5 2.6-.7 4.6-1.2 6-1.5.3-1.4.8-3.4 1.5-6.4Z" />
  ),
  quote: (
    <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a1.5 1.5 0 0 1 1.5 1.5V20h-2v1.5h5V12a5.6 5.6 0 0 0-2.5-5Zm9 0h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a1.5 1.5 0 0 1 1.5 1.5V20h-2v1.5h5V12a5.6 5.6 0 0 0-2.5-5Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  facebook: (
    <path d="M14 8.5h2.5V5.5H14A3.5 3.5 0 0 0 10.5 9v2.5H8v3h2.5V20.5h3V14.5H16l.5-3h-3V9a1 1 0 0 1 1-1V8.5Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="13" rx="4" />
      <path d="M10.5 9.8v4.9l4.3-2.45L10.5 9.8Z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 21a9 9 0 1 1 6.5-2.9L20 20l-1.8-1.5A9 9 0 0 1 12 21Z" />
      <path d="M8.8 9.2c.4 2.6 3 4.4 5 4.9.3.1.6-.1.7-.4l.5-1.1a.5.5 0 0 0-.6-.7l-1.5.9c-1-.5-1.9-1.3-2.4-2.3l.9-1.5a.5.5 0 0 0-.7-.7l-1.1.5a.5.5 0 0 0-.8.4Z" />
    </>
  ),
}

export default function Icon({ name, size = 22, className = '' }) {
  const node = icons[name]
  if (!node) return null
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {node}
    </svg>
  )
}