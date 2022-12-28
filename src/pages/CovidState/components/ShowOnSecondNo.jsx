import { InputText } from '@/components';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

const ShowOnSecondNo = (props) => {
  const methods = useForm({ mode: 'all' });

  const watchDate = useWatch({
    name: 'date',
    control: methods.control,
  });
  const dateError = methods.formState.errors['date']?.message;

  useEffect(() => {
    if (watchDate !== undefined && dateError === undefined) {
      props.setCanProceed(true);
    } else {
      props.setCanProceed(false);
    }
  }, [props, watchDate, dateError]);

  return (
    <FormProvider {...methods}>
      <form>
        <InputText
          name='date'
          type='temporary-text'
          displayName='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
          placeholder='დდ/თთ/წწ'
        />
      </form>
    </FormProvider>
  );
};

export default ShowOnSecondNo;
