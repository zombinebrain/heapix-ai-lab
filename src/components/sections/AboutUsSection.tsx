import IconPlatformOpenAI from "@icons/platform/IconPlatformOpenAI";
import IconPlatformMeta from "@icons/platform/IconPlatformMeta";
import IconPlatformPinecone from "@icons/platform/IconPlatformPinecone";
import IconPlatformPython from "@icons/platform/IconPlatformPython";
import IconPlatformAllenNLP from "@icons/platform/IconPlatformAllenNLP";
import IconPlatformFalcon from "@icons/platform/IconPlatformFalcon";
import IconPlatformTensorflow from "@icons/platform/IconPlatformTensorflow";
import IconPlatformPyTorch from "@icons/platform/IconPlatformPyTorch";
import IconPlatformKeras from "@icons/platform/IconPlatformKeras";
import IconPlatformClaude from "@icons/platform/IconPlatformClaude";
import {useScroll, useTransform, m} from "framer-motion";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";
import {useEffect, useRef, useState} from "react";
import {useElementViewportPosition} from "../../hooks/useElementViewportPosition";

const icons = [
  <IconPlatformOpenAI />,
  <IconPlatformMeta />,
  <IconPlatformPinecone />,
  <IconPlatformPython />,
  <IconPlatformClaude />,
  <IconPlatformFalcon />,
  <IconPlatformTensorflow />,
  <IconPlatformPyTorch />,
  <IconPlatformAllenNLP />,
  <IconPlatformKeras />
];

const AboutUsSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [iconWidth, setIconWidth]  = useState(0);
  const [iconsOnScreen, setIconsOnScreen] = useState(0);
  const { position } = useElementViewportPosition(wrapperRef);
  const { scrollYProgress } = useScroll();
  const { isMobileBreakpoint, dimensions } = useGetCurrentBreakpoint();

  const mobileSpaceBetweenIcons = isMobileBreakpoint ? 6 : 20;

  useEffect(() => {
    if (!wrapperRef || !wrapperRef.current) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const icon = document.getElementById('icon-0');
    setIconWidth(icon ? icon.offsetWidth : 0);
    const wrapperWidth = wrapperRef.current!.offsetWidth;
    const computedStyle = getComputedStyle(wrapperRef.current!);
    const paddingX = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    const wrapperWidthWithoutPadding = wrapperWidth - paddingX - scrollbarWidth;
    setIconsOnScreen(wrapperWidthWithoutPadding / (iconWidth + mobileSpaceBetweenIcons));
  }, [position, iconWidth, iconsOnScreen, dimensions.width, wrapperRef]);

  const x = useTransform(
    scrollYProgress,
    position,
    [0, -(iconWidth * (10 - iconsOnScreen) + mobileSpaceBetweenIcons * (9 - iconsOnScreen))],
    { clamp: true }
  );

  return (
    <>
      <m.section
        id="about"
        ref={wrapperRef}
        className="overflow-hidden text-title base-padding base-vertical-grid gap-y-7.5 sm:flex sm:flex-col"
      >
        <Paragraph
          text="At  HEAPIX, we are AI experts specialising in large language and diffusion models."
          className="col-span-4 tablet:col-span-3"
          margin={isMobileBreakpoint ? '-155px 0px -55px' : '-200px 0px -100px'}
        />
        <Paragraph
          text="We harness the power of OpenAI's GPT-3.5, GPT-4, LLaMa 2, Stable Diffusion, Claude, and Falcon, utilising Python, LangChain, HuggingFace, and Pinecone's vector databases."
          className="row-start-2 col-start-5 col-span-full tablet:col-start-2"
          margin={isMobileBreakpoint ? '-55px 0px -55px' : '-100px 0px -250px'}
        />
        <m.div
          style={{ x }}
          className="col-span-full flex space-x-5 sm:space-x-1.5"
        >
          {
            icons.map((icon, i) => (
              <div id={`icon-${i}`} key={i} className="min-w-[12vw] max-w-[12vw] min-h-[12vw] max-h-[12vw] sm:min-w-[14vw] sm:max-w-[14vw] sm:min-h-[14vw] sm:max-h-[14vw] p-[3vw] border border-grey-600 rounded-full">
                { icon }
              </div>
            ))
          }
        </m.div>
        <Paragraph
          text="We transform data into insights, optimising processes for smarter and informed decisions."
          className="text-grey-400 col-span-8 tablet:col-span-full"
          margin={isMobileBreakpoint ? '-55px 0px -55px' : '0px 0px -200px'}
        />
      </m.section>
    </>
  );
};

export default AboutUsSection;

type ParagraphProps = {
  className: string,
  text: string,
  margin: string
};

const textVariants = {
  focused: { color: '#FFFFFF', transition: { duration: .1 } },
  unfocused: { color: '#82858C' }
};

const Paragraph = ({ className = '', text = '', margin }: ParagraphProps) => {
  return (
    <m.p
      viewport={{ once: false, amount: "all", margin }}
      variants={textVariants}
      initial="unfocused"
      whileInView="focused"
      className={className}
    >
      { text }
    </m.p>
  );
};
