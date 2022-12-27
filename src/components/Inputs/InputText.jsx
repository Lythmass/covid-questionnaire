import { useFormContext } from 'react-hook-form';

const InputText = (props) => {
  const methods = useFormContext({ mode: 'all' });

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
      value: /^[ა-ჰ]+$/,
      message: `${props.displayName.substr(
        0,
        props.displayName.length - 2
      )}ის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`,
    },
  };

  return (
    <div className='flex flex-col gap-3'>
      <label className='font-bold text-[1.375rem]' htmlFor={props.name}>
        {props.displayName}
      </label>
      {props.type === 'mail' && (
        <>
          <input
            {...methods.register(props.name, validateEmail)}
            name={props.name}
            type={props.type}
            id={props.name}
            placeholder={props.placeholder}
            className='w-[31.25rem] h-[3.125rem] px-5 border-[0.8px] border-neutral-800 placeholder-neutral-800 bg-gray-200'
          />
          <p className='text-orange-600'>
            {methods.formState.errors[props.name]?.message}
          </p>
        </>
      )}
      {props.type === 'text' && (
        <>
          <input
            {...methods.register(props.name, validateText)}
            name={props.name}
            type={props.type}
            id={props.name}
            placeholder={props.placeholder}
            className='w-[31.25rem] h-[3.125rem] px-5 border-[0.8px] border-neutral-800 placeholder-neutral-800 bg-gray-200'
          />
          <p className='text-orange-600'>
            {methods.formState.errors[props.name]?.message}
          </p>
        </>
      )}
    </div>
  );
};

export default InputText;
