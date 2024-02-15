import { FeatherIcon } from '../element/feather-icon/feather-icon.jsx'
import { IconButton } from '../element/icon-button/icon-button.jsx'
import { IconLink } from '../element/icon-link/icon-link.jsx'
import { Picture } from '../element/picture/picture.jsx'

export const TopicCore = props => {
  if (!props.topic) {
    return <>props.topic is undefined</>
  }
  const abstractVariant = props.abstractVariant || 's'
  const actionVariant = props.actionVariant || 's'
  const actionElement = props.actionElement || 'button'
  const headingElement = props.headingElement || 'h3'
  const headingVariant = props.headingVariant
  const iconStrokeWidth = props.iconStrokeWidth || 2
  const iconVariant = props.iconVariant || 's'
  const labelVariant = props.labelVariant || 's'

  return (
    <div id="topic-container" onclick={props.onclick} style={props.style} >
      {props.topic.image && <Picture
        globals={props.globals}
        id="topic-picture"
        src={`${props.globals.baseUrl}${props.globals.assetUrl}${props.images[props.topic.image]}`}
        sizes={props.imageSizes}
      />}
      <div id="topic-content">
        {props.topic.icon &&
          <FeatherIcon
            globals={props.globals}
            icon={props.topic.icon}
            variant={iconVariant}
            strokeWidth={iconStrokeWidth}
          />
        }
        {props.topic.labels &&
          <div id="topic-labels">
            <p variant={labelVariant}>{props.topic.labels?.map(label => <><span>{label}</span> </>)}</p>
          </div>
        }
        {props.topic.heading && headingElement === 'h1' &&
          <h1 id="topic-heading" variant={headingVariant}>{props.topic.heading}</h1>}
        {props.topic.heading && headingElement === 'h2' &&
          <h2 id="topic-heading" variant={headingVariant}>{props.topic.heading}</h2>}
        {props.topic.heading && headingElement === 'h3' &&
          <h3 id="topic-heading" variant={headingVariant}>{props.topic.heading}</h3>}
        {props.topic.abstract &&
          <p id="topic-abstract" variant={abstractVariant}>{props.topic.abstract}</p>}
        {props.topic.action && actionElement === 'button' &&
          <IconButton
            variant={actionVariant}
            globals={props.globals}
            action={props.topic.action}
            url={props.topic.action.url}
          />}
        {props.topic.action && actionElement === 'link' &&
          <IconLink globals={props.globals} variant={actionVariant} action={props.topic.action}/>}
      </div>
    </div>
  )
}
