const LayoutBody = (props) => {
  return (
    <div className='w-full'>
      <div className='flex items-start justify-between mt-5'>
        <div>{props.children}</div>
        <img src='src/assets/images/scan2.png' alt='couple' />
      </div>
    </div>
  );
};

export default LayoutBody;
