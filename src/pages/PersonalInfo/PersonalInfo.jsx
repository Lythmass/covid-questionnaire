import InputText from '../../components/Inputs/InputText';
import Layout from '../../components/Layout/Layout';
import InputEmail from './components/InputEmail';

const PersonalInfo = () => {
  return (
    <Layout>
      <form className='flex flex-col gap-12'>
        <InputText name='სახელი*' placeholder='იოსებ' />
        <InputText name='გვარი*' placeholder='ჯუღაშვილი' />
        <InputEmail name='მეილი*' placeholder='fbi@redberry.ge' />
      </form>
      <div className='flex flex-col gap-5 w-full'>
        <hr className='w-1/2 border-black border-[0.8px] mt-28' />
        <p className='w-[60%]'>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
      </div>
    </Layout>
  );
};

export default PersonalInfo;
