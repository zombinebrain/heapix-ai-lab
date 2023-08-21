import Socials from "@components/ui/Socials";
import BaseTag from "@components/ui/BaseTag";
import BaseSpacer from "@components/ui/BaseSpacer";
import BaseTitle from "@components/ui/BaseTitle";
import Benefit from "@components/Benefit";
import {useEffect, useState} from "react";
import {servicesCards} from "../data/services";
import BookMeetingBtn from "@components/ui/BookMeetingBtn";
import BaseLayout from "../layouts/BaseLayout";
import {workflowCards} from "../data/workflow";
import {benefits} from "../data/benefits";
import BaseBanner from "@components/ui/BaseBanner";
import ShowMoreBtn from "@components/ui/ShowMoreBtn";
import {motion, AnimatePresence, useAnimate, useInView, Variants} from "framer-motion";
import ServicesCollapsible from "@components/ServicesCollapsible";
import {TypeAnimation} from "react-type-animation";
import BaseTypeWriter from "@components/ui/BaseTypeWriter";

export default function Home() {
  const [isOpenBenefits, setIsOpenBenefits] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);

  /*  const [scroller, initScroller] = useState(0);
    const handleScroll = (event) => {
      const height = event.currentTarget.clientHeight;
      const barHeight = event.currentTarget.scrollHeight;
      const scrollTop = event.currentTarget.scrollTop;
      initScroller(((scrollTop + height) / barHeight) * 100);
    };


    useEffect(() => {
      workflowCards.forEach(card => {
        let box = document.getElementById(card.id);
        //let top = box.getBoundingClientRect().top;
        let workflow = document.getElementById('workflow-block');
        let docHeight = workflow.offsetHeight;
        let docTop = workflow.offsetTop;
        console.log(docHeight, docTop, box.offsetTop)


        workflow.addEventListener( 'scroll', function() {
          // normalize scroll position as percentage
          let scrolled = workflow.scrollTop / ( box.offsetTop - docTop );
          console.log(card.id, scrolled)
          box.style.transform = 'scale(' + scrolled + ')';

        }, false);
      });
    }, []);*/

/*  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(scope.current, {opacity: 1})
    }
  }, [isInView])*/

  const variants: Variants = {
    offscreen: {
      x: "150%"
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5
      }
    }
  };

  const [openedService, setOpenedService] = useState<string | null>(null);

  return (
    <BaseLayout>
      <section className="flex flex-col items-center pt-25 sm:py-12.5 sm:px-3.75">
        <BaseTag text="Created in a collaboration with AI" className="hidden sm:block sm:mb-7.5"/>
        <div className="font-title w-full text-center pb-35 sm:pb-12.5 max-w-[50%] md:max-w-[65%] tablet:max-w-[80%] sm:max-w-full">
          <BaseTypeWriter
            text="HEAPIX AI Lab: Maximise efficiency with our solutions"
          />
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
        <BaseBanner/>
      </section>
      <div className="sm:hidden">
        <BaseSpacer/>
      </div>
      <BaseTitle id="benefits" title="Benefits of using AI in business"/>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="base-padding flex justify-end overflow-hidden"
      >
        <motion.div
          variants={variants}
          className="w-1/2 sm:w-full flex flex-col"
        >
          {
            benefits.slice(0,3).map(item => (
              <Benefit
                title={item.title}
                text={item.text}
                key={item.title}
              />
            ))
          }
          <AnimatePresence>
            {
              isOpenBenefits && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={{opacity: 0, height: 0}}
                  transition={{duration: .2}}
                >
                  {
                    benefits.slice(3).map(item => (
                      <Benefit
                        title={item.title}
                        text={item.text}
                        key={item.title}
                      />
                    ))
                  }
                </motion.div>
              )
            }
          </AnimatePresence>
          <ShowMoreBtn
            isOpen={isOpenBenefits}
            onClick={() => setIsOpenBenefits(!isOpenBenefits)}
          />
        </motion.div>
      </motion.section>
      <BaseSpacer/>
      <BaseTitle
        id="about"
        title="At  HEAPIX, we are AI experts specialising in large language and diffusion models. We harness the power of OpenAI's GPT-3.5, GPT-4, LLaMa 2, Stable Diffusion, Claude, and Falcon, utilising Python, LangChain, HuggingFace, and Pinecone's vector databases. Our skills transform data into insights, optimising processes for smarter and informed decisions. Discover the future with HEAPIX, where artificial intelligence creates excellence."
      />
      <BaseSpacer/>
      <BaseTitle id="services" title="AI-Powered Business Optimization"/>
      <section className="base-padding !py-0 flex flex-col items-end">
        <motion.div className="w-2/3 tablet:w-5/6 sm:w-full">
          {
            Object.entries(servicesCards).slice(0, 9).map(entry => (
              <ServicesCollapsible
                openedId={openedService}
                onOpenClick={setOpenedService}
                name={entry[0]}
                content={entry[1]}
                key={entry[0]}
              />
            ))
          }
          <AnimatePresence>
            {
              isOpenServices && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={{opacity: 0, height: 0}}
                  transition={{duration: .2}}
                >
                  {
                    Object.entries(servicesCards).slice(9).map(entry => (
                      <ServicesCollapsible
                        openedId={openedService}
                        onOpenClick={setOpenedService}
                        name={entry[0]}
                        content={entry[1]}
                        key={entry[0]}
                      />
                    ))
                  }
                </motion.div>
              )
            }
          </AnimatePresence>
          <ShowMoreBtn
            isOpen={isOpenServices}
            onClick={() => setIsOpenServices(!isOpenServices)}
          />
        </motion.div>
      </section>
      <BaseSpacer/>
      <section className="px-10 sm:px-0">
        <BaseBanner/>
      </section>
      <div className="sm:hidden">
        <BaseSpacer/>
      </div>
      <BaseTitle id="workflow" title="Workflow"/>
      <section className="base-padding overflow-x-hidden flex flex-col items-center space-y-3 overflow-x-auto max-h-[500px]">
        {
          workflowCards.map((card, i) => (
            <div id={card.id} key={card.id} className="flex items-center w-[740px]">
              <div className="h-[75px] w-[75px] border border-grey-600 mr-5 grid place-items-center rounded-md">
                {`${i + 1}/${workflowCards.length}`}
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-body">{card.title}</div>
                {
                  card?.list && (
                    <ul>
                      {
                        card.list.map((item, i) => (
                          <li key={i} className="list-disc text-callout list-inside">
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </div>
            </div>
          ))
        }
      </section>
      <BookMeetingBtn/>
    </BaseLayout>
  )
}
