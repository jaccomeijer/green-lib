import { getOnClickAction } from "../../jsx-helpers/get-action.js"
import { Action } from "../action/action.jsx"
import { Icon } from "../icon/icon.jsx"
import { Picture } from "../picture/picture.jsx"
import { Segment } from "../segment/segment.jsx"

/**
 * 
 * Generic Topic component
 *  
 * variant = <string> [block|card|featured|headline|hero|profile|quote|showcase]
 * swap-image = <boolean> [true|false]
 * heading-element = <string> [h1|h2|h3|h4]
 * 
 */
export const Topic = props => {
  if (!props.topic) {
    return <>props.topic is undefined</>
  }
  if (props['variant'] === 'hero' && !props.topic.image) {
    return <p>Image is required for Hero topics</p>
  }

  let actionElement = 'button'
  let HeadingElement = 'h3'
  let variant = props['variant']
  let onclick
  let headingClass

  switch (variant) {
    case 'block':
      actionElement = 'button'
      break;
    case 'card':
      onclick = getOnClickAction({ globals: props.globals, action: props.topic.action })
      break;
    case 'featured':
      HeadingElement = 'h2'
      headingClass = 'display'
      break;
    case 'headline':
      HeadingElement = 'h1'
      headingClass = 'display'
      break;
    case 'hero':
      HeadingElement = 'h1'
      headingClass = 'display'
      break;
    case 'profile':
      headingClass = 'display'
      break;
    case 'quote':
      break;
    case 'showcase':
      actionElement = 'a'
      break;

    default:
      variant = 'block'
      break;
  }
  const topicClass = 'topic-' + variant
  HeadingElement = props['heading-element'] || HeadingElement

  return (
    <div className={['topic', topicClass, props.className].join(' ')} onClick={onclick} key={props.key}>
      {props.topic.image &&
        <Picture
          alt={props.topic.imageDescription}
          globals={props.globals}
          className={['topic-picture', props['swap-image'] && 'u-order-2'].join(' ')}
          src={props.images[props.topic.image]}
        />}
      <div className="topic-content">
        {props.topic.icon &&
          <Icon
            className="topic-icon"
            globals={props.globals}
            icon={props.topic.icon}
          />
        }
        {props.topic.labels &&
          <Segment
            actions={props.topic.labels.map(label => ({ heading: label }))}
            className="topic-labels"
            element='a'
            globals={props.globals}
            pageUrl={props.pageUrl}
          />
        }
        {props.topic.heading &&
          <HeadingElement className={['topic-heading', headingClass].join(' ')}>{props.topic.heading}</HeadingElement>}
        {props.topic.abstract &&
          <p className="topic-abstract">{props.topic.abstract}</p>}
        {props.topic.action &&
          <Action
            action={props.topic.action}
            className="topic-action"
            element={actionElement}
            globals={props.globals}
          />}
      </div>
    </div>
  )
}
