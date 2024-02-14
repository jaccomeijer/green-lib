import ceCss from './four-column-layout.ce.css'
import ceJs from './four-column-layout.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const FourColumnLayout = props => (<four-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${ceCss}`} />
  </template>
  <script defer src={`${props.assetUrlPrefix}/${ceJs}`} />
</four-column-layout>
)
