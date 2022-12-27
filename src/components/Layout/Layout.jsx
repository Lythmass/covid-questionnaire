import { LayoutBody, LayoutHeader } from '@/components';

const Layout = (props) => {
  return (
    <section className='overflow-hidden bg-gray-200 w-100 h-screen relative flex justify-center items-center pb-10'>
      <div className='flex flex-col items-center min-h-screen justify-start w-[95rem] gap-6 mt-40'>
        <LayoutHeader page={props.page} />
        <hr className='w-full border-black border-y-[1.8px]' />
        <LayoutBody
          nextPage={props.nextPage}
          prevPage={props.prevPage}
          image={props.image}
          canProceed={props.canProceed}
        >
          {props.children}
        </LayoutBody>
      </div>
    </section>
  );
};

export default Layout;
