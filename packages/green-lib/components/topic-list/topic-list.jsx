import { Topic } from '../topic/topic.jsx'

export const TopicList = props => {
  if (!Array.isArray(props.topics)) {
    return <>props.topics must be an Array</>
  }
  return (
    <div className={props.className}>
      {props.topics.map((topic, index) =>
        <Topic
          globals={props.globals}
          images={props.images}
          variant={props.variant}
          topic={topic}
          key={index}
        />)}
    </div>
  )
}
