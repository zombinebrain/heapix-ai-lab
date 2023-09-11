//import {motion} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import {MouseEvent} from "react";

type ServicesCardProps = {
  className: string,
  title: string,
  onClick: (e: MouseEvent) => void,
  img: StaticImageData
};

const ServicesCard = ({
  className,
  title,
  onClick,
  img
}: ServicesCardProps) => {
  return (
    <div
/*      initial={{opacity: 0, height: 0}}
      animate={{opacity: 1, height: 'auto'}}
      exit={{opacity: 0, height: 0}}
      transition={{duration: .2}}*/
      onClick={onClick}
      className={`group cursor-pointer flex flex-col ${className}`}
    >
      <div className="bg-grey-800 rounded aspect-[4/3] mb-2.5 w-full overflow-hidden">
        <Image src={img} alt={title} placeholder="blur" className="rounded hover:scale-[1.15] tablet:hover:scale-none transition duration-700" />
      </div>
      <div className="text-body group-hover:text-lemon transition-colors duration-300">
        {title}
      </div>
    </div>
  );
};

export default ServicesCard;
