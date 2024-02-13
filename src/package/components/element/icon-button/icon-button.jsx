import { FeatherIcon } from '../feather-icon/feather-icon'

export const IconButton = props => (
  <button variant={props.variant} class={props.class} type="button" onclick={`location.href='${props.url || '#'}';`} >
    { props.icon && <FeatherIcon icon={props.icon} variant={props.variant} /> }
    {props.children}
  </button>
)
