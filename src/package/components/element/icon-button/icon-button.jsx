import { FeatherIcon } from '../feather-icon/feather-icon'
import { getOnClickAction } from '../../../layouts/get-action.js'

export const IconButton = props => (
  <button
    aria-label={props.action.icon} 
    variant={props.variant}
    class={props.class}
    type="button"
    onclick={getOnClickAction({ globals: props.globals, action: props.action })}
  >
    {props.action.icon &&
      <FeatherIcon
        globals={props.globals}
        icon={props.action.icon}
        variant={props.variant}
      />
    }
    {props.children || props.action.heading}
  </button>
)
