import {MouseEvent, useEffect, useState} from "react";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";

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
  const [imgSrc, setImgSrc] = useState(`\\images\\placeholders\\${img}.webp`);
  const { dimensions } = useGetCurrentBreakpoint();

  useEffect(() => {
    if (dimensions.width === 0) return;
    const mainImg = new Image();
    let src;
    if (dimensions.width >= 1920) {
      src = `\\images\\3x\\${img}.webp`;
    } else if (dimensions.width >= 600) {
      src = `\\images\\2x\\${img}.webp`;
    } else {
      src = `\\images\\1x\\${img}.webp`;
    }
    mainImg.src = src;
    mainImg.onload = () => {
      setImgSrc(src);
    };
  }, [img, dimensions.width]);


  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer flex flex-col ${className}`}
    >
      <div className="bg-grey-800 rounded aspect-[4/3] mb-2.5 w-full overflow-hidden">
        <img
          src={imgSrc}
          className="w-full rounded hover:scale-[1.15] tablet:hover:scale-none transition duration-700 grayscale hover:grayscale-0"
          alt={img}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="text-body group-hover:text-lemon transition-colors duration-300">
        {title}
      </div>
    </div>
  );
};

export default ServicesCard;
