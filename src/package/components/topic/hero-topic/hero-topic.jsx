import ceCss from './hero-topic.ce.css'
import ceJs from './hero-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const HeroTopic = props => {
  if (!props.topic?.image) return <p>Image required for Hero topic</p>
  return (<hero-topic>
    <template shadowrootmode="open">
      <TopicCore
        abstractVariant="l"
        actionVariant="m"
        headingElement="h1"
        headingVariant="display"
        iconStrokeWidth="2"
        iconVariant="xl"
        images={props.images}
        imageSizes={props.imageSizes}
        labelVariant="l"
        style={props.style}
        topic={props.topic}

      />
      <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
      <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
    </template>
    <script defer src={`/assets/${ceJs}`} />
  </hero-topic>
  )
}
