import ceCss from './feather-icon.ce.css'
import ceJs from './feather-icon.ce.js'
import sprite from '../../../../node_modules/feather-icons/dist/feather-sprite.svg'

export const FeatherIcon = props => {
  const strokeWidth = props.strokeWidth || 2

  return (<feather-icon>
    <template shadowrootmode="open">
      <svg
        variant={props.variant || 'm'}
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use href={`/assets/${sprite}#${props.icon}`} />
      </svg>
      <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
    </template>
    <script defer src={`/assets/${ceJs}`} />
  </feather-icon>
  )
}
