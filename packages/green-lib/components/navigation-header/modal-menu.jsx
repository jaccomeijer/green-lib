import { Segment } from '../segment/segment.jsx'

export const ModalMenu = props => (
  <div class="modal-menu">
    <div class="modal-background s-position-fixed">
    </div>
    <div class="modal-popup s-position-fixed s-flex-column">
      <button class="modal-close-button button">Close</button>
      <nav class="s-flex-column">
        <Segment
          actions={props.mainActions}
          class="popup-main-actions"
          element="a"
          globals={props.globals}
        />
        <Segment
          actions={props.socialActions}
          class="popup-social-actions"
          element="a"
          globals={props.globals}
        />
        <Segment
          actions={props.callActions}
          class="popup-call-actions"
          element="button"
          globals={props.globals}
        />
      </nav>
    </div>
  </div>
)
