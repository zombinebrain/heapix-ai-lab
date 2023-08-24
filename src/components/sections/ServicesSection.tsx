import BaseTitle from "@components/ui/BaseTitle";
import ShowMoreBtn from "@components/ui/ShowMoreBtn";
import {useState, MouseEvent} from "react";
import {servicesCards} from "../../data/services";
import {SERVICES_IDS} from "../../models/services";
import {AnimatePresence, motion} from "framer-motion";
import {scrollIntoView} from "../../utils/scrollIntoView";
import {useClickOutside} from "../../hooks/useClickOutside";
import BaseSmallTag from "@components/ui/BaseSmallTag";
import IconCancel from "@icons/IconCancel";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";

const classNames = {
  [SERVICES_IDS.MANAGEMENT]: 'col-start-1 col-span-4 tablet:col-span-2 sm:col-span-2',
  [SERVICES_IDS.AUTOMATION]: 'col-span-6 col-end-13 tablet:col-span-4 tablet:col-end-auto sm:col-span-3',
  [SERVICES_IDS.MARKETING]: 'col-span-4 tablet:col-span-2 sm:col-span-2 sm:col-end-4',
  [SERVICES_IDS.DATA_ANALYSIS]: 'col-span-4 tablet:col-span-2 sm:col-span-3',
  [SERVICES_IDS.CHURN_PREDICTION]: 'col-span-4 tablet:col-span-2 sm:col-span-2',
  [SERVICES_IDS.SERVICE_AUTOMATION]: 'col-span-6 tablet:col-span-4 sm:col-span-3',
  [SERVICES_IDS.LOGISTICS]: 'col-span-4 col-end-13 tablet:col-span-2 tablet:col-end-auto sm:col-span-2 sm:col-end-4',
  [SERVICES_IDS.SOCIALS_ANALYSIS]: 'col-span-4 tablet:col-span-2 sm:col-span-3',
  [SERVICES_IDS.FRAUD_DETECTION]: 'col-span-4 tablet:col-span-2 sm:col-span-2',
  [SERVICES_IDS.TREND_FORECASTING]: 'col-span-4 tablet:col-span-2 sm:col-span-3',
  [SERVICES_IDS.TEXT_RECOGNITION]: 'col-span-6 tablet:col-span-3 sm:col-span-2 sm:col-end-4',
  [SERVICES_IDS.MEDIA_ANALYSIS]: 'col-span-6 tablet:col-span-3 sm:col-span-3'
};

const variants = {
  open: { opacity: 1, y: 0,},
  closed: { opacity: 1, y: '100%',},
};

const ServicesSection = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [openedServiceId, setOpenedServiceId] = useState<string | null>(null);
  const modalRef = useClickOutside(() => setIsOpenedModal(false));
  const { currentBreakpoint } = useGetCurrentBreakpoint();

  const openedService = openedServiceId && servicesCards[openedServiceId];

  const handleShowClick = () => {
    if (!isOpenServices) {
      setIsOpenServices(true);
      return;
    }
    scrollIntoView('services');
    setTimeout(() => {
      setIsOpenServices(false)
    }, 500);
  };

  const handleOpenServiceClick = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setOpenedServiceId(id);
    setIsOpenedModal(true);
  };

  const handleModalCloseClick = () => {
    setIsOpenedModal(false);
  };

  const isMobile = currentBreakpoint === 'sm';

  return (
    <>
      <BaseTitle id="services" title="Jump to AI-Powered optimization with HEAPIX"/>
      <section className="base-padding flex flex-col w-full">
        <div className="base-vertical-grid gap-y-22.5 md:gap-y-15 tablet:gap-y-12.5 sm:gap-y-10">
          {
            Object.entries(servicesCards).slice(0, isMobile ? 3 : 5).map(entry => (
              <div
                onClick={(e) => handleOpenServiceClick(entry[0], e)}
                className={`group cursor-pointer flex flex-col ${classNames[entry[0]]}`} key={entry[0]}
              >
                <div className="bg-grey-800 rounded aspect-[4/3] mb-2.5 w-full"/>
                <div className="text-body group-hover:text-lemon transition-colors duration-300">
                  {entry[0]}
                </div>
              </div>
            ))
          }
          <AnimatePresence>
            {
              isOpenServices && Object.entries(servicesCards).slice(isMobile ? 3 : 5).map(entry => (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={{opacity: 0, height: 0}}
                  transition={{duration: .2}}
                  onClick={(e) => handleOpenServiceClick(entry[0], e)}
                  className={`group cursor-pointer flex flex-col ${classNames[entry[0]]}`} key={entry[0]}
                >
                  <div className="bg-grey-800 rounded aspect-[4/3] mb-2.5 w-full"/>
                  <div className="text-body group-hover:text-lemon transition-colors duration-300">
                    {entry[0]}
                  </div>
                </motion.div>
              ))

            }
          </AnimatePresence>
        </div>
        <ShowMoreBtn
          isOpen={isOpenServices}
          onClick={handleShowClick}
        />
      </section>
      <AnimatePresence>
        {isOpenedModal && openedService && (
          <>
            <div className="sm:hidden top-0 left-0 fixed w-screen h-screen bg-black opacity-50 flex justify-end z-overlay" />
            <motion.div
              ref={modalRef}
              initial="closed"
              animate={isOpenedModal ? "open" : "closed"}
              exit="closed"
              variants={variants}
              transition={{duration: .1}}
              className="top-0 right-0 fixed h-screen w-1/2 sm:w-screen p-5 flex flex-col bg-black z-9999 rounded-xl border border-grey-600"
            >
              <div className="relative">
                <h2 className="py-5 sm:py-3.75 pr-5">{openedServiceId}</h2>
                <button
                  onClick={handleModalCloseClick}
                  className="absolute top-0 right-0 w-6 h-6"
                >
                  <IconCancel/>
                </button>
              </div>
              <div className="overflow-y-auto ">
                <div className="flex flex-wrap items-center py-5 sm:py-3.75 child:mr-2.5 -mt-2.5 child:mt-2.5">
                  {
                    openedService.tags.map(tag => (
                      <BaseSmallTag text={tag} key={tag}/>
                    ))
                  }
                </div>
                <div className="rounded w-full aspect-[4/3] bg-grey-600"/>
                {
                  openedService.technologies.map(card => (
                    <div className="flex flex-col py-5 sm:py-3.75" key={card.title}>
                      <div className="text-body">{card.title}</div>
                      <p className="text-callout">{card.text}</p>
                    </div>
                  ))
                }
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
