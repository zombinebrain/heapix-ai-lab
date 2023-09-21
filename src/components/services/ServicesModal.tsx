import {m} from "framer-motion";
import IconCancel from "@icons/IconCancel";
import BaseSmallTag from "@components/ui/BaseSmallTag";
import {useClickOutside} from "../../hooks/useClickOutside";
import {TechnologiesType} from "../../models/services";
import Image, {StaticImageData} from "next/image";
import {MutableRefObject} from "react";
import {useHideScroll} from "../../hooks/useHideScroll";

type ServicesModalProps = {
  onClose: () => void,
  isOpen: boolean,
  title: string,
  tags: string[],
  technologies: Array<TechnologiesType>,
  img: StaticImageData
};

const variants = {
  open: {opacity: 1, y: 0},
  closed: {opacity: 1, y: '100%'}
};

const ServicesModal = ({
  onClose,
  isOpen,
  title,
  tags,
  technologies,
  img
}: ServicesModalProps) => {
  const modalRef = useClickOutside(onClose) as MutableRefObject<HTMLDivElement | null>;
  useHideScroll(isOpen, true);

  return (
    <>
      <div
        className="top-0 left-0 fixed w-screen h-screen bg-black opacity-50 flex justify-end z-overlay"/>
      <m.div
        ref={modalRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={variants}
        transition={{duration: .2}}
        className="top-0 right-0 fixed h-screen w-1/2 tablet:w-2/3 sm:w-screen p-5 flex flex-col bg-black z-9999 rounded-xl border border-grey-600"
      >
        <div className="relative">
          <h2 className="py-5 sm:py-3.75 pr-5">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 w-6 h-6"
          >
            <IconCancel/>
          </button>
        </div>
        <div className="overflow-y-auto ">
          <div className="flex flex-wrap items-center py-5 sm:py-3.75 child:mr-2.5 -mt-2.5 child:mt-2.5">
            {
              tags.map(tag => (
                <BaseSmallTag text={tag} key={tag}/>
              ))
            }
          </div>
          <div className="bg-grey-800 rounded mb-2.5 w-full">
            <Image src={img} alt={title} className="rounded" />
          </div>
          {
            technologies.map(card => (
              <div className="flex flex-col py-5 sm:py-3.75" key={card.title}>
                <div className="text-body">{card.title}</div>
                <p className="text-callout">{card.text}</p>
              </div>
            ))
          }
        </div>
      </m.div>
    </>
  );
};

export default ServicesModal;
