import IconPlatformOpenAI from "@icons/IconPlatformOpenAI";
import IconPlatformMeta from "@icons/IconPlatformMeta";
import IconPlatformPinecone from "@icons/IconPlatformPinecone";
import IconPlatformPython from "@icons/IconPlatformPython";
import IconPlatformAllenNLP from "@icons/IconPlatformAllenNLP";
import IconPlatformFalcon from "@icons/IconPlatformFalcon";
import IconPlatformTensorflow from "@icons/IconPlatformTensorflow";
import IconPlatformPyTorch from "@icons/IconPlatformPyTorch";
import IconPlatformKeras from "@icons/IconPlatformKeras";
import IconPlatformClaude from "@icons/IconPlatformClaude";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValue,
  useVelocity,
  wrap,
  useAnimationFrame
} from "framer-motion";
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";

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
  const moveX = useTransform(scrollYProgress, [0, 1], ["170%", "-170%"])

  return (
    <>
      <section id="about" className="overflow-hidden text-title base-padding base-vertical-grid gap-y-7.5 sm:flex sm:flex-col">
        <p className="text-grey-400 col-span-4 tablet:col-span-3">
          At  HEAPIX, we are AI experts specialising in large language and diffusion models.
        </p>
        <p className="row-start-2 col-start-5 col-span-full tablet:col-start-2">
          We harness the power of OpenAI's GPT-3.5, GPT-4, LLaMa 2, Stable Diffusion, Claude, and Falcon, utilising Python, LangChain, HuggingFace, and Pinecone's vector databases.
        </p>
        <motion.div
          style={{ x: moveX }}
          className="col-span-full flex space-x-5 sm:space-x-1.5"
        >
          {
            icons.map((icon, i) => (
              <div key={i} className="min-w-[14vw] max-w-[14vw] min-h-[14vw] max-h-[14vw] p-[5vw] sm:p-[3vw] border border-grey-600 rounded-full">
                { icon }
              </div>
            ))
          }
        </motion.div>
        <p className="text-grey-400 col-span-8 tablet:col-span-full">
          We transform data into insights, optimising processes for smarter and informed decisions.
        </p>
      </section>
      {/*<div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />*/}
    </>
  );
};

export default AboutUsSection;
