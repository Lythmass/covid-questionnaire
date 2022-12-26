const InputText = (props) => {
  return (
    <div className='flex flex-col gap-3'>
      <label className='font-bold text-[1.375rem]' htmlFor={props.name}>
        {props.name}
      </label>
      <input
        name={props.name}
        type='text'
        id={props.name}
        placeholder={props.placeholder}
        className='w-[31.25rem] h-[3.125rem] px-5 border-[0.8px] border-neutral-800 placeholder-neutral-800 bg-gray-200'
      />
    </div>
  );
};

export default InputText;
