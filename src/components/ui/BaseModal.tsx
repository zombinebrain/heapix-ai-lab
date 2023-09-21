import {useRef, useContext, ReactNode, MouseEvent} from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { m } from "framer-motion";
import {useHideScroll} from "../../hooks/useHideScroll";

const variants = {
  open: { opacity: 1, y: 0,},
  closed: { opacity: 1, y: '100%',},
};

function Modal({ children }: { children: ReactNode }) {
  const { isOpenedModal, setIsOpenedModal } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useHideScroll(isOpenedModal);

  const closeModal = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      setIsOpenedModal(false);
    }
  };

  return createPortal(
    <m.div
      initial="closed"
      animate={isOpenedModal ? "open" : "closed"}
      exit="closed"
      variants={variants}
      transition={{duration: .1}}
      className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 w-screen h-screen bg-black z-9999 text-white"
      onClick={(e) => closeModal(e)}
      ref={modalRef}
    >
      {children}
    </m.div>,
    document.getElementById("modal")!
  );
}

export default Modal;
