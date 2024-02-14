import ceCss from './empty-component.ce.css'
import ceJs from './empty-component.ce.js'

export const EmptyComponent = props => (<empty-component>
  <template shadowrootmode="open">
    <div>Component goes here</div>
    <link rel="stylesheet" type="text/css" href={`${props.globals.assetUrlPrefix}/${ceCss}`} />
  </template>
  <script defer src={`${props.globals.assetUrlPrefix}/${ceJs}`} />
</empty-component>
)
