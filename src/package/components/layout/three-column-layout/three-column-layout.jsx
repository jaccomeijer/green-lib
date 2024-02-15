import ceCss from './three-column-layout.ce.css'
import ceJs from './three-column-layout.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const ThreeColumnLayout = props => (<three-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</three-column-layout>
)
