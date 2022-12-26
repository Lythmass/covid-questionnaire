import { Link } from 'react-router-dom';

const StartingPage = () => {
  return (
    <section className='bg-gray-200 w-100 h-screen flex flex-col justify-center items-center gap-24'>
      <img className='w-24' src='src/assets/images/logo.png' alt='logo' />
      <h1 className='font-bold text-3xl text-center cursor-pointer'>
        <Link to='/personal-info'>
          კითხვარის <br /> დაწყება
        </Link>
      </h1>
    </section>
  );
};

export default StartingPage;
