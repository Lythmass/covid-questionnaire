import { LayoutBody, LayoutHeader } from '@/components';

const Layout = (props) => {
  return (
    <section className='bg-gray-200 animate-page-fade w-100 min-h-screen relative flex justify-center items-center '>
      <div className='flex flex-col items-center min-h-screen justify-start w-[95rem] gap-6 py-20'>
        <LayoutHeader page={props.page} />
        <hr className='w-full bg-black h-[2.8px]' />
        <LayoutBody
          nextPage={props.nextPage}
          prevPage={props.prevPage}
          image={props.image}
          canProceed={props.canProceed}
          handleSubmit={props.handleSubmit}
        >
          {props.children}
        </LayoutBody>
      </div>
    </section>
  );
};

export default Layout;
