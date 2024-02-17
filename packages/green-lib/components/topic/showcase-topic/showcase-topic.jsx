import ceCss from './showcase-topic.ce.css'
import ceJs from './showcase-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'

export const ShowcaseTopic = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl
  
  return (<showcase-topic>
  <template shadowrootmode="open">
    <TopicCore
      abstractVariant="m"
      actionVariant="m"
      headingElement="h3"
      headingVariant={undefined}
      iconStrokeWidth="1"
      iconVariant="l"
      images={props.images}
      globals={props.globals}
      labelVariant="s"
      style={props.style}
      topic={props.topic}

      actionElement="link"
    />
    <link rel="stylesheet" type="text/css" href={assetUrl + globalCss} />
    <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
  </template>
  <script defer src={assetUrl + ceJs} />
</showcase-topic>
)}
