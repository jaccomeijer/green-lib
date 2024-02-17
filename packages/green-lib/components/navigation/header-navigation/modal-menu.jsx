import { Segment } from '../segment/segment.jsx'
import { ButtonSegment } from '../button-segment/button-segment.jsx'

export const ModalMenu = props => (
  <div id="modal-menu">
    <div id="modal"></div>
    <nav>
      <button id="close-button">Close</button>
      <Segment globals={props.globals} actions={props.mainActions} />
      <Segment globals={props.globals} actions={props.socialActions} />
      <ButtonSegment globals={props.globals} actions={props.callActions} />
    </nav>
  </div>
)
