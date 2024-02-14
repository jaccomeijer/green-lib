import ceCss from './card-topic.ce.css'
import ceJs from './card-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const CardTopic = props => (<card-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="m"
      actionVariant="s"
      headingElement="h3"
      headingVariant={undefined}
      iconStrokeWidth="1"
      iconVariant="xl"
      images={props.images}
      imageSizes={props.imageSizes}
      labelVariant="l"
      style={props.style}
      topic={props.topic}

      onClick={`location.href='${props.topic.action?.url || '#'}';`}
    />
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${ceCss}`} />
  </template>
  <script defer src={`${props.assetUrlPrefix}/${ceJs}`} />
</card-topic>
)
