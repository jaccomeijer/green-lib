import sprite from 'feather-icons/dist/feather-sprite.svg'

export const Icon = props => {
  const strokeWidth = props.strokeWidth || 2
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl

  return (
    < svg
      class={['icon', props.class].join(' ')}
      fill="none"
      stroke="currentColor"
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use href={`${assetUrl}${sprite}#${props.icon}`} />
    </svg >
  )
}
