import LayoutBody from './LayoutBody';
import LayoutHeader from './LayoutHeader';

const Layout = (props) => {
  return (
    <section className='bg-gray-200 w-100 h-screen relative flex justify-center items-center'>
      <div className='flex flex-col items-center justify-start w-[95rem] gap-6'>
        <LayoutHeader />
        <hr className='w-full border-black border-y-[1.8px]' />
        <LayoutBody>{props.children}</LayoutBody>
      </div>
    </section>
  );
};

export default Layout;
