export const Icon = props => {
  const strokeWidth = props.strokeWidth || 2
  const iconSpriteUrl = (props.globals?.iconSpriteUrl || '/')

  return (
    < svg
      className={['icon', props.className].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`${iconSpriteUrl}#${props.icon}`} />
    </svg >
  )
}
