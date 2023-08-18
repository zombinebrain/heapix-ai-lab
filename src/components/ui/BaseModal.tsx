import React, { useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";


function Modal({children}) {
  const { setOpenModal } = useContext(ModalContext);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  return createPortal(
    <div
      className="overflow-y-auto fixed top-0 left-0 right-0 w-screen h-screen bg-black z-9999 text-white"
      onClick={(e) => closeModal(e)}
      ref={modalRef}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
