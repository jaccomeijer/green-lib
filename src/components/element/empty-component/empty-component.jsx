import ceCss from './empty-component-ce.css'
import ceJs from './empty-component.ce.js'

export const EmptyComponent = () => (<empty-component>
  <template shadowrootmode="open">
    <div>Component goes here</div>
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</empty-component>
)
