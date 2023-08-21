import IconHeapixLogo from "@icons/IconHeapixLogo";
import IconBurger from "@icons/IconBurger";
import MobileMenu from "@components/ui/MobileMenu";
import {ModalContext} from "../contexts/ModalContext";
import {useContext, useState} from "react";
import {scrollIntoView} from "../utils/scrollIntoView";
import IconCancel from "@icons/IconCancel";
import {motion, AnimatePresence, useAnimate, useInView} from "framer-motion";


const navButtons = [
  {
    id: 'benefits',
    name: 'Benefits'
  },
  {
    id: 'about',
    name: 'About us'
  },
  {
    id: 'services',
    name: 'Services'
  },
  {
    id: 'workflow',
    name: 'Workflow'
  },
  {
    id: 'contact',
    name: 'Contact us'
  }
];

const Header = () => {
  const { setOpenModal } = useContext(ModalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    if (id === 'contact') {
      setOpenModal(true);
      return ;
    }
    scrollIntoView(id);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const variants = {
    open: { rotate: 180,},
    closed: { rotate: 0},
  };

  return (
    <header className="fixed bg-black top-0 left-0 right-0 flex justify-between items-center h-[55px] base-padding !py-0 border-b border-grey-800 z-50">
      <div>
        <IconHeapixLogo />
      </div>
      <nav className="text-callout grid grid-cols-6 tablet:grid-cols-5 gap-x-5 sm:hidden">
        {
          navButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => handleClick(btn.id)}
              className="border-b border-transparent hover:border-lemon col-span-1 transition-colors duration-300 h-[55px]"
            >
              {btn.name}
            </button>
          ))
        }
      </nav>
      <AnimatePresence>
        <motion.button
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={variants}
          transition={{duration: .1}}
          className="hidden sm:block h-7.5 w-7.5"
          onClick={handleMenuToggle}
        >
          {
            isMenuOpen ? <IconCancel/> : <IconBurger />
          }
        </motion.button>
      </AnimatePresence>

      <AnimatePresence>
        {
          isMenuOpen && <MobileMenu onClose={handleMenuToggle} isOpened={isMenuOpen} />
        }
      </AnimatePresence>
    </header>
  );
};

export default Header;
