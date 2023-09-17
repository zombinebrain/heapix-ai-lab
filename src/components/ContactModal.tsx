import BaseTitle from "@components/ui/BaseTitle";
import IconCancel from "@icons/IconCancel";
import Socials from "@components/ui/Socials";
import Modal from "@components/ui/BaseModal";
import {ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import BaseInput from "@components/ui/BaseInput";
import AvatarWithName from "@components/ui/AvatarWithName";
import BookMeetingBtn from "@components/ui/BookMeetingBtn";
import ReCAPTCHA from "react-google-recaptcha";
import {isRequired, isValidEmail, validator} from "../utils/validate";
import {
  AlertStatusType,
  ContactModalProps,
  FormDataType,
  InputFieldsRulesType,
  inputFieldsType
} from "../models/contact";

const initialFormData = Object.freeze({
  name: '',
  email: '',
  message: ''
});

const inputFieldsRules = {
  name: [(v: string) => isRequired(v)],
  email: [(v: string) => isRequired(v), (v: string) => isValidEmail(v)],
  message: [(v: string) => isRequired(v)]
} as InputFieldsRulesType;

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

const ContactModal = ({onClose}: ContactModalProps) => {
  const [formData, setFormData] = useState<FormDataType>({...initialFormData});
  const [formDataErrors, setFormDataErrors] = useState({
    name: [],
    email: [],
    message: []
  });
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [alertStatus, setAlertStatus] = useState<AlertStatusType>(null);

  const isErrorField = (id: string) => !!formDataErrors[id as keyof typeof formDataErrors].length;
  //const isErrorForm = Object.values(formDataErrors).some((value: Array<ValidationError>) => !!value.length);

  const validate = () => {
    let isError = false;
    Object.keys(formData).forEach(key => {
      const res = Array.from(validator(
        formData[key as keyof FormDataType],
        inputFieldsRules[key as keyof InputFieldsRulesType])
      );
      if (!isError) {
        isError = !!res.length;
      }
      setFormDataErrors(prevState => ({
        ...prevState,
        [key]: res
      }));
    });
    return isError;
  };

  const handleSubmit = (e: FormEvent | KeyboardEvent) => {
    e.preventDefault();
    const isError = validate();
    if (!isError) {
      recaptchaRef.current?.execute();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.target;
    setFormDataErrors(prevState => ({
      ...prevState,
      [id]: []
    }));
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }))
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const postData = async (data: FormDataType) => {
    const response = await fetch(
      'https://api.apispreadsheets.com/data/f4uIgbPTbhTrt24L/',
      {
        method: 'post',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...data, date: new Date()})
      }
    );
    if (response.status > 400 && response.status < 600) {
      throw new Error();
    }
  }

  const onReCAPTCHAChange = async (captchaCode: string | null) => {
    if (!captchaCode) return;
    try {
      await postData(formData);
      setAlertStatus('SUCCESS');
    } catch {
      setAlertStatus('FAILED');
    }
    setFormData({...initialFormData});
    recaptchaRef.current?.reset();
  };

  useEffect(() => {
    if (!!alertStatus) {
      const timeout = setTimeout(() => setAlertStatus(null), 2500);
      return () => clearTimeout(timeout);
    }
  }, [alertStatus]);

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
            noValidate
            onSubmit={handleSubmit}
            className="relative flex flex-col text-body col-span-5 tablet:col-span-full border-t border-grey-800"
          >
            {
              inputFields.map(field => (
                  <BaseInput
                    key={field.id}
                    value={formData[field.id as keyof FormDataType]}
                    onChange={handleChange}
                    label={field.label}
                    id={field.id}
                    isError={isErrorField(field.id)}
                    type={field.type!}
                    isTextArea={field.isTextArea!}
                    onKeyDown={handleKeyDown}
                    required
                  />
                )
              )
            }
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={onReCAPTCHAChange}
            />
            <button
              type="submit"
              className="flex-1 group w-full px-11 py-6 sm:px-10 sm:py-5 flex flex-col items-center justify-center hover:bg-lemon"
            >
              {
                !!alertStatus ? (
                  <p className="text-body group-hover:text-black">
                    {alertStatus === 'SUCCESS'
                      ? 'Successfully sent!'
                      : 'Something went wrong... Try again'
                    }
                  </p>
                ) : (
                  <div
                    className="pb-1 border-b-2 border-lemon group-hover:text-black group-hover:border-black"
                  >
                    Send Request
                  </div>
                )
              }
            </button>
          </form>
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
