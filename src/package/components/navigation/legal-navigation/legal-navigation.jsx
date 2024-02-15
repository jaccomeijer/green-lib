import ceCss from '../navigation.ce.css'
import ceJs from './legal-navigation.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { getAction } from '../../../layouts/get-action.js'

export const LegalNavigation = props => (<legal-navigation>
  <template shadowrootmode="open">
    <nav id="legal-navigation">
      <p variant="xs">{props.globals.metadata.copyright}</p>
      <a 
        variant="xs"
        href={getAction({ type: 'href', globals: props.globals, url: props.globals.metadata.url })}
      >{props.globals.metadata.vendor}<sup>{props.globals.metadata.version}</sup></a>
    </nav>
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</legal-navigation>
)
