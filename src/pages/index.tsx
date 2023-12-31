import Socials from "@components/ui/Socials";
import BaseTag from "@components/ui/BaseTag";
import BaseSpacer from "@components/ui/BaseSpacer";
import BookMeetingBtn from "@components/ui/BookMeetingBtn";
import BaseLayout from "../layouts/BaseLayout";
import BaseTypeWriter from "@components/ui/BaseTypeWriter";
import BenefitsSection from "@components/sections/BenefitsSection";
import AboutUsSection from "@components/sections/AboutUsSection";
import ServicesSection from "@components/sections/ServicesSection";
import FaqSection from "@components/sections/FaqSection";
import BannerVideoSection from "@components/sections/BannerVideoSection";

export default function Home() {
  return (
    <BaseLayout>
      <section className="flex flex-col items-center pt-25 sm:py-12.5 sm:px-3.75">
        <BaseTag text="Created in a collaboration with AI" className="hidden sm:block sm:mb-7.5 whitespace-nowrap"/>
        <div className="font-title w-full text-center pb-35 sm:pb-12.5 max-w-[50%] md:max-w-[65%] tablet:max-w-[80%] sm:max-w-full">
          <h2 className="min-h-[2.5em] sm:min-h-[3.8em]">
            <span>HEAPIX AI Lab: </span>
            <BaseTypeWriter
              text="Maximise efficiency with our solutions"
              delay={70}
            />
          </h2>
        </div>
        <div className="base-padding flex flex-col items-end text-body border-t sm:border-none border-grey-800">
          <p className="w-1/2 mb-10 sm:hidden">
            Discover the Power of AI in Business: Elevate Your Efficiency, Enhance Decision-Making, and Drive
            Innovation. Partner with Us for Tailored Solutions that Propel Your Success.
          </p>
          <div className="w-full flex items-center justify-between sm:justify-center">
            <BaseTag text="Created in a collaboration with AI" className="sm:hidden"/>
            <Socials/>
          </div>
        </div>
      </section>
      <BannerVideoSection />
      <div className="sm:hidden">
        <BaseSpacer/>
      </div>
      <BenefitsSection />
      <BaseSpacer/>
      <AboutUsSection />
      <BaseSpacer/>
      <ServicesSection />
      <BaseSpacer/>
      <FaqSection />
      <BaseSpacer/>
      <BookMeetingBtn/>
    </BaseLayout>
  )
}
