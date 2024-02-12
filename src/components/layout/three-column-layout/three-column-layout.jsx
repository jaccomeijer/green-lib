import ceCss from './three-column-layout-ce.css'
import ceJs from './three-column-layout.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const ThreeColumnLayout = props => (<three-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</three-column-layout>
)
