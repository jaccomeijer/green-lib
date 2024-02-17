import ceCss from './empty-component.ce.css'
import ceJs from './empty-component.ce.js'

export const EmptyComponent = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl

return (<empty-component>
    <template shadowrootmode="open">
      <div>Component goes here</div>
      <link rel="stylesheet" type="text/css" href={assetUrl + ceCss } />
    </template>
    <script defer src={assetUrl + ceJs } />
  </empty-component>
  )
}
