import IconMinus from '@components/icons/IconMinus';
import IconPlus from '@components/icons/IconPlus';
import {ReactNode} from 'react';
import { motion, AnimatePresence } from "framer-motion";

type BaseCollapsibleProps = {
  name: string,
  content: ReactNode,
  onOpenClick: (val: string | null) => void,
  openedId: string | null
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

  const variants = {
    open: { rotate: 180,},
    closed: { rotate: 0},
  };

  return (
    <div className="flex flex-col w-full border-t border-grey-800">
      <div className="text-body">
        <div
          onClick={handleClick}
          className="flex justify-between items-center group cursor-pointer py-5 sm:py-3.75"
        >
          <div className="group-hover:text-lemon mr-5 text-start transition-colors duration-300">
            {name}
          </div>
          <AnimatePresence>
            <motion.div
              initial="closed"
              animate={openedId === name ? "open" : "closed"}
              exit="closed"
              variants={variants}
              transition={{duration: .1}}
              className="min-w-7.5 w-7.5 min-h-7.5 h-7.5 sm:w-6 sm:min-w-[1.5rem] sm:h-6 sm:min-h-[1.5rem]"
            >
              {
                openedId === name
                  ? <IconMinus />
                  : <IconPlus className="px-[2px]" />
              }
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {
            openedId === name && (
              <motion.div
                initial={{ height: 0}}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: .2 }}
                className="overflow-hidden"
              >
                {content}
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BaseCollapsible;
