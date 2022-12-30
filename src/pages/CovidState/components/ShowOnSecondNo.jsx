import { InputText } from '@/components';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';
import { useError } from '@/hooks';

const ShowOnSecondNo = (props) => {
  const methods = useForm({ mode: 'all' });
  const [watchDate, dateError] = useError('date', methods);

  useEffect(() => {
    if (watchDate !== undefined && dateError === undefined) {
      props.setCanProceed(true);
    } else {
      props.setCanProceed(false);
    }
  }, [props, watchDate, dateError]);

  useEffect(() => {
    localStorage.setItem('covid_sickness_date', watchDate);
  }, [watchDate]);

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
