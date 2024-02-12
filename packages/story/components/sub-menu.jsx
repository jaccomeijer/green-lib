export const SubMenu = props => {
  if (!Array.isArray(props.subMenu)) return
  return (
    <ul>
      {props.subMenu.map(subMenuAction => (
        <li>
          <a href={subMenuAction.url}>{subMenuAction.heading}</a>
        </li>
      ))}
    </ul>
  )
}
