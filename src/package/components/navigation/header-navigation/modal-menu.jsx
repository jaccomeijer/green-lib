import { Segment } from '../segment/segment.jsx'
import { ButtonSegment } from '../button-segment/button-segment.jsx'

export const ModalMenu = props => (
  <div id="modal-menu">
    <div id="modal"></div>
    <nav>
      <button id="close-button">Close</button>
      <Segment menu={props.mainMenu} />
      <Segment menu={props.socialMenu} />
      <ButtonSegment menu={props.actionMenu} />
    </nav>
  </div>
)
