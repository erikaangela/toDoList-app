import React from "react";
import ReactDOM from "react-dom";

// We use portals to create portals or for rendering a component into some html that was
// not created by React app (see modal.html)

// <div id="modal"></div> added to index.html
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {/* If we trigger an event on a child element (any of the below divs) and that child element 
        does not handle that event, we "bubble" up to the parent element which is why we need 
        stopPropagation to avoid triggering the event when clicking inside the modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
