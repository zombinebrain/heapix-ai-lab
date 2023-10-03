import {MouseEvent} from "react";
import Image, {StaticImageData} from "next/image";

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
      onClick={onClick}
      className={`group cursor-pointer flex flex-col ${className}`}
    >
      <div className="bg-grey-800 rounded aspect-[4/3] mb-2.5 w-full overflow-hidden">
        <Image
          src={img}
          className="w-full rounded hover:scale-[1.15] tablet:hover:scale-none transition duration-700 grayscale hover:grayscale-0"
          alt={title}
          placeholder="blur"
        />
      </div>
      <div className="text-body group-hover:text-lemon transition-colors duration-300">
        {title}
      </div>
    </div>
  );
};

export default ServicesCard;
