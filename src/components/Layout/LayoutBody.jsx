import { Link } from 'react-router-dom';

const LayoutBody = (props) => {
  return (
    <div className='w-full font-bpg'>
      <div className='flex items-start justify-between mt-5'>
        <div>{props.children}</div>
        <img src='src/assets/images/scan2.png' alt='couple' />
      </div>
      <div className='w-full flex justify-center'>
        {props.canProceed && (
          <button type='submit'>
            <Link to='/covid-state'>
              <img
                src='src/assets/images/next.png'
                className='w-4'
                alt='next'
              />
            </Link>
          </button>
        )}
        {!props.canProceed && (
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
