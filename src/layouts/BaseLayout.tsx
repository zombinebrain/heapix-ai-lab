import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import ContactModal from "@components/ContactModal";

const Layout = ({ children }) => {
  const {
    openModal,
    setOpenModal
  } = useContext(ModalContext);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Head>
        <title>Heapix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        {/* <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col bg-black text-white mt-[55px] tablet:mt-12.5">
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </main>
      <div id="modal"/>
      {openModal && (
        <ContactModal onClose={handleModalClose} />
      )}
    </>
  );
};

export default Layout;

