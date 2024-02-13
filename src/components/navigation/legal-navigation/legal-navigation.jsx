import ceCss from './legal-navigation.ce.css'
import ceJs from './legal-navigation.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const LegalNavigation = props => (<legal-navigation>
  <template shadowrootmode="open">
    <nav id="legal-navigation">
      <p variant="xs">{props.metadata?.copyright}</p>
      <a variant="xs">{props.metadata?.vendor}<sup>{props.metadata?.version}</sup></a>
    </nav>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</legal-navigation>
)
