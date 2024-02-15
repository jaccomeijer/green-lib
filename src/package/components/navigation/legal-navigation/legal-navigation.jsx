import ceCss from './legal-navigation.ce.css'
import ceJs from './legal-navigation.ce.js'
import globalCss from '../../../css/global.bundle.css'

export const LegalNavigation = props => (<legal-navigation>
  <template shadowrootmode="open">
    <nav id="legal-navigation">
      <p variant="xs">{props.globals.metadata.copyright}</p>
      <a variant="xs">{props.globals.metadata.vendor}<sup>{props.globals.metadata.version}</sup></a>
    </nav>
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</legal-navigation>
)
