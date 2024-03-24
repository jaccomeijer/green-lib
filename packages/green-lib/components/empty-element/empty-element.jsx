import ceCss from './empty-element.ce.css'
import ceJs from './empty-element.ce.js'

export const EmptyElement = props => {
  const assetUrl = (props.globals?.baseUrl || '') + (props.globals?.assetUrl || '')

  return (<empty-element>
    <template shadowrootmode="open">
      <p>Component goes here</p>
      <link rel="stylesheet" type="text/css" href={assetUrl + ceCss } />
    </template>
    <script defer src={assetUrl + ceJs } />
  </empty-element>
  )
}
