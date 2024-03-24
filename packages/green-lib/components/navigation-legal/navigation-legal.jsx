import { Action } from '../action/action.jsx'

export const NavigationLegal = props => (
  <nav className={['navigation-legal', props.className].join(' ')}>
    <div>{props.globals.metadata.branding.copyright}</div>
    <Action
      action={props.globals.metadata.vendor}
      element="a"
      globals={props.globals}
    >
      {props.globals.metadata.vendor.heading}<sup>{props.globals.metadata.vendor.version}</sup>
    </Action>
  </nav>
)
