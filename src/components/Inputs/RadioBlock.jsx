const RadioBlock = (props) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='font-bold text-[1.374rem]'>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default RadioBlock;
