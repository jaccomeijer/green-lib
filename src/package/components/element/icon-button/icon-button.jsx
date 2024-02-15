import { FeatherIcon } from '../feather-icon/feather-icon'
import { getAction } from '../../../layouts/get-action.js'

export const IconButton = props => (
  <button
    variant={props.variant}
    class={props.class}
    type="button"
    onclick={getAction({ type: 'onclick', globals: props.globals, url: props.action.url })}
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
