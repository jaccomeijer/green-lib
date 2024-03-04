import { getOnClickAction } from "../../jsx-helpers/get-action.js"
import { Action } from "../action/action.jsx"
import { Icon } from "../icon/icon.jsx"
import { Picture } from "../picture/picture.jsx"
import { Segment } from "../segment/segment.jsx"

export const Topic = props => {
  if (!props.topic) {
    return <>props.topic is undefined</>
  }
  if (props['data-variant'] === 'hero' && !props.topic.image) {
    return <p>Image is required for Hero topics</p>
  }

  let actionElement = 'button'
  let HeadingElement = 'h3'
  let variant = props['data-variant']
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

  return (
    <div class={['topic', topicClass, props.class].join(' ')} onclick={onclick}>
      {props.topic.image &&
        <Picture
          alt={props.topic.imageDescription}
          globals={props.globals}
          class={['topic-picture', props['swap-image'] && 'u-order-2'].join(' ')}
          src={props.images[props.topic.image]}
        />}
      <div class="topic-content">
        {props.topic.icon &&
          <Icon
            class="topic-icon"
            globals={props.globals}
            icon={props.topic.icon}
          />
        }
        {props.topic.labels &&
          <Segment
            actions={props.topic.labels.map(label => ({ heading: label }))}
            class="topic-labels"
            element='a'
            globals={props.globals}
            pageUrl={props.pageUrl}
          />
        }
        {props.topic.heading &&
          <HeadingElement class={['topic-heading', headingClass].join(' ')}>{props.topic.heading}</HeadingElement>}
        {props.topic.abstract &&
          <p class="topic-abstract">{props.topic.abstract}</p>}
        {props.topic.action &&
          <Action
            action={props.topic.action}
            class="topic-action"
            element={actionElement}
            globals={props.globals}
          />}
      </div>
    </div>
  )
}