import { Action } from '../action/action.jsx'
import { ModalMenu } from './modal-menu.jsx'
import { Segment } from '../segment/segment.jsx'
import indexCss from '../../index.bundle.css'
import ceJs from './navigation-header.ce.js'

export const NavigationHeader = props => {
  const assetUrl = (props.globals?.baseUrl || '') + (props.globals?.assetUrl || '')

  return (<navigation-header>
    <template shadowrootmode="open">
      <div className="navigation-header">
        <div className="wide-menu-view">
          <nav className="branding-main-actions" aria-label="primary">
            <Action
              action={props.globals.metadata.branding}
              className="branding"
              element="a"
              globals={props.globals}
            />
            <Segment
              actions={props.mainActions}
              className="main-actions"
              element="a"
              globals={props.globals}
              pageUrl={props.pageUrl}
            />
          </nav>
          <nav className="social-actions">
            <Segment
              actions={props.socialActions}
              element="a"
              globals={props.globals}
            />
            <Segment
              actions={props.callActions}
              actionClassName="fat-link"
              element="a"
              globals={props.globals}
            />
          </nav>
          <button className="open-menu-button button">Menu</button>
        </div>
        <ModalMenu
          callActions={props.callActions}
          globals={props.globals}
          mainActions={props.mainActions}
          socialActions={props.socialActions}
        />
      </div>
      <link rel="stylesheet" type="text/css" href={assetUrl + indexCss} />
    </template>
    <script defer src={assetUrl + ceJs} />
  </navigation-header>
  )
}
