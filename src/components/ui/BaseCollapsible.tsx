import IconMinus from '@components/icons/IconMinus';
import IconPlus from '@components/icons/IconPlus';
import {ReactNode} from 'react';
import {m, AnimatePresence} from "framer-motion";

type BaseCollapsibleProps = {
  name: string,
  content: ReactNode,
  onOpenClick: (val: string | null) => void,
  openedId: string | null
};

const variants = {
  open: {rotate: 180},
  closed: {rotate: 0}
};

const BaseCollapsible = ({
  name,
  content,
  onOpenClick,
  openedId
}: BaseCollapsibleProps) => {
  const handleClick = () => {
    onOpenClick(openedId === name ? null : name);
  };

  return (
    <div className="flex flex-col text-body px-7.5 py-5 sm:p-3.75">
      <button
        onClick={handleClick}
        className="flex justify-between items-center group"
      >
        <div className="group-hover:text-lemon mr-5 text-start transition-colors duration-300">
          {name}
        </div>
        <AnimatePresence>
          <m.div
            key={name}
            initial="closed"
            animate={openedId === name ? "open" : "closed"}
            exit="closed"
            variants={variants}
            transition={{duration: .1}}
            className="min-w-7.5 w-7.5 min-h-7.5 h-7.5 sm:w-6 sm:min-w-[1.5rem] sm:h-6 sm:min-h-[1.5rem]"
          >
            {
              openedId === name
                ? <IconMinus/>
                : <IconPlus className="px-[2px]"/>
            }
          </m.div>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {
          openedId === name && (
            <m.div
              initial={{height: 0, marginTop: 0}}
              animate={{height: 'auto', marginTop: 'var(--margin-to)'}}
              exit={{height: 0, marginTop: 0}}
              transition={{duration: .2}}
              className="overflow-hidden [--margin-to:20px] tablet:[--margin-to:10px]"
            >
              {content}
            </m.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default BaseCollapsible;
