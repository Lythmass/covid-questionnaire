import { useState } from 'react';

const Date = (props) => {
  const [isDate, setIsDate] = useState(props.type);

  const focusHandler = () => {
    setIsDate('date');
  };

  return (
    <>
      <input
        onFocus={focusHandler}
        {...props.methods.register(props.name, props.validateDate)}
        name={props.name}
        type={isDate}
        id={props.name}
        placeholder={props.placeholder}
        className='w-[31.25rem] h-[3.125rem] px-5 border-[0.8px] border-neutral-800 placeholder-neutral-800 bg-gray-200'
      />
      <p className='text-orange-600'>
        {props.methods.formState.errors[props.name]?.message}
      </p>
    </>
  );
};

export default Date;
