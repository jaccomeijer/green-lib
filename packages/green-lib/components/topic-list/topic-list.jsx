import { Topic } from "../topic/topic.jsx"

export const TopicList = props => {
  if (!Array.isArray(props.topics)) {
    return <>props.topics must be an Array</>
  }
  return (
    <div class={props.class}>
      {props.topics.map(topic =>
        <Topic
          globals={props.globals}
          images={props.images}
          data-variant={props['data-variant']}
          topic={topic}
        />)}
    </div>
  )
}
