import { FeatherIcon } from '../feather-icon/feather-icon'

export const IconButton = props => (
  <button
    variant={props.variant}
    class={props.class}
    type="button"
    onclick={`location.href='${props.globals.baseUrl}${props.url || '#'}';`}
  >
    {props.icon &&
      <FeatherIcon
        globals={props.globals}
        icon={props.icon}
        variant={props.variant}
      />
    }
    {props.children}
  </button>
)
