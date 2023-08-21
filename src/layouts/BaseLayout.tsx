import Head from 'next/head';
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
      <Head>
        <title>Heapix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        {/* <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" /> */}
      </Head>
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

