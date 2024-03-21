import { getHrefAction } from '@jaccomeijer/green-lib'

const MenuAction = props => {
  return (
    <li>
      <a href={getHrefAction({
        action: props.menuAction,
        globals: props.globals
      })}>{props.menuAction.heading}</a>
    </li>
  )
}

export const Menu = props => {
  if (!props.menu) return <>No submenu items</>
  return (
    <ul role="list" class={props.class} >
      {props.menu.map(menuAction => <MenuAction menuAction={menuAction} globals={props.globals} />)}
    </ul>
  )
}
