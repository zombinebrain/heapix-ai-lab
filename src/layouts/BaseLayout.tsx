import Header from '@components/Header';
import Footer from '@components/Footer';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import ContactModal from "@components/ContactModal";
import {AnimatePresence} from "framer-motion";

const Layout = ({ children }) => {
  const {
    isOpenedModal,
    setIsOpenedModal
  } = useContext(ModalContext);

  const handleModalClose = () => {
    setIsOpenedModal(false);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col bg-black text-white pt-[55px]">
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </main>
      <div id="modal"/>
      <AnimatePresence>
        {isOpenedModal && (
          <ContactModal onClose={handleModalClose} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;

