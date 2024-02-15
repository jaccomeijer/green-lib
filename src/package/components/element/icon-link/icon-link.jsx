import { FeatherIcon } from '../feather-icon/feather-icon'
import { getAction } from '../../../layouts/get-action.js'

export const IconLink = props => (
  <a
    variant={props.variant}
    class={props.class}
    href={getAction({ type: 'href', globals: props.globals, url: props.url })}
  >
    {props.icon &&
      <FeatherIcon
        globals={props.globals}
        icon={props.icon}
        variant={props.variant}
      />
    }
    {props.children}
  </a>
)
