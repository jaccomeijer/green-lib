import { Topic } from '../topic/topic.jsx'
import { CarouselLayout } from '../../layout/carousel-layout/carousel-layout.jsx'
import { OneColumnLayout } from '../../layout/one-column-layout/one-column-layout.jsx'
import { TwoColumnLayout } from '../../layout/two-column-layout/two-column-layout.jsx'
import { ThreeColumnLayout } from '../../layout/three-column-layout/three-column-layout.jsx'
import { FourColumnLayout } from '../../layout/four-column-layout/four-column-layout.jsx'

export const TopicList = props => {
  const topicVariant = props.topicVariant || 'block'

  let ListElement

  switch (props.variant) {
  case 'one-column':
    ListElement = OneColumnLayout
    break
  case 'two-column':
    ListElement = TwoColumnLayout
    break
  case 'three-column':
    ListElement = ThreeColumnLayout
    break
  case 'four-column':
    ListElement = FourColumnLayout
    break
  case 'carousel':
    ListElement = CarouselLayout
    break
  default:
    ListElement = TwoColumnLayout
    break
  }

  const topicElements = props.topics.map(topicElement => (
    <Topic
      variant={topicVariant}
      topic={topicElement}
      images={props.images}
      imageSizes={props.imageSizes}
    />
  ))

  return <ListElement {...props}>{topicElements}</ListElement>
}
