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
import {
  useScroll,
  useTransform,
  motion, cubicBezier, useMotionValue,
} from "framer-motion";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";
import {useRef} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const AboutUsSection = () => {
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
  const { scrollYProgress } = useScroll();
  const { currentBreakpoint } = useGetCurrentBreakpoint();

  const isMobile = currentBreakpoint === 'sm';

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["100%", "-220%"] : ["100%", "-110%"]
  );

  return (
    <>
      <motion.section
        id="about"
        className="overflow-hidden text-title base-padding base-vertical-grid gap-y-7.5 sm:flex sm:flex-col"
      >
        <Paragraph
          text="At  HEAPIX, we are AI experts specialising in large language and diffusion models."
          className="col-span-4 tablet:col-span-3"
          margin={isMobile ? '-155px 0px -55px' : '-200px 0px -100px'}
        />
        <Paragraph
          text="We harness the power of OpenAI's GPT-3.5, GPT-4, LLaMa 2, Stable Diffusion, Claude, and Falcon, utilising Python, LangChain, HuggingFace, and Pinecone's vector databases."
          className="row-start-2 col-start-5 col-span-full tablet:col-start-2"
          margin={isMobile ? '-55px 0px -55px' : '-100px 0px -250px'}
        />
        <motion.div
          style={{ x }}
          className="col-span-full flex space-x-5 sm:space-x-1.5"
        >
          {
            icons.map((icon, i) => (
              <div key={i} className="min-w-[12vw] max-w-[12vw] min-h-[12vw] max-h-[12vw] sm:min-w-[14vw] sm:max-w-[14vw] sm:min-h-[14vw] sm:max-h-[14vw] p-[3vw] border border-grey-600 rounded-full">
                { icon }
              </div>
            ))
          }
        </motion.div>
        <Paragraph
          text="We transform data into insights, optimising processes for smarter and informed decisions."
          className="text-grey-400 col-span-8 tablet:col-span-full"
          margin={isMobile ? '-55px 0px -55px' : '0px 0px -200px'}
        />
      </motion.section>
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
    <motion.p
      viewport={{ once: false, amount: "all", margin }}
      variants={textVariants}
      initial="unfocused"
      whileInView="focused"
      className={className}
    >
      { text }
    </motion.p>
  );
};
