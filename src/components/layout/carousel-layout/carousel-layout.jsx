import ceCss from './carousel-layout.ce.css'
import ceJs from './carousel-layout.ce.js'
import globalCss from '../../../assets/css/global.bundle.css'

export const CarouselLayout = props => (<carousel-layout delay={props.delay}>
  <template shadowrootmode="open">
    <div id="root-container">
      <div id="slider">
        {props.children}
      </div>
      <div id="dots"></div>
    </div>
    <link rel="stylesheet" type="text/css" href={`/assets/${globalCss}`} />
    <link rel="stylesheet" type="text/css" href={`/assets/${ceCss}`} />
  </template>
  <script defer src={`/assets/${ceJs}`} />
</carousel-layout>
)
