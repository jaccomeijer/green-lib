import { getHrefAction } from '@jaccomeijer/green-lib'

const MenuAction = props => (
  <li>
    <a
      href={getHrefAction({
        action: props.menuAction,
        globals: props.globals,
      })}>{props.menuAction.heading}</a>
  </li>
)

export const Menu = props => {
  if (!props.menu) {
    return <>No submenu items</>
  }
  return (
    <ul role="list" className={props.className} >
      {props.menu.map((menuAction, index) => (
        <MenuAction
          menuAction={menuAction}
          globals={props.globals}
          key={index}
        />
      ))}
    </ul>
  )
}
