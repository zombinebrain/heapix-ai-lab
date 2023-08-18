const IconPlus = ({
  className,
}) => {
  return (
    <svg className={`stroke-white ${className}`} width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 1V20" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10.5L1 10.5" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default IconPlus;
