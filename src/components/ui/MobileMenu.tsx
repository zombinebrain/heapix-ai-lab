import Socials from '@components/ui/Socials';
import BookMeetingBtn from "@components/ui/BookMeetingBtn";
import {scrollIntoView} from "../../utils/scrollIntoView";
import { motion } from "framer-motion";
import {navButtons} from "@components/Header";
import {useContext} from "react";
import {ModalContext} from "../../contexts/ModalContext";

const MobileMenu = ({ onClose, isOpened }) => {
  const { setIsOpenedModal } = useContext(ModalContext);

  const nav = navButtons.map(item => {
    return (
      <button
        onClick={() => handleClick(item.id)}
        key={item.id}
        className="p-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-grey-800"
      >
        <h2>{item.name}</h2>
      </button>
    );
  });

  const handleClick = (id: string) => {
    onClose();
    if (id === 'contacts') {
      setIsOpenedModal(true);
      return ;
    }
    scrollIntoView(id);
  };

  const variants = {
    open: { opacity: 1, y: 0,},
    closed: { opacity: 0, y: '-10%',},
  }

  return (
    <motion.div
      initial="closed"
      animate={isOpened ? "open" : "closed"}
      exit="closed"
      variants={variants}
      transition={{duration: .1}}
      className="z-50 fixed top-[55px] left-0 bg-black h-screen w-screen"
    >
      <div className="flex flex-col h-[calc(100%-55px)]">
        <div className="flex flex-col">
          {nav}
        </div>
        <div className="flex flex-col h-full">
          <div className="flex-auto"></div>
          <BookMeetingBtn />
          <div className="flex flex-col items-center border-t border-grey-800 py-4">
            <Socials />
            <p className="text-callout text-grey-400 mt-2.5">
              © 2023 Heapix. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
