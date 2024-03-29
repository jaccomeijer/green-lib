import { Icon } from '../icon/icon.jsx'
import { getOnClickAction } from '../../jsx-helpers/get-action.js'
import { getHrefAction } from '../../jsx-helpers/get-action.js'

export const Action = props => {
  const allowedElements = ['a', 'button']

  if (!allowedElements.includes(props.element)) {
    return `Action.props.element is required. Valid: ${allowedElements.join(', ')}`
  }

  let Element

  const classList = [props.className]

  if (props.action?.icon) {
    classList.push('with-icon')
  }

  const elementProps = {
    'aria-label': props.action.icon,
  }

  if (props.element === 'a') {
    const href = getHrefAction({ globals: props.globals, action: props.action })

    // Without action url, render a div element without href
    if (href) {
      Element = 'a'
      elementProps.href = href
    } else {
      Element = 'div'
    }
    classList.push('u-border-radius-rounded')
    if (props.active) {
      classList.push('active')
    }
  }

  if (props.element === 'button') {
    Element = 'button'
    elementProps.onClick = getOnClickAction({ globals: props.globals, action: props.action })
    elementProps.element = 'button'
    classList.push('button', 'u-border-radius-rounded')
  }

  return (
    <Element className={classList.join(' ')} {...elementProps} >
      {props.action.icon &&
        <Icon
          icon={props.action.icon}
          globals={props.globals}
        />
      }
      {props.children || props.action.heading}
    </Element>
  )
}
