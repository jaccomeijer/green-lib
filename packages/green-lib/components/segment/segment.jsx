import { Action } from "../action/action.jsx"

export const Segment = props => {
  if (!props.actions) return
  const actions = props.actions || []
  return (
    <ul className={[props.className].join(' ')} role="list">
      {actions.map((action, key) => (
        <li key={key}>
          <Action
            action={action}
            active={props.pageUrl === action.url}
            element={props.element}
            globals={props.globals}
          />
        </li>
      ))}
    </ul>
  )
}
