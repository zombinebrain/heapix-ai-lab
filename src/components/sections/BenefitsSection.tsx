import {AnimatePresence, motion, Variants} from "framer-motion";
import {benefits} from "../../data/benefits";
import Benefit from "@components/Benefit";
import ShowMoreBtn from "@components/ui/ShowMoreBtn";
import BaseTitle from "@components/ui/BaseTitle";
import BaseSpacer from "@components/ui/BaseSpacer";

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

const BenefitsSection = () => {
  const benefitsClasses = {
    automation: 'col-span-4 tablet:col-span-2',
    analysis: 'col-span-6 col-end-13 tablet:col-span-3 tablet:col-end-7',
    accuracy: 'col-start-6 col-span-3 tablet:col-span-2 tablet:col-start-3',
    speed: 'col-span-3 tablet:col-span-2',
    personalisation: 'col-start-2 col-span-6 tablet:col-span-4 tablet:col-start-1',
    cost: 'col-span-2 col-end-13 tablet:col-span-2 tablet:col-end-7',
    innovation: 'col-start-4 col-span-6 tablet:col-start-2 tablet:col-span-4'
  };

  return (
    <>
      <BaseTitle id="benefits" title="Benefits of using AI in business"/>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="base-padding base-vertical-grid sm:flex sm:overflow-x-auto sm:child:min-w-[60%] sm:space-x-3.75"
      >
        {
          benefits.map(item => (
            <Benefit
              key={item.id}
              title={item.title}
              text={item.text}
              className={benefitsClasses[item.id]}
            />
          ))
        }
      </motion.section>
    </>
  );
};

export default BenefitsSection;
