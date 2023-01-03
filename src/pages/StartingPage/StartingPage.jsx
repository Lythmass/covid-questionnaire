import { Link } from 'react-router-dom';
import { useTitle } from '@/hooks';

const StartingPage = () => {
  localStorage.clear();

  useTitle('Home');

  return (
    <section className='bg-white-777 w-100 h-screen flex flex-col justify-center items-center gap-24'>
      <img
        className='w-24 animate-big-to-small z-20'
        src='/assets/images/logo.png'
        alt='logo'
      />
      <div className='absolute w-48 h-28 z-10 bg-white-777'></div>
      <h1 className='z-0 font-bold animate-up-to-bottom hover:drop-shadow-text-anim text-3xl text-center cursor-pointer'>
        <Link to='/personal-info'>
          კითხვარის <br /> დაწყება
        </Link>
      </h1>
    </section>
  );
};

export default StartingPage;
