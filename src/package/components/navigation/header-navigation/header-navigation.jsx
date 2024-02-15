import { Branding } from './branding.jsx'
import { ModalMenu } from './modal-menu.jsx'
import { Segment } from '../segment/segment.jsx'
import { ButtonSegment } from '../button-segment/button-segment.jsx'
import ceCss from '../navigation.ce.css'
import ceJs from './header-navigation.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const HeaderNavigation = props => {
  return (<header-navigation>
    <template shadowrootmode="open">
      <div id="header-navigation">
        <Branding globals={props.globals} />
        <nav>
          <Segment globals={props.globals} menu={props.mainMenu} pageUrl={props.pageUrl} />
          <Segment globals={props.globals} menu={props.socialMenu} />
          <ButtonSegment globals={props.globals} menu={props.actionMenu} />
        </nav>
        <div>
          <button id="menu-button">Menu</button>
          <ModalMenu
            globals={props.globals}
            mainMenu={props.mainMenu}
            socialMenu={props.socialMenu}
            actionMenu={props.actionMenu}
          />
        </div>
      </div>
      <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
      <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
    </template>
    <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
  </header-navigation>
  )
}
