import sprite from 'feather-icons/dist/feather-sprite.svg?url'

export const Icon = props => {
  const strokeWidth = props.strokeWidth || 2
  const assetUrl = (props.globals?.baseUrl || '') + (props.globals?.assetUrl || '')

  return (
    < svg
      className={['icon', props.className].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`${assetUrl}${sprite}#${props.icon}`} />
    </svg >
  )
}
