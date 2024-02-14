import ceCss from './two-column-layout.ce.css'
import ceJs from './two-column-layout.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const TwoColumnLayout = props => (<two-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${ceCss}`} />
  </template>
  <script defer src={`${props.assetUrlPrefix}/${ceJs}`} />
</two-column-layout>
)
