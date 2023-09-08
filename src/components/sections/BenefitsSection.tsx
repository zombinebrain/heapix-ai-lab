import {benefits} from "../../data/benefits";
import Benefit from "@components/Benefit";
import BaseTitle from "@components/ui/BaseTitle";
import IconSettings from "@icons/benefits/IconSettings";
import IconSearch from "@icons/benefits/IconSearch";
import IconTarget from "@icons/benefits/IconTarget";
import IconTimer from "@icons/benefits/IconTimer";
import IconIdentity from "@icons/benefits/IconIdentity";
import IconWallet from "@icons/benefits/IconWallet";
import IconTestTube from "@icons/benefits/IconTestTube";

const benefitsClasses = {
  automation: 'col-span-4 tablet:col-span-2',
  analysis: 'col-span-6 col-end-13 tablet:col-span-3 tablet:col-end-7',
  accuracy: 'col-start-6 col-span-3 tablet:col-span-2 tablet:col-start-3',
  speed: 'col-span-3 tablet:col-span-2',
  personalisation: 'col-start-2 col-span-6 tablet:col-span-4 tablet:col-start-1',
  cost: 'col-span-2 col-end-13 tablet:col-span-2 tablet:col-end-7',
  innovation: 'col-start-4 col-span-6 tablet:col-start-2 tablet:col-span-4'
};

const benefitsIcons = {
  automation: <IconSettings />,
  analysis: <IconSearch />,
  accuracy: <IconTarget />,
  speed: <IconTimer />,
  personalisation: <IconIdentity />,
  cost: <IconWallet />,
  innovation: <IconTestTube />
};

const BenefitsSection = () => {
  return (
    <>
      <BaseTitle id="benefits" title="Benefits of using AI in business"/>
      <section
        className="base-padding base-vertical-grid sm:flex sm:overflow-x-auto sm:child:min-w-[60%] sm:space-x-3.75"
      >
        {
          benefits.map(item => (
            <Benefit
              key={item.id}
              title={item.title}
              text={item.text}
              icon={benefitsIcons[item.id as keyof typeof benefitsClasses]}
              className={benefitsClasses[item.id as keyof typeof benefitsClasses]}
            />
          ))
        }
      </section>
    </>
  );
};

export default BenefitsSection;
