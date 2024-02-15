import { IconButton } from '../../element/icon-button/icon-button'

export const ButtonSegment = props => {
  const menu = props.menu || []

  return (<div class="button-segment">
    {menu.map(item => <IconButton
      globals={props.globals}
      variant="s"
      action={item}
    />)}
    </div>
  )
}
