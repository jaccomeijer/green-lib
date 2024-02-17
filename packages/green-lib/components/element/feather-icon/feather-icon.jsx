import ceCss from './feather-icon.ce.css'
import ceJs from './feather-icon.ce.js'
import sprite from 'feather-icons/dist/feather-sprite.svg'

export const FeatherIcon = props => {
  const strokeWidth = props.strokeWidth || 2
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl

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
        <use href={`${assetUrl}${sprite}#${props.icon}`} />
      </svg>
      <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
    </template>
    <script defer src={assetUrl + ceJs} />
  </feather-icon>
  )
}
