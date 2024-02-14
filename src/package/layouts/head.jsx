import esbuildReload from './esbuild-reload.ce.js'
import globalCss from '../css/global.bundle.css'

export const Head = props => {
  const frontmatter = props.page.frontmatter

  return (<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{props.metadata.title} - {frontmatter.title || frontmatter.navigation?.heading}</title>
    <meta name="description" content={frontmatter.description || props.metadata.description} />
    <meta name="generator" content={props.metadata.generator} />
    <link rel="icon" type="image/x-icon" href={`${props.assetUrlPrefix}/${props.favicon}`} />
    <link rel="stylesheet" type="text/css" href={`${props.assetUrlPrefix}/${globalCss}`} />
    <script defer src={`${props.assetUrlPrefix}/${esbuildReload}`} />
  </head>)
}
