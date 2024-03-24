import { Action } from '../action/action.jsx'

export const Segment = props => {
  if (!props.actions) {
    return
  }
  const actions = props.actions || []

  return (
    <ul className={[props.className].join(' ')} role="list">
      {actions.map((action, index) => (
        <li key={index}>
          <Action
            action={action}
            active={props.pageUrl === action.url}
            className={props.actionClassName}
            element={props.element}
            globals={props.globals}
          />
        </li>
      ))}
    </ul>
  )
}
