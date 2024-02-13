import ceCss from './profile-topic.ce.css'
import ceJs from './profile-topic.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const ProfileTopic = props => (<profile-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="l"
      actionVariant="m"
      headingElement="h2"
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
</profile-topic>
)
