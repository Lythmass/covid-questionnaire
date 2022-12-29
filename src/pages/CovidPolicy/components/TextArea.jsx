const TextArea = (props) => {
  return (
    <div className='flex flex-col gap-5 mb-4'>
      <label className='text-[1.375rem] font-bold' htmlFor={props.id}>
        {props.text}
      </label>
      <textarea
        id={props.id}
        className='w-full h-48 resize-none p-4 text-lg bg-gray-200 border border-black'
      />
    </div>
  );
};

export default TextArea;
