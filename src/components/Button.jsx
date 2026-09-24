import Icon from './Icons.jsx'

export default function Button({
  as: Tag = 'a',
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  type,
}) {
  const props = {}
  if (Tag === 'a') props.href = href
  if (Tag === 'button') props.type = type || 'button'
  return (
    <Tag
      {...props}
      onClick={onClick}
      className={`btn btn--${variant} btn--${size} ${className}`}
    >
      {children}
      {icon && <Icon name={icon} size={18} className="btn-icon" />}
    </Tag>
  )
}