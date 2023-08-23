import BaseCollapsible from "@components/ui/BaseCollapsible";

type FaqCollapsibleProps = {
  title: string,
  text: string,
  onOpenClick: (val: string | null) => void,
  openedId: string | null,
  id: string
};

const FaqCollapsible = ({
  id,
  title,
  openedId,
  text,
  onOpenClick
}: FaqCollapsibleProps) => {

  return (
    <div className="border-t border-grey-800 w-full child:w-1/2 child:tablet:w-2/3 child:sm:w-full flex justify-end">
      <BaseCollapsible
        openedId={openedId}
        onOpenClick={onOpenClick}
        key={id}
        name={title}
        content={<p className="text-callout">{text}</p>}
      />
    </div>
  );
};

export default FaqCollapsible;
