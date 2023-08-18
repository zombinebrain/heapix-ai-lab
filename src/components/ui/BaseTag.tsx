type BaseTagProps = {
  text: string,
  className?: string
};

const BaseTag = ({
  text,
  className = ""
}: BaseTagProps) => {
  return (
    <div className={`${className} w-fit text-callout rounded-2xl border border-grey-600 px-7.5 py-4.5 tablet:px-6 tablet:py-4 sm:px-5 sm:py-4`}>
      { text }
    </div>
  );
};

export default BaseTag;
