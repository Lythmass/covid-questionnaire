import { InputText, Layout } from '@/components';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useState, useEffect, useContext } from 'react';
import { SendDataContext } from '@/state';
import { useTitle } from '@/hooks';
import { usePersonalInfoWatch } from '@/pages';

const PersonalInfo = () => {
  const [canProceed, setCanProceed] = useState(false);
  const watch = usePersonalInfoWatch();
  const data = useContext(SendDataContext);
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      firstName: data.data.first_name,
      lastName: data.data.last_name,
      mail: data.data.email,
    },
  });

  const firstName = useWatch({
    name: 'firstName',
    control: methods.control,
  });
  const lastName = useWatch({
    name: 'lastName',
    control: methods.control,
  });
  const mail = useWatch({
    name: 'mail',
    control: methods.control,
  });
  const firstNameError = methods.formState.errors['firstName']?.message;
  const lastNameError = methods.formState.errors['lastName']?.message;
  const mailError = methods.formState.errors['mail']?.message;

  useTitle('Personal Info');

  useEffect(() => {
    watch(
      firstName,
      lastName,
      mail,
      firstNameError,
      lastNameError,
      mailError,
      setCanProceed
    );
  }, [firstName, lastName, mail, firstNameError, lastNameError, mailError]);

  const handleSubmit = () => {
    data.data_handler({
      ...data.data,
      first_name: firstName,
      last_name: lastName,
      email: mail,
    });
  };

  return (
    <Layout
      nextPage='covid-state'
      prevPage=''
      image='scan2'
      page='1'
      canProceed={canProceed}
      handleSubmit={handleSubmit}
    >
      <FormProvider {...methods}>
        <form className='flex flex-col gap-12'>
          <InputText
            name='firstName'
            type='text'
            displayName='სახელი*'
            placeholder='იოსებ'
            defaultValue={data.data.first_name}
          />
          <InputText
            name='lastName'
            type='text'
            displayName='გვარი*'
            placeholder='ჯუღაშვილი'
            defaultValue={data.data.last_name}
          />
          <InputText
            name='mail'
            type='mail'
            displayName='მეილი*'
            placeholder='fbi@redberry.ge'
            defaultValue={data.data.email}
          />
        </form>
        <div className='flex flex-col gap-5 w-full'>
          <hr className='w-1/2 border-black border-[0.8px] mt-28' />
          <p className='w-[60%]'>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
      </FormProvider>
      <div className='absolute right-[16rem] top-[19.5rem]'>
        <img
          className='opacity-90 z-10 animate-personal-info-square'
          src='/assets/images/anim1.png'
          alt='anim1'
        />
      </div>
    </Layout>
  );
};

export default PersonalInfo;
