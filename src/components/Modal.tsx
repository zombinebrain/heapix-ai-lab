import { useState, Dispatch, SetStateAction } from 'react';
import { ReactPortal } from './';
// Define the props of Modal.
type ModalProps = {
  isOpen: boolean,
  setOn: Dispatch<SetStateAction<boolean>>,
  title?: string,
  promptText?: string,
  handleDelete?: Function
}
// Modal component.
const Modal = (
  { isOpen, setOn, title, promptText, handleDelete } : ModalProps ) => {
  // Manage button enabled/disabled state.
  const [ disabled, setDisabled ] = useState<boolean>(false);
  // Return null if isOpen props from parent is false.
  if (!isOpen) return null;
  // Run when delete is confirmed.
  const confirmDelete = () : void => {
    // Disable the buttons (this could also be anything).
    setDisabled(true);
    // Execute delete comment or reply.
    if (handleDelete) handleDelete();
  }
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal">
        {/* Modal Heading */}
      <div className="modal__modal-heading">
        <h3 className="modal__modal-title">{title}</h3>
      </div>
        {/* Modal Prompt Text */}
      <div className="modal__modal-body">
        <p>{promptText}</p>
      </div>
        {/* Modal CTA */}
      <div className="modal__modal_flex_row modal__modal_justify_between">
        <button
        className="modal__modal-btn-close"
        onClick={ () => setOn(false) }
        disabled={disabled}
      >
        NO, CANCEL
      </button>
        <button
        className="modal__modal-btn-confirm-delete"
        onClick={confirmDelete}
        disabled={disabled}
      >
        YES, DELETE
      </button>
      </div>
      </div>
    </ReactPortal>
  );
}

export default Modal;
