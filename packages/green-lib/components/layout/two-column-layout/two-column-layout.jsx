import ceCss from './two-column-layout.ce.css'
import ceJs from './two-column-layout.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const TwoColumnLayout = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl
  
  return (<two-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={assetUrl + globalCss} />
    <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
  </template>
  <script defer src={assetUrl + ceJs} />
</two-column-layout>
)}
