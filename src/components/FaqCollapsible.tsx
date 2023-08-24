import BaseCollapsible from "@components/ui/BaseCollapsible";
import {ReactNode} from "react";

type FaqCollapsibleProps = {
  title: string,
  content: ReactNode,
  onOpenClick: (val: string | null) => void,
  openedId: string | null,
  id: string
};

const FaqCollapsible = ({
  id,
  title,
  openedId,
  content,
  onOpenClick
}: FaqCollapsibleProps) => {

  return (
    <div className="border-t border-grey-800 w-full child:w-1/2 child:tablet:w-2/3 child:sm:w-full flex justify-end">
      <BaseCollapsible
        openedId={openedId}
        onOpenClick={onOpenClick}
        key={id}
        name={title}
        content={content}
      />
    </div>
  );
};

export default FaqCollapsible;
