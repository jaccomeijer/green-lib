import { Branding } from './branding.jsx'
import { ModalMenu } from './modal-menu.jsx'
import { Segment } from '../segment/segment.jsx'
import { ButtonSegment } from '../button-segment/button-segment.jsx'
import ceCss from '../navigation-ce.css'
import ceJs from './header-navigation.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const HeaderNavigation = props => {
  return (<header-navigation>
    <template shadowrootmode="open">
      <div id="header-navigation">
        <Branding metadata={props.metadata} />
        <nav>
          <Segment menu={props.mainMenu} pageUrl={props.pageUrl} />
          <Segment menu={props.socialMenu} />
          <ButtonSegment menu={props.actionMenu} />
        </nav>
        <div>
          <button id="menu-button">Menu</button>
          <ModalMenu
            mainMenu={props.mainMenu}
            socialMenu={props.socialMenu}
            actionMenu={props.actionMenu}
          />
        </div>
      </div>
      <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
      <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
    </template>
    <script defer src={`/assets/${ceJs}`} />
  </header-navigation>
  )
}
