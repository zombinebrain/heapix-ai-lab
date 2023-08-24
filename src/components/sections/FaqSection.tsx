import BaseTitle from "@components/ui/BaseTitle";
import {faqCards} from "../../data/faq";
import FaqCollapsible from "@components/FaqCollapsible";
import {useContext, useState} from "react";
import {ModalContext} from "../../contexts/ModalContext";
import Link from "next/link";

const FaqSection = () => {
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
    <>
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
    </>
  );
};

export default FaqSection;
