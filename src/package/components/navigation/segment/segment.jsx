import { IconLink } from '../../element/icon-link/icon-link'

export const Segment = props => {
  const menu = props.menu || []

  return (
    <ul class="navigation-segment">
      {menu.map(action => <li>
        <IconLink 
          action={action}
          class={props.pageUrl === action.url && 'active'}
          globals={props.globals}
          variant="s"
        />
      </li>)}
    </ul>
  )
}
