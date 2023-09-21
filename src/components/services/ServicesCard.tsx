
import {MouseEvent} from "react";

type ServicesCardProps = {
  className: string,
  title: string,
  onClick: (e: MouseEvent) => void,
  img: string
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
        <picture>
          <source
            srcSet={`\\images\\3x\\${img}.webp`}
            media="(min-width: 1920px)"
            type="image/webp"
          />
          <source
            srcSet={`\\images\\2x\\${img}.webp`}
            media="(min-width: 600px)"
            type="image/webp"
          />
          <img
            src={`\\images\\1x\\${img}.webp`}
            className="w-full rounded hover:scale-[1.15] tablet:hover:scale-none transition duration-700 grayscale hover:grayscale-0"
            alt={img}
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="text-body group-hover:text-lemon transition-colors duration-300">
        {title}
      </div>
    </div>
  );
};

export default ServicesCard;
