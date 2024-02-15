import { FeatherIcon } from '../feather-icon/feather-icon'
import { getAction } from '../../../layouts/get-action.js'

export const IconLink = props => (
  <a
    class={props.class}
    href={getAction({ type: 'href', globals: props.globals, url: props.action.url })}
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
