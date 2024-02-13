import ceCss from './headline-topic.ce.css'
import ceJs from './headline-topic.ce.js'
import globalCss from '../../../../package/css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const HeadlineTopic = props => (<headline-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="l"
      actionVariant="m"
      headingElement="h1"
      headingVariant="display"
      iconStrokeWidth="1"
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
</headline-topic>
)
