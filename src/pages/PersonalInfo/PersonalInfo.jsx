import InputText from '@/components/Inputs/InputText';
import Layout from '@/components/Layout/Layout';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useState, useEffect } from 'react';

const PersonalInfo = () => {
  const [canProceed, setCanProceed] = useState(false);
  const methods = useForm({ mode: 'all' });

  const firstName = useWatch({
    name: 'firstName',
    control: methods.control,
  });
  const lastName = useWatch({
    name: 'lastName',
    control: methods.control,
  });
  const mail = useWatch({ name: 'mail', control: methods.control });
  const firstNameError = methods.formState.errors['firstName']?.message;
  const lastNameError = methods.formState.errors['lastName']?.message;
  const mailError = methods.formState.errors['mail']?.message;

  useEffect(() => {
    if (
      firstName !== undefined &&
      lastName !== undefined &&
      mail !== undefined
    ) {
      if (
        firstNameError === undefined &&
        lastNameError === undefined &&
        mailError === undefined
      ) {
        setCanProceed(true);
      } else {
        setCanProceed(false);
      }
    }
  }, [firstName, lastName, mail, firstNameError, lastNameError, mailError]);

  return (
    <Layout canProceed={canProceed}>
      <FormProvider {...methods}>
        <form className='flex flex-col gap-12'>
          <InputText
            name='firstName'
            type='text'
            displayName='სახელი*'
            placeholder='იოსებ'
          />
          <InputText
            name='lastName'
            type='text'
            displayName='გვარი*'
            placeholder='ჯუღაშვილი'
          />
          <InputText
            name='mail'
            type='mail'
            displayName='მეილი*'
            placeholder='fbi@redberry.ge'
          />
        </form>
        <div className='flex flex-col gap-5 w-full'>
          <hr className='w-1/2 border-black border-[0.8px] mt-28' />
          <p className='w-[60%]'>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
      </FormProvider>
    </Layout>
  );
};

export default PersonalInfo;
