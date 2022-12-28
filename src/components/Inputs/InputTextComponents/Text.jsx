const Text = (props) => {
  return (
    <>
      <input
        {...props.methods.register(props.name, props.validateText)}
        name={props.name}
        type={props.type}
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

export default Text;