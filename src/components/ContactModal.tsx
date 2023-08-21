import BaseTitle from "@components/ui/BaseTitle";
import IconCancel from "@icons/IconCancel";
import BaseSpacer from "@components/ui/BaseSpacer";
import Socials from "@components/ui/Socials";
import Modal from "@components/ui/BaseModal";
import {FormEvent, useState} from "react";
import BaseInput from "@components/ui/BaseInput";
import AvatarWithName from "@components/ui/AvatarWithName";
import BookMeetingBtn from "@components/ui/BookMeetingBtn";

type ContactModalProps = {
  onClose: () => void;
}

interface FormDataType {
  name: string,
  email: string,
  message: string
}

interface inputFieldsType {
  label: string,
  id: string,
  type?: string,
  isTextArea?: boolean
}

const initialFormData = Object.freeze({
  name: '',
  email: '',
  message: ''
});

const inputFields = Object.freeze<inputFieldsType[]>([
  {
    label: 'Name',
    id: 'name'
  },
  {
    label: 'Email',
    id: 'email',
    type: 'email'
  },
  {
    label: 'Message',
    id: 'message',
    isTextArea: true
  }
]);

const ContactModal = ({
  onClose
}: ContactModalProps) => {
  const [formData, setFormData] = useState<FormDataType>({...initialFormData});

  const sendRequest = async (e: FormEvent) => {
    e.preventDefault();
    await console.log({...formData});
  };

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
        <BookMeetingBtn />
        <div className="grid grid-cols-12 tablet:grid-cols-6 sm:grid-cols-3 flex-auto">
          <form
            onSubmit={sendRequest}
            className="flex flex-col text-body col-span-5 tablet:col-span-full border-t border-grey-800"
          >
            {
              inputFields.map(field => (
                  <BaseInput
                    key={field.id}
                    value={formData[field.id]}
                    onChange={(val) => setFormData({
                      ...formData,
                      [field.id]: val
                    })}
                    label={field.label}
                    id={field.id}
                    type={field.type}
                    isTextArea={field.isTextArea}
                  />
                )
              )
            }
            <button
              type="submit"
              className="flex-1 group w-full px-11 py-6 sm:px-10 sm:py-5 flex flex-col items-center justify-center hover:bg-lemon"
            >
              <div className="pb-1 border-b-2 border-lemon group-hover:text-black group-hover:border-black">Send
                Request
              </div>
            </button>
          </form>
          <div
            className="base-padding sm:!pb-10 border-l border-t border-grey-800 text-callout col-span-7 tablet:col-span-full flex flex-col justify-between"
          >
            <div className="flex flex-wrap justify-between items-center sm:flex-col sm:items-start">
              <div className="sm:mb-4">
                <AvatarWithName />
              </div>
              <div className="text-grey-400 md:order-3 tablet:order-2 md:w-2/3 tablet:w-fit md:mt-7.5 tablet:mt-0">
                <div>contact@heapix.com</div>
                <div>BY +375 (44) 763-19-32</div>
              </div>
              <div className="tablet:order-3 sm:my-10">
                <Socials/>
              </div>
            </div>
            <div
              className="flex space-x-12.5 items-center sm:flex-col sm:items-start sm:space-x-0 sm:space-y-4 sm:w-2/3">
              <div className="">
                <div>HQ</div>
                <div className="text-grey-400">
                  2680 N 1st St #200, San Jose, CA 95134, United States
                </div>
              </div>
              <div className="">
                <div>Europe Belarus</div>
                <div className="text-grey-400">
                  Minsk, 220015, 35a Ponomarenko str., office 701
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
