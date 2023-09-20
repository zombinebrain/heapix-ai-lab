import BaseTitle from "@components/ui/BaseTitle";
import IconCancel from "@icons/IconCancel";
import Socials from "@components/ui/Socials";
import Modal from "@components/ui/BaseModal";
import AvatarWithName from "@components/ui/AvatarWithName";
import BookMeetingBtn from "@components/ui/BookMeetingBtn";
import {ContactModalProps,} from "../../models/contact";
import ContactForm from "@components/contact/ContactForm";

const ContactModal = ({onClose}: ContactModalProps) => {
  return (
    <Modal>
      <div className="h-full flex flex-col">
        <BaseTitle
          title="Contact us"
          additionalContent={
            <button
              onClick={onClose}
              className="h-14 w-14 md:h-12.5 md:w-12.5 tablet:h-10 tablet:w-10 sm:w-7.5 sm:h-7.5"
            >
              <IconCancel/>
            </button>
          }
        />
        <BookMeetingBtn/>
        <div className="grid grid-cols-12 tablet:grid-cols-6 sm:grid-cols-3 flex-auto">
          <ContactForm/>
          <div
            className="base-padding sm:!pb-10 border-l border-t border-grey-800 text-callout col-span-7 tablet:col-span-full flex flex-col justify-between"
          >
            <div className="flex flex-wrap justify-between items-center sm:flex-col sm:items-start">
              <div className="sm:mb-4">
                <AvatarWithName/>
              </div>
              <div className="text-grey-400 md:order-3 tablet:order-2 md:w-2/3 tablet:w-fit md:mt-7.5 tablet:mt-0">
                contact@heapix.com
              </div>
              <div className="tablet:order-3 sm:my-10">
                <Socials/>
              </div>
            </div>
            <div
              className="flex space-x-12.5 items-center sm:flex-col sm:items-start sm:space-x-0 sm:space-y-4 sm:w-2/3 mr-14 tablet:mt-4">
              <div className="">
                <div>HQ</div>
                <div className="text-grey-400">
                  2680 N 1st St #200, San Jose, CA 95134, United States
                </div>
              </div>
              <div className="">
                <div>Europe Poland Dev</div>
                <div className="text-grey-400">
                  Warsaw, 02-672, Domaniewska 17/19, office 133
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
