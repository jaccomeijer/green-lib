import ceCss from './card-topic.ce.css'
import ceJs from './card-topic.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { TopicCore } from '../topic-core.jsx'
import { getOnClickAction } from '../../../layouts/get-action.js'

export const CardTopic = props => {
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl + '/'
  
  return (<card-topic>
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

      onclick={getOnClickAction({ globals: props.globals, action: props.topic.action })}
      />
    <link rel="stylesheet" type="text/css" href={assetUrl + globalCss} />
    <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
  </template>
  <script defer src={assetUrl + ceJs} />
</card-topic>
)}
