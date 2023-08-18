import BaseSmallTag from "@components/ui/BaseSmallTag";
import BaseCollapsible from "@components/ui/BaseCollapsible";
import {TechnologiesType} from "../models/services";
import {useState} from "react";

type ServicesCollapsibleProps = {
  name: string,
  content: {
    technologies: Array<TechnologiesType>,
    tags: string[]
  },
  onOpenClick: (val: string | null) => void,
  openedId: string | null
};

const ServicesCollapsible = ({
  name,
  content,
  onOpenClick,
  openedId
}: ServicesCollapsibleProps) => {

  return (
    <BaseCollapsible
      openedId={openedId}
      onOpenClick={onOpenClick}
      key={name}
      name={name}
      content={
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="flex py-5 sm:py-3.75 space-x-2.5 w-max">
              {
                content.tags.map(tag => (
                  <BaseSmallTag text={tag} key={tag}/>
                ))
              }
            </div>
          </div>
          {
            content.technologies.map(card => (
              <div className="overflow-hidden flex flex-col py-5 sm:py-3.75" key={card.title}>
                <div className="text-body">{card.title}</div>
                <p className="text-callout">{card.text}</p>
              </div>
            ))
          }
        </div>
      }
    />
  );
};

export default ServicesCollapsible;
