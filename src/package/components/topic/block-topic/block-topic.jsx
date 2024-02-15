import ceCss from './block-topic.ce.css'
import ceJs from './block-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const BlockTopic = props => (<block-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="m"
      actionVariant="s"
      headingElement="h3"
      headingVariant={undefined}
      iconStrokeWidth="1"
      iconVariant="xl"
      images={props.images}
      globals={props.globals}
      labelVariant="l"
      style={props.style}
      topic={props.topic}

    />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</block-topic>
)
