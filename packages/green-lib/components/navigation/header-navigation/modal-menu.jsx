import { Segment } from '../segment/segment.jsx'
import { ButtonSegment } from '../button-segment/button-segment.jsx'

export const ModalMenu = props => (
  <div id="modal-menu">
    <div id="modal"></div>
    <nav>
      <button id="close-button">Close</button>
      <Segment globals={props.globals} menu={props.mainMenu} />
      <Segment globals={props.globals} menu={props.socialMenu} />
      <ButtonSegment globals={props.globals} menu={props.actionMenu} />
    </nav>
  </div>
)
