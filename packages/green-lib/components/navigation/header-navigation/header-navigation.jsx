import { ModalMenu } from './modal-menu.jsx'
import { Segment } from '../segment/segment.jsx'
import { ButtonSegment } from '../button-segment/button-segment.jsx'
import ceCss from '../navigation.ce.css'
import ceJs from './header-navigation.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { IconLink } from '../../element/icon-link/icon-link.jsx'

export const HeaderNavigation = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl
  
  return (<header-navigation>
    <template shadowrootmode="open">
      <div id="header-navigation">
        <IconLink
          action={props.globals.metadata.branding}
          globals={props.globals}
          id="branding"
          variant="s"
        />
        <nav>
          <Segment globals={props.globals} actions={props.mainActions} pageUrl={props.pageUrl} />
          <Segment globals={props.globals} actions={props.socialActions} />
          <ButtonSegment globals={props.globals} actions={props.callActions} />
        </nav>
        <div>
          <button id="menu-button">Menu</button>
          <ModalMenu
            globals={props.globals}
            mainActions={props.mainActions}
            socialActions={props.socialActions}
            callActions={props.callActions}
          />
        </div>
      </div>
      <link rel="stylesheet" type="text/css" href={assetUrl + globalCss} />
      <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
    </template>
    <script defer src={assetUrl + ceJs} />
  </header-navigation>
  )
}
