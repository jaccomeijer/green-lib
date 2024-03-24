import { Segment } from '../segment/segment.jsx'

export const ModalMenu = props => (
  <div className="modal-menu">
    <div className="modal-background s-position-fixed">
    </div>
    <div className="modal-popup s-position-fixed s-flex-column">
      <button className="modal-close-button button">Close</button>
      <nav className="s-flex-column">
        <Segment
          actions={props.mainActions}
          className="popup-main-actions"
          element="a"
          globals={props.globals}
        />
        <Segment
          actions={props.socialActions}
          className="popup-social-actions"
          element="a"
          globals={props.globals}
        />
        <Segment
          actions={props.callActions}
          className="popup-call-actions"
          element="button"
          globals={props.globals}
        />
      </nav>
    </div>
  </div>
)
