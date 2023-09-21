import IconCancel from "@icons/IconCancel";
import {m} from "framer-motion";
import { MouseEvent } from "react";

export type BaseAlertProps = {
  title: string,
  description: string,
  specialBtnText?: string,
  onSpecialClick?: (e: MouseEvent) => void,
  onClose?: () => void
};

const BaseAlert = ({
  title,
  description,
  specialBtnText,
  onSpecialClick,
  onClose
}: BaseAlertProps) => {
  return (
    <m.div
      className="fixed z-max top-0 left-0"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: .3}}
    >
      <div className="bg-black opacity-60 w-screen h-screen"/>
      <div
        className="animate-alert-appearance text-center w-[calc(100%-2rem)] max-w-[465px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white bg-black border border-grey-600 rounded-2.5xl">
        <div className="relative px-5 py-3.75 border-b border-grey-600 text-body">
          {title}
          {
            onClose && (
              <button className="absolute right-5 max-w-[30px] max-h-[30px]">
                <IconCancel/>
              </button>
            )
          }
        </div>
        <div className="text-callout px-15 pb-15 pt-7.5">
          <p className="text-grey-400 mb-2.5">
            {description}
          </p>
          {
            specialBtnText && onSpecialClick && (
              <button
                onClick={onSpecialClick}
                className="text-lemon"
              >
                {specialBtnText}
              </button>
            )
          }
        </div>
      </div>
    </m.div>
  );
};

export default BaseAlert;
