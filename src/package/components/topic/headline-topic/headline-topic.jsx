import ceCss from './headline-topic.ce.css'
import ceJs from './headline-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
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
      globals={props.globals}
      labelVariant="l"
      style={props.style}
      topic={props.topic}

    />
    <link rel="stylesheet" type="text/css" href={`${props.globals.assetUrlPrefix}/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.assetUrlPrefix}/${ceCss}`} />
  </template>
  <script defer src={`${props.globals.assetUrlPrefix}/${ceJs}`} />
</headline-topic>
)
