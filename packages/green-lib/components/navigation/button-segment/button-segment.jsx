import { IconButton } from '../../element/icon-button/icon-button'

export const ButtonSegment = props => {
  const actions = props.actions || []

  return (<div class="button-segment">
    {actions.map(action => <IconButton
      action={action}
      globals={props.globals}
      variant="s"
    />)}
    </div>
  )
}
