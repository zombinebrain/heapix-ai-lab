type BenefitProps = {
  title: string,
  text: string
};

const Benefit = ({
  title,
  text
}:BenefitProps) => {
  return (
    <div className="flex flex-col py-5 sm:py-3.75">
      <div className="mb-3 tablet:mb-2 text-body">{title}</div>
      <p className="text-callout">{text}</p>
    </div>
  );
};

export default Benefit;
