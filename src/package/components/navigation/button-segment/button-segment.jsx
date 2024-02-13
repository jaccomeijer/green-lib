import { IconButton } from '../../element/icon-button/icon-button'

export const ButtonSegment = props => {
  const menu = props.menu || []

  return (<div class="button-segment">
    {menu.map(item => <IconButton variant="s" icon={item.icon} url={item.url}>{item.heading}</IconButton>)}
  </div>
  )
}
