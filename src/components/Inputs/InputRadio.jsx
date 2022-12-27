const InputRadio = (props) => {
  return (
    <div className='flex items-center gap-4'>
      <input
        type='radio'
        id={props.labelText}
        name={props.name}
        className='hidden peer'
      />
      <label
        htmlFor={props.labelText}
        className='text-xl flex gap-4 items-center peer-checked:[&>div>div]:inline-block'
      >
        <div className='w-6 h-6 rounded-[50%] border border-black relative group-hover:bg-red'>
          <div
            className={`hidden w-4 h-4 rounded-[50%] bg-black absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2`}
          ></div>
        </div>
        {props.labelText}
      </label>
    </div>
  );
};

export default InputRadio;
