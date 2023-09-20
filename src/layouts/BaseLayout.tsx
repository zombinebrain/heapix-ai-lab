import Header from '@components/Header';
import Footer from '@components/Footer';
import {ReactNode, useContext} from 'react';
import { ModalContext } from '../contexts/ModalContext';
import ContactModal from "@components/contact/ContactModal";
import {AnimatePresence} from "framer-motion";
import Cursor from "@components/Cursor";

const Layout = ({ children }: { children: ReactNode }) => {
  const {
    isOpenedModal,
    setIsOpenedModal
  } = useContext(ModalContext);

  const handleModalClose = () => {
    setIsOpenedModal(false);
  };

  return (
    <div className="relative overflow-hidden">
      <main className="flex min-h-screen flex-col bg-black text-white pt-13.75">
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </main>
      <Cursor />
      <div id="modal" />
      <AnimatePresence>
        {isOpenedModal && (
          <ContactModal onClose={handleModalClose} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
