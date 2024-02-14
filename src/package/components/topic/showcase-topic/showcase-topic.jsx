import ceCss from './showcase-topic.ce.css'
import ceJs from './showcase-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const ShowcaseTopic = props => (<showcase-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="m"
      actionVariant="m"
      headingElement="h3"
      headingVariant={undefined}
      iconStrokeWidth="1"
      iconVariant="l"
      images={props.images}
      imageSizes={props.imageSizes}
      labelVariant="s"
      style={props.style}
      topic={props.topic}

      actionElement="link"
    />
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</showcase-topic>
)