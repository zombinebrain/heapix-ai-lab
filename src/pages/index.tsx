import Socials from "@components/ui/Socials";
import BaseTag from "@components/ui/BaseTag";
import BaseSpacer from "@components/ui/BaseSpacer";
import BaseTitle from "@components/ui/BaseTitle";
import {useContext, useState} from "react";
import BookMeetingBtn from "@components/ui/BookMeetingBtn";
import BaseLayout from "../layouts/BaseLayout";
import BaseTypeWriter from "@components/ui/BaseTypeWriter";
import BenefitsSection from "@components/sections/BenefitsSection";
import AboutUsSection from "@components/sections/AboutUsSection";
import ServicesSection from "@components/sections/ServicesSection";
import {faqCards} from "../data/faq";
import FaqCollapsible from "@components/FaqCollapsible";
import Link from "next/link";
import {ModalContext} from "../contexts/ModalContext";

export default function Home() {
  const [openedFaq, setOpenedFaq] = useState<string | null>(null);
  const {setIsOpenedModal} = useContext(ModalContext);

  const description = (id: string, text: string) => {
    if (id !== 'team') {
      return <p className="text-callout">{text}</p>
    }
    return (
      <p className="text-callout">
        <span>{text}</span>
        <span>
          to start collaborating <Link
          href="https://timate.me/schedules/max/Ai_call"
          target="_blank"
          className="text-lemon whitespace-nowrap"
        >
          Book a meeting
        </Link> or <button onClick={() => setIsOpenedModal(true)} className="text-lemon whitespace-nowrap">Contact us</button>
        </span>
      </p>
    );
  };

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
      <section className="px-10 tablet:px-5 sm:px-0">
        <video className="w-full tablet:hidden" autoPlay muted playsInline loop>
          <source src="/banner-video.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <video className="w-full hidden tablet:block sm:hidden" autoPlay muted playsInline loop>
          <source src="/banner-video-compressed.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <video className="w-full hidden hidden sm:block" autoPlay muted playsInline loop>
          <source src="/banner-video-compressed-mobile.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </section>
      <div className="sm:hidden">
        <BaseSpacer/>
      </div>
      <BenefitsSection />
      <BaseSpacer/>
      <AboutUsSection />
      <BaseSpacer/>
      <ServicesSection />
      <BaseTitle id="faq" title="FAQ"/>
      <section className="flex flex-col">
          {
            faqCards.map(card => (
              <FaqCollapsible
                openedId={openedFaq}
                onOpenClick={setOpenedFaq}
                title={card.title}
                content={description(card.id, card.description)}
                key={card.id}
                id={card.id}
              />
            ))
          }
      </section>
      <BaseSpacer/>
      <BookMeetingBtn/>
    </BaseLayout>
  )
}
