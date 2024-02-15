import { IconLink } from '../../element/icon-link/icon-link'

export const Segment = props => {
  const menu = props.menu || []

  return (
    <ul class="navigation-segment">
      {menu.map(item => <li>
        <IconLink 
          action={item}
          class={props.pageUrl === item.url && 'active'}
          globals={props.globals}
          variant="s"
        />
      </li>)}
    </ul>
  )
}
