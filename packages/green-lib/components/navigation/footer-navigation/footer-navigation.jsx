import ceCss from '../navigation.ce.css'
import ceJs from './footer-navigation.ce.js'
import { Segment } from '../segment/segment.jsx'
import globalCss from '../../../css/global.bundle.css'

export const FooterNavigation = props => (<footer-navigation>
  <template shadowrootmode="open">
    <nav id="footer-navigation">
      <Segment globals={props.globals} actions={props.mainActions} pageUrl={props.pageUrl} />
      <Segment globals={props.globals} actions={props.socialActions} />
    </nav>
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</footer-navigation>
)
