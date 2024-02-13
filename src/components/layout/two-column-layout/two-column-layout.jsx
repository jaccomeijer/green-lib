import ceCss from './two-column-layout.ce.css'
import ceJs from './two-column-layout.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const TwoColumnLayout = props => (<two-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</two-column-layout>
)
