import ceCss from './quote-topic-ce.css'
import ceJs from './quote-topic.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const QuoteTopic = props => (<quote-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="l"
      actionVariant="m"
      headingElement="h3"
      headingVariant={undefined}
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
</quote-topic>
)