import Icon from './Icons.jsx'

export default function ImagePlaceholder({
  icon = 'sparkle',
  label = 'Image will be added here',
  note = '',
  className = '',
  style,
}) {
  return (
    <div
      className={`img-placeholder ${className}`}
      style={style}
      role="img"
      aria-label={label}
    >
      <div className="img-placeholder-content">
        <span className="img-placeholder-icon">
          <Icon name={icon} size={32} />
        </span>
        <span className="img-placeholder-label">{label}</span>
        {note && <span className="img-placeholder-note">{note}</span>}
      </div>
    </div>
  )
}