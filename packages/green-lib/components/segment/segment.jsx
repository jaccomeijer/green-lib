import { Action } from "../action/action.jsx"

export const Segment = props => {
  if (!props.actions) return
  const actions = props.actions || []
  return (
    <ul class={[props.class].join(' ')} role="list">
      {actions.map(action => <li><Action
        action={action}
        active={props.pageUrl === action.url}
        element={props.element}
        globals={props.globals}
      /></li>)}
    </ul>
  )
}
