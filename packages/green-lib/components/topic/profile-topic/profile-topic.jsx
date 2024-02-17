import ceCss from './profile-topic.ce.css'
import ceJs from './profile-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const ProfileTopic = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl
  
  return (<profile-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="l"
      actionVariant="m"
      headingElement="h2"
      headingVariant="display"
      iconStrokeWidth="1"
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
</profile-topic>
)}
