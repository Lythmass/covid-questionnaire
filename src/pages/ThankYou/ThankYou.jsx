import { SendDataContext } from '@/state';
import { useContext, useEffect } from 'react';
import { useTitle } from '@/hooks';

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

  useTitle('Thank You');

  return (
    <section className='relative overflow-hidden animate-bg-color font-bpg bg-neutral-800 w-full h-screen flex justify-center items-center'>
      <img
        className='animate-heart absolute w-full scale-[2] z-0 left-[17rem] top-[-37.8rem]'
        src='/assets/images/heart.png'
        alt='heart'
      />
      <img
        className='animate-thank-you-star-1 w-14 absolute left-[48.2rem] top-[24rem]'
        src='/assets/images/star.png'
        alt='star'
      />
      <h1 className='z-[9] space font-bold text-[4rem] tracking-[0.24em] text-white'>
        მადლობა
      </h1>
      <img
        className='animate-thank-you-star-2 w-8 absolute right-[49rem] bottom-[27rem]'
        src='/assets/images/star.png'
        alt='star'
      />
    </section>
  );
};

export default ThankYou;
