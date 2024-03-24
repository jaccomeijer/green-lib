import ceCss from './carousel-layout.ce.css'
import ceJs from './carousel-layout.ce.js'

export const CarouselLayout = props => {
  const assetUrl = (props.globals?.baseUrl || '') + (props.globals?.assetUrl || '')

  return (<carousel-layout delay={props.delay}>
    <template shadowrootmode="open">
      <div id="root-container">
        <div id="slider">
          {props.children}
        </div>
        <div id="dots"></div>
      </div>
      <link rel="stylesheet" type="text/css" href={assetUrl + ceCss} />
    </template>
    <script defer src={assetUrl + ceJs} />
  </carousel-layout>
  )
}
