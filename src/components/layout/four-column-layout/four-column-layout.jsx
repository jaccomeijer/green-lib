import ceCss from './four-column-layout.ce.css'
import ceJs from './four-column-layout.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const FourColumnLayout = props => (<four-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</four-column-layout>
)
