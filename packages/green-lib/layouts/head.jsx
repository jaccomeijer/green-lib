import esbuildReload from './esbuild-reload.ce.js'
import globalCss from '../css/global.bundle.css'

export const Head = props => {
  const frontmatter = props.page.frontmatter
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl + '/'

  return (<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{props.globals.metadata.branding.heading} - {frontmatter.title || frontmatter.navigation?.heading}</title>
    <meta name="description" content={frontmatter.description || props.globals.metadata.branding.description} />
    <meta name="generator" content={props.globals.metadata.content.generator} />
    <link rel="icon" type="image/x-icon" href={assetUrl + props.favicon } />
    <link rel="stylesheet" type="text/css" href={assetUrl + globalCss } />
    {props.enableReload &&
      <script defer src={assetUrl + esbuildReload } />
    }
  </head>)
}
