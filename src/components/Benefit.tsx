import {ReactNode} from "react";
import {m, Variants} from "framer-motion";
import useGetCurrentBreakpoint from "../hooks/useGetCurrentBreakpoint";

const variants: Variants = {
  offscreen: {
    y: "100%",
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.5
    }
  }
};

type BenefitProps = {
  title: string,
  text: string,
  icon?: ReactNode,
  className?: string
};

const Benefit = ({
                   title,
                   text,
                   icon,
                   className = ''
                 }: BenefitProps) => {
  const {isMobileBreakpoint} = useGetCurrentBreakpoint();

  return isMobileBreakpoint ? (
    <div
      className={`flex flex-col py-5 sm:py-3.75 space-y-1 ${className}`}
    >
      <div className="w-15 tablet:w-13.75 h-15 tablet:h-13.75 border border-grey-600 rounded-full p-4">
        {icon}
      </div>
      <div className="mb-3 tablet:mb-2 text-body">{title}</div>
      <p className="text-callout">{text}</p>
    </div>
  ) : (
    <m.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once: true, amount: 0.5}}
      variants={variants}
      className={`flex flex-col py-5 sm:py-3.75 space-y-1 ${className}`}
    >
      <div className="w-15 tablet:w-13.75 h-15 tablet:h-13.75 border border-grey-600 rounded-full p-4">
        {icon}
      </div>
      <div className="mb-3 tablet:mb-2 text-body">{title}</div>
      <p className="text-callout">{text}</p>
    </m.div>
  );
};

export default Benefit;
