import ceCss from './three-column-layout.ce.css'
import ceJs from './three-column-layout.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const ThreeColumnLayout = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl + '/'
  
  return (<three-column-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      {props.children}
    </div>
    <link rel="stylesheet" type="text/css" href={assetUrl + globalCss} />
    <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
  </template>
  <script defer src={assetUrl + ceJs} />
</three-column-layout>
)}
