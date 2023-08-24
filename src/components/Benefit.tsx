import {ReactNode} from "react";

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
  return (
    <div className={`flex flex-col py-5 sm:py-3.75 space-y-1 ${className}`}>
      <div className="w-15 tablet:w-13.75 h-15 tablet:h-13.75 border border-grey-600 rounded-full p-4">
        { icon }
      </div>
      <div className="mb-3 tablet:mb-2 text-body">{title}</div>
      <p className="text-callout">{text}</p>
    </div>
  );
};

export default Benefit;
