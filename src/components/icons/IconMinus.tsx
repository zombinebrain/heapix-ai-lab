type IconMinusProps = {
  className?: string
}

const IconMinus = ({
  className = '',
}: IconMinusProps) => {
  return (
    <svg className={`stroke-white ${className}`} width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12.5L3 12.5" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default IconMinus;
