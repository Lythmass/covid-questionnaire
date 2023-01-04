import { useFormContext } from 'react-hook-form';
import { Mail, Text, Num, Date } from '@/components';

const InputText = (props) => {
  const methods = useFormContext({ mode: 'all' });

  const validateNumber = {
    pattern: {
      value: /^\d+$/,
      message: 'გთხოვთ მიუთითოთ რიცხვი',
    },
  };

  const validateDate = {
    required: 'გთხოვთ აირჩიოთ თარიღი',
  };

  const validateEmail = {
    required: 'გთხოვთ შეავსეთ ველი',
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/,
      message: 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (hah@redberry.ge)',
    },
  };

  const validateText = {
    required: 'გთხოვთ შეავსეთ ველი',

    minLength: {
      value: 2,
      message: `${props.displayName.substr(
        0,
        props.displayName.length - 2
      )}ის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან`,
    },

    maxLength: {
      value: 255,
      message: `${props.displayName.substr(
        0,
        props.displayName.length - 2
      )}ის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან`,
    },

    pattern: {
      value: /^[A-z-ა-ჰ]+$/,
      message: `${props.displayName.substr(
        0,
        props.displayName.length - 2
      )}ის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`,
    },
  };

  return (
    <div className='flex flex-col gap-3'>
      <label className='font-bold text-[1.375rem] w-3/4' htmlFor={props.name}>
        {props.displayName}
      </label>
      {props.type === 'mail' && (
        <Mail
          name={props.name}
          type={props.type}
          id={props.name}
          placeholder={props.placeholder}
          methods={methods}
          validateEmail={validateEmail}
        />
      )}
      {props.type === 'text' && (
        <Text
          name={props.name}
          type={props.type}
          id={props.name}
          placeholder={props.placeholder}
          methods={methods}
          validateText={validateText}
        />
      )}
      {props.type === 'num' && (
        <Num
          name={props.name}
          type={props.type}
          id={props.name}
          placeholder={props.placeholder}
          methods={methods}
          validateNumber={validateNumber}
        />
      )}
      {props.type === 'temporary-text' && (
        <Date
          name={props.name}
          type={props.type}
          id={props.name}
          placeholder={props.placeholder}
          methods={methods}
          validateDate={validateDate}
        />
      )}
    </div>
  );
};

export default InputText;
