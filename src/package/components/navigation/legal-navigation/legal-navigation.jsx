import ceCss from '../navigation.ce.css'
import ceJs from './legal-navigation.ce.js'
import globalCss from '../../../css/global.bundle.css'
import { IconLink } from '../../element/icon-link/icon-link.jsx'

export const LegalNavigation = props => (<legal-navigation>
  <template shadowrootmode="open">
    <nav id="legal-navigation">
      <p variant="xs">{props.globals.metadata.branding.copyright}</p>
      <IconLink variant="xs" globals={props.globals} action={props.globals.metadata.vendor}>
        {props.globals.metadata.vendor.heading}<sup>{props.globals.metadata.vendor.version}</sup>
      </IconLink>
    </nav>
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`${props.globals.baseUrl}${props.globals.assetUrl}${ceCss}`} />
  </template>
  <script defer src={`${props.globals.baseUrl}${props.globals.assetUrl}${ceJs}`} />
</legal-navigation>
)
