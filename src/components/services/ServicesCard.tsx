import {motion} from "framer-motion";

const ServicesCard = ({
  className,
  title,
  onClick
}) => {
  return (
    <motion.div
      initial={{opacity: 0, height: 0}}
      animate={{opacity: 1, height: 'auto'}}
      exit={{opacity: 0, height: 0}}
      transition={{duration: .2}}
      onClick={onClick}
      className={`group cursor-pointer flex flex-col ${className}`}
    >
      <div className="bg-grey-800 rounded aspect-[4/3] mb-2.5 w-full"/>
      <div className="text-body group-hover:text-lemon transition-colors duration-300">
        {title}
      </div>
    </motion.div>
  );
};

export default ServicesCard;
