import ceCss from './hero-topic.ce.css'
import ceJs from './hero-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const HeroTopic = props => {
  if (!props.topic?.image) return <p>Image required for Hero topic</p>
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl
  
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
        globals={props.globals}
        labelVariant="l"
        style={props.style}
        topic={props.topic}

      />
      <link rel="stylesheet" type="text/css" href={assetUrl + globalCss} />
      <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
    </template>
    <script defer src={assetUrl + ceJs} />
  </hero-topic>
  )
}
