import BaseInput from "@components/ui/BaseInput";
import {AlertStatusType, FormDataType, InputFieldsRulesType, inputFieldsType} from "../../models/contact";
import {ChangeEvent, FormEvent, KeyboardEvent, MouseEvent, useRef, useState} from "react";
import {isRequired, isValidEmail, maxLength, ValidationError, validator} from "../../utils/validate";
import ReCAPTCHA from "react-google-recaptcha";
import BaseAlert, {BaseAlertProps} from "@components/ui/BaseAlert";
import {AnimatePresence} from "framer-motion";

const initialFormData = Object.freeze({
  name: '',
  email: '',
  message: ''
});

const inputFieldsRules = {
  name: [(v: string) => isRequired(v), maxLength(70)],
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

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({...initialFormData});
  const [formDataErrors, setFormDataErrors] = useState({
    name: [],
    email: [],
    message: []
  });
  const [alertStatus, setAlertStatus] = useState<AlertStatusType>(null);
  const [isAlert, setIsAlert] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

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

  const postData = async (data: FormDataType) => {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
      throw new Error('Timeout');
    }, 5000);

    const response = await fetch(
      'https://api.apispreadsheets.com/data/f4uIgbPTbhTrt24L/',
      {
        signal: controller.signal,
        method: 'post',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...data, date: new Date()})
      }
    ).finally(() => {
      clearTimeout(timeout);
    });
    if (response.status > 400 && response.status < 600) {
      throw new Error();
    }
  }

  const onReCAPTCHAChange = async (captchaCode: string | null) => {
    if (!captchaCode) return;
    try {
      await postData(formData);
      setAlertStatus('SUCCESS');
      setFormData({...initialFormData});
    } catch (e) {
      setAlertStatus('FAILED');
      return e;
    } finally {
      setIsAlert(true);
    }
    recaptchaRef.current?.reset();
  };

  const handleSubmit = (e: FormEvent | KeyboardEvent | MouseEvent) => {
    e.preventDefault();
    const isError = validate();
    if (!isError) {
      recaptchaRef.current?.execute();
    }
  };

  const isErrorField = (id: string) => !!formDataErrors[id as keyof typeof formDataErrors].length;
  const isErrorForm = Object.values(formDataErrors).some((value: Array<ValidationError>) => !!value.length);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, id} = e.target;
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

  const handleAlertClose = () => {
    setIsAlert(false);
  };

  const alertVariants: { [K in 'SUCCESS' | 'FAILED']: BaseAlertProps } = {
    SUCCESS: {
      title: 'MESSAGE SENT!',
      description: 'Thanks for your request. We\'ve received your info and are processing it. We\'ll reply soon.',
      specialBtnText: 'Close',
      onSpecialClick: handleAlertClose
    },
    FAILED: {
      title: 'SOMETHING WENT WRONG!',
      description: 'We couldn\'t determine the reason. Please try again later.',
      specialBtnText: 'Try again',
      onSpecialClick: (e: MouseEvent) => {
        handleSubmit(e);
        handleAlertClose();
      },
      onClose: handleAlertClose
    }
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="relative flex flex-col text-body col-span-5 tablet:col-span-full border-t border-grey-800"
      >
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={onReCAPTCHAChange}
          className="hidden"
        />
        {
          inputFields.map(field => (
              <BaseInput
                key={field.id}
                value={formData[field.id as keyof FormDataType]}
                onChange={handleChange}
                label={field.label}
                id={field.id}
                isError={isErrorField(field.id)}
                errorText={formDataErrors[field.id as keyof FormDataType][0]}
                type={field.type!}
                isTextArea={field.isTextArea!}
                onKeyDown={handleKeyDown}
                required
              />
            )
          )
        }
        <button
          disabled={isErrorForm}
          type="submit"
          className="flex-1 group w-full px-11 py-6 sm:px-10 sm:py-5 flex flex-col items-center justify-center hover:bg-lemon disabled:text-grey-400 disabled:pointer-events-none "
        >
          <div
            className="pb-1 border-b-2 border-lemon group-disabled:border-none group-hover:text-black group-hover:border-black">
            Send Request
          </div>
        </button>
      </form>
      <AnimatePresence>
        {
          isAlert && alertStatus && (
            <BaseAlert {...alertVariants[alertStatus]} key="alert" />
          )
        }
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
