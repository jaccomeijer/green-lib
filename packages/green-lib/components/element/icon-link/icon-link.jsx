import { FeatherIcon } from '../feather-icon/feather-icon.jsx'
import { getHrefAction } from '../../../lib/get-action.js'

export const IconLink = props => (
  <a
    aria-label={props.action.icon} 
    class={props.class}
    href={getHrefAction({ globals: props.globals, action: props.action })}
    id={props.id}
    variant={props.variant}
  >
    {props.action.icon &&
      <FeatherIcon
        globals={props.globals}
        icon={props.action.icon}
        variant={props.variant}
      />
    }
    {props.children || props.action.heading}
  </a>
)
