export function Star({ size = 16, className = '', style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`star-shape ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2 C12.8 6 13.4 8.4 13.7 10 C15.3 10.3 17.6 11 21 11.8 C17.6 12.6 15.3 13.2 13.7 13.5 C13.4 15.1 12.8 17.6 12 21 C11.2 17.6 10.6 15.1 10.3 13.5 C8.7 13.2 6.4 12.6 3 11.8 C6.4 11 8.7 10.3 10.3 10 C10.6 8.4 11.2 6 12 2Z"
      />
    </svg>
  )
}

export default function FloatingStars(props) {
  const stars = [
    { size: 20, className: 'star-pos-1', color: '#ffc85c' },
    { size: 14, className: 'star-pos-2', color: '#a7d9f5' },
    { size: 26, className: 'star-pos-3', color: '#dfc2ee' },
    { size: 12, className: 'star-pos-4', color: '#ffd6e0' },
    { size: 18, className: 'star-pos-5', color: '#9fe3c8' },
    { size: 10, className: 'star-pos-6', color: '#ffc85c' },
    { size: 16, className: 'star-pos-7', color: '#a7d9f5' },
    { size: 22, className: 'star-pos-8', color: '#ff8f9e' },
  ]
  return (
    <div className="floating-stars" aria-hidden="true" {...props}>
      {stars.map((s, i) => (
        <Star key={i} size={s.size} className={`float-star ${s.className}`} style={{ color: s.color }} />
      ))}
    </div>
  )
}