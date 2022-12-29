import { Link } from 'react-router-dom';

const LayoutBody = (props) => {
  return (
    <div className='w-full font-bpg'>
      <div className='flex items-start justify-between mt-5'>
        <div>{props.children}</div>
        <img
          className='max-h-[39rem]'
          src={`src/assets/images/${props.image}.png`}
          alt='covid'
        />
      </div>
      <div className='w-full flex justify-center gap-32'>
        {props.image !== 'scan2' && (
          <button type='submit'>
            <Link to={`/${props.prevPage}`}>
              <img
                src='src/assets/images/next.png'
                className='w-4 rotate-180'
                alt='next'
              />
            </Link>
          </button>
        )}
        {props.canProceed && props.image !== 'bike2' && (
          <button type='submit'>
            <Link to={`/${props.nextPage}`}>
              <img
                src='src/assets/images/next.png'
                className='w-4'
                alt='next'
              />
            </Link>
          </button>
        )}
        {!props.canProceed && props.image !== 'bike2' && (
          <button type='submit' disabled>
            <img
              src='src/assets/images/next-blocked.png'
              className='w-4'
              alt='next'
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default LayoutBody;
