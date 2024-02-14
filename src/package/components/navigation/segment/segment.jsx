import { IconLink } from '../../element/icon-link/icon-link'

export const Segment = props => {
  const menu = props.menu || []

  return (
    <ul class="navigation-segment">
      {menu.map(item => <li>
        <IconLink 
          class={props.pageUrl === item.url && 'active'}
          globals={props.globals}
          icon={item.icon}
          variant="s"
          url={item.url}>
            {item.heading}
        </IconLink>
      </li>)}
    </ul>
  )
}
