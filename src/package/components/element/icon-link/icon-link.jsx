import { FeatherIcon } from '../feather-icon/feather-icon'

export const IconLink = props => (
  <a variant={props.variant} class={props.class} href={props.url || '#'}>
    { props.icon && <FeatherIcon globals={props.globals} icon={props.icon} variant={props.variant} /> }
    {props.children}
  </a>
)
