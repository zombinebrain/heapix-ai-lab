import Header from '@components/Header';
import Footer from '@components/Footer';
import {useContext, useEffect} from 'react';
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

  const isTouchEnabled = () => {
    return ( 'ontouchstart' in window ) ||
      ( navigator.maxTouchPoints > 0 ) ||
      ( navigator.msMaxTouchPoints > 0 );
  };

  useEffect(() => {
    console.log(isTouchEnabled())
    if (!isTouchEnabled()) {
      const cursor = document.getElementById('cursor');
      document.onmousemove = (e) => {
        cursor.style.left = (e.pageX - 60) + 'px';
        cursor.style.top = (e.pageY - 60) + 'px';
        cursor.style.display = 'block';
      }
    }
  }, [isTouchEnabled]);

  return (
    <div className="relative overflow-hidden">
      <main className="flex min-h-screen flex-col bg-black text-white pt-13.75">
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </main>
      <div id="cursor" className="hidden absolute rounded-full pointer-events-none z-9999">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.7491 17.1288L64.0883 18.491L64.6866 17.2212L71.3017 3.18277L72.0409 18.684L72.1077 20.0862L72.9423 18.9575L82.169 6.47934L79.8699 21.8269L79.6619 23.2152L80.7006 22.271L92.1844 11.8327L86.9353 26.4368L86.4605 27.7578L87.6635 27.0344L100.963 19.0371L92.9656 32.3365L92.2421 33.5396L93.5632 33.0647L108.167 27.8156L97.729 39.2994L96.7848 40.3381L98.1731 40.1301L113.521 37.831L101.043 47.0577L99.9138 47.8923L101.316 47.9591L116.817 48.6983L102.779 55.3134L101.509 55.9117L102.871 56.2509L117.93 60L102.871 63.7491L101.509 64.0883L102.779 64.6866L116.817 71.3017L101.316 72.0409L99.9138 72.1077L101.043 72.9423L113.521 82.169L98.1731 79.8699L96.7848 79.6619L97.729 80.7006L108.167 92.1844L93.5632 86.9353L92.2421 86.4605L92.9656 87.6635L100.963 100.963L87.6635 92.9656L86.4605 92.2421L86.9353 93.5632L92.1844 108.167L80.7006 97.729L79.6619 96.7848L79.8699 98.1731L82.169 113.521L72.9423 101.043L72.1077 99.9138L72.0409 101.316L71.3017 116.817L64.6866 102.779L64.0883 101.509L63.7491 102.871L60 117.93L56.2509 102.871L55.9117 101.509L55.3134 102.779L48.6983 116.817L47.9591 101.316L47.8923 99.9138L47.0577 101.043L37.831 113.521L40.1301 98.1731L40.3381 96.7848L39.2994 97.729L27.8156 108.167L33.0647 93.5632L33.5396 92.2421L32.3365 92.9656L19.0371 100.963L27.0344 87.6635L27.7578 86.4605L26.4368 86.9353L11.8327 92.1844L22.271 80.7006L23.2152 79.6619L21.8269 79.8699L6.47934 82.169L18.9575 72.9423L20.0862 72.1077L18.684 72.0409L3.18277 71.3017L17.2212 64.6866L18.491 64.0883L17.1288 63.7491L2.06966 60L17.1288 56.2509L18.491 55.9117L17.2212 55.3134L3.18276 48.6983L18.684 47.9591L20.0862 47.8923L18.9575 47.0577L6.47933 37.831L21.8269 40.1301L23.2152 40.3381L22.271 39.2994L11.8327 27.8156L26.4368 33.0647L27.7578 33.5396L27.0344 32.3365L19.0371 19.0371L32.3365 27.0344L33.5396 27.7578L33.0647 26.4368L27.8156 11.8327L39.2994 22.271L40.3381 23.2152L40.1301 21.8269L37.831 6.47933L47.0577 18.9575L47.8923 20.0862L47.9591 18.684L48.6983 3.18276L55.3134 17.2212L55.9117 18.491L56.2509 17.1288L60 2.06966L63.7491 17.1288Z" stroke="white"/>
        </svg>
      </div>
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

