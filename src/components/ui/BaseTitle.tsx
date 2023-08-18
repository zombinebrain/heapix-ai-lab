import { ReactNode } from 'react';

type BaseTitleType = {
  title: string;
  additionalContent?: ReactNode;
  id?: string;
}

const BaseTitle = ({
  id,
  title,
  additionalContent
}: BaseTitleType) => {
  return (
    <div id={id} className="base-padding flex justify-between items-center">
      <h2>{ title }</h2>
      { additionalContent }
    </div>
  );
};

export default BaseTitle;
