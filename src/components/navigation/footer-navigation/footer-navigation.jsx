import ceCss from '../navigation-ce.css'
import ceJs from './footer-navigation.ce.js'
import { Segment } from '../segment/segment.jsx'
import globalCss from '../../../assets/css/global.bundle.css'

export const FooterNavigation = props => (<footer-navigation>
  <template shadowrootmode="open">
    <nav id="footer-navigation">
      <Segment menu={props.mainMenu} pageUrl={props.pageUrl} />
      <Segment menu={props.socialMenu} />
    </nav>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</footer-navigation>
)
