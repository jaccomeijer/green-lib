import ceCss from './one-column-layout-ce.css'
import ceJs from './one-column-layout.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const OneColumnLayout = props => (<one-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</one-column-layout>
)