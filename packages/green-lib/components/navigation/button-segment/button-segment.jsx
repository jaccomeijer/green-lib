import { IconButton } from '../../element/icon-button/icon-button'

export const ButtonSegment = props => {
  const menu = props.menu || []

  return (<div class="button-segment">
    {menu.map(action => <IconButton
      action={action}
      globals={props.globals}
      variant="s"
    />)}
    </div>
  )
}
