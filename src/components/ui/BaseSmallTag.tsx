type BaseSmallTagProps = {
 text: string
}

const BaseSmallTag = ({text}: BaseSmallTagProps) => {
  return (
    <div className="p-2 pr-4 border border-grey-600 rounded-full flex items-center text-callout">
      <div className="rounded-full max-w-6 max-h-6 w-6 h-6 bg-grey-600 mr-1.5"></div>
      <div>{text}</div>
    </div>
  );
};

export default BaseSmallTag;
