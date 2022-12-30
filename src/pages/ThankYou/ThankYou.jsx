import { SendDataContext } from '@/state';
import { useContext, useEffect } from 'react';

const ThankYou = () => {
  const data = useContext(SendDataContext);

  useEffect(() => {
    fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.data),
    });
  }, [data]);

  return (
    <section className='bg-neutral-800 w-full h-screen flex justify-center items-center'>
      <img
        className='w-14 absolute translate-y-[-5rem] translate-x-[-6.5rem]'
        src='/assets/images/star.png'
        alt='star'
      />
      <h1 className='font-bold text-[4rem] text-white'>მადლობა</h1>
      <img
        className='w-8 absolute translate-y-[5rem] translate-x-[6.5rem]'
        src='/assets/images/star.png'
        alt='star'
      />
    </section>
  );
};

export default ThankYou;
