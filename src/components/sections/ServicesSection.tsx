import BaseTitle from "@components/ui/BaseTitle";
import ShowMoreBtn from "@components/ui/ShowMoreBtn";
import {useState, MouseEvent} from "react";
import {servicesCards} from "../../data/services";
import {SERVICES_IDS} from "../../models/services";
import {AnimatePresence, motion} from "framer-motion";
import {scrollIntoView} from "../../utils/scrollIntoView";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";
import ServicesModal from "@components/services/ServicesModal";
import ServicesCard from "@components/services/ServicesCard";

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

const ServicesSection = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [openedServiceId, setOpenedServiceId] = useState<string | null>(null);
  const {isMobileBreakpoint} = useGetCurrentBreakpoint();

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

  return (
    <>
      <BaseTitle id="services" title="Jump to AI-Powered optimization with HEAPIX"/>
      <section className="base-padding flex flex-col w-full">
        <div className="base-vertical-grid gap-y-22.5 md:gap-y-15 tablet:gap-y-12.5 sm:gap-y-10">
          {
            Object.entries(servicesCards).slice(0, isMobileBreakpoint ? 3 : 5).map(entry => (
              <ServicesCard
                className={classNames[entry[0]]}
                title={entry[0]}
                key={entry[0]}
                onClick={(e) => handleOpenServiceClick(entry[0], e)}
              />
            ))
          }
          <AnimatePresence>
            {
              isOpenServices && Object.entries(servicesCards).slice(isMobileBreakpoint ? 3 : 5).map(entry => (
                <ServicesCard
                  className={classNames[entry[0]]}
                  title={entry[0]}
                  key={entry[0]}
                  onClick={(e) => handleOpenServiceClick(entry[0], e)}
                />
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
          <ServicesModal
            onClose={() => setIsOpenedModal(false)}
            isOpen={isOpenedModal}
            title={openedServiceId}
            tags={openedService.tags}
            technologies={openedService.technologies}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
