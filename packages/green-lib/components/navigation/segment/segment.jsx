import { IconLink } from '../../element/icon-link/icon-link'

export const Segment = props => {
  const actions = props.actions || []

  return (
    <ul class="navigation-segment">
      {actions.map(action => <li>
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
