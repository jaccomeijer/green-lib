const MenuAction = props => {
  return (
    <li>
      <a href={props.menuAction.url}>{props.menuAction.heading}</a>
    </li>
  )
}

export const Menu = props => {
  if (!props.menu) return
  return (
    <ul role="list" class={props.class} >
      {props.menu.map(menuAction => <MenuAction menuAction={menuAction} />)}
    </ul>
  )
}
