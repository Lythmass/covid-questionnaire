const LayoutHeader = (props) => {
  return (
    <div className='flex justify-between w-full items-center'>
      <img className='w-36' src='src/assets/images/logo-text.png' alt='logo' />
      <h1 className='font-bold text-[2.5rem] font-anonymousPro'>
        {props.page}/4
      </h1>
    </div>
  );
};

export default LayoutHeader;
