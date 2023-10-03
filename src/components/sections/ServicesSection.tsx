import BaseTitle from "@components/ui/BaseTitle";
import ShowMoreBtn from "@components/ui/ShowMoreBtn";
import {useState, MouseEvent} from "react";
import {servicesCards} from "../../data/services";
import {SERVICES_IDS, ServicesCardsType} from "../../models/services";
import {AnimatePresence} from "framer-motion";
import {scrollIntoView} from "../../utils/scrollIntoView";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";
import ServicesModal from "@components/services/ServicesModal";
import ServicesCard from "@components/services/ServicesCard";
import demand_forecasting_and_inventory_management from "../../../public/images/3x/demand_forecasting_and_inventory_management.webp";
import document_processing_automation from "../../../public/images/3x/document_processing_automation.webp";
import personalized_marketing from "../../../public/images/3x/personalized_marketing.webp";
import data_analysis_and_decision_making from "../../../public/images/3x/data_analysis_and_decision_making.webp";
import customer_churn_prediction from "../../../public/images/3x/customer_churn_prediction.webp";
import customer_service_automation from "../../../public/images/3x/customer_service_automation.webp";
import logistics_optimization from "../../../public/images/3x/logistics_optimization.webp";
import social_media_analysis from "../../../public/images/3x/social_media_analysis.webp";
import fraud_detection from "../../../public/images/3x/fraud_detection.webp";
import business_trend_forecasting from "../../../public/images/3x/business_trend_forecasting.webp";
import text_recognition_and_processing from "../../../public/images/3x/text_recognition_and_processing.webp";
import media_data_analysis from "../../../public/images/3x/media_data_analysis.webp";

const classNames = Object.freeze({
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
});

const images = Object.freeze({
  [SERVICES_IDS.MANAGEMENT]: demand_forecasting_and_inventory_management,
  [SERVICES_IDS.AUTOMATION]: document_processing_automation,
  [SERVICES_IDS.MARKETING]: personalized_marketing,
  [SERVICES_IDS.DATA_ANALYSIS]: data_analysis_and_decision_making,
  [SERVICES_IDS.CHURN_PREDICTION]: customer_churn_prediction,
  [SERVICES_IDS.SERVICE_AUTOMATION]: customer_service_automation,
  [SERVICES_IDS.LOGISTICS]: logistics_optimization,
  [SERVICES_IDS.SOCIALS_ANALYSIS]: social_media_analysis,
  [SERVICES_IDS.FRAUD_DETECTION]: fraud_detection,
  [SERVICES_IDS.TREND_FORECASTING]: business_trend_forecasting,
  [SERVICES_IDS.TEXT_RECOGNITION]: text_recognition_and_processing,
  [SERVICES_IDS.MEDIA_ANALYSIS]: media_data_analysis
});

const ServicesSection = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [openedServiceId, setOpenedServiceId] = useState<string | null>(null);
  const {isMobileBreakpoint} = useGetCurrentBreakpoint();

  const openedService = openedServiceId && servicesCards[openedServiceId as keyof ServicesCardsType];

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
                className={classNames[entry[0] as keyof typeof classNames]}
                title={entry[0]}
                img={images[entry[0] as keyof typeof images]}
                key={entry[0]}
                onClick={(e: MouseEvent) => handleOpenServiceClick(entry[0], e)}
              />
            ))
          }
          <AnimatePresence>
            {
              isOpenServices && Object.entries(servicesCards).slice(isMobileBreakpoint ? 3 : 5).map(entry => (
                <ServicesCard
                  className={classNames[entry[0] as keyof typeof classNames]}
                  title={entry[0]}
                  img={images[entry[0] as keyof typeof images]}
                  key={entry[0]}
                  onClick={(e: MouseEvent) => handleOpenServiceClick(entry[0], e)}
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
            title={openedServiceId!}
            tags={openedService.tags}
            technologies={openedService.technologies}
            img={images[openedServiceId as keyof typeof images]}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
