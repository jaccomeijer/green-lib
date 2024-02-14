import ceCss from '../navigation.ce.css'
import ceJs from './footer-navigation.ce.js'
import { Segment } from '../segment/segment.jsx'
import globalCss from '../../../css/global.bundle.css'

export const FooterNavigation = props => (<footer-navigation>
  <template shadowrootmode="open">
    <nav id="footer-navigation">
      <Segment globals={props.globals} menu={props.mainMenu} pageUrl={props.pageUrl} />
      <Segment globals={props.globals} menu={props.socialMenu} />
    </nav>
    <link rel="stylesheet" type="text/css" href={`${props.globals.assetUrlPrefix}/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.assetUrlPrefix}/${ceCss}`} />
  </template>
  <script defer src={`${props.globals.assetUrlPrefix}/${ceJs}`} />
</footer-navigation>
)

