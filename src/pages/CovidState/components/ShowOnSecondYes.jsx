import { InputText } from '@/components';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

const ShowOnSecondYes = (props) => {
  const methods = useForm({ mode: 'all' });

  const watchTestDay = useWatch({
    name: 'testDay',
    control: methods.control,
  });
  const watchTestAntibodies = useWatch({
    name: 'testAntibodies',
    control: methods.control,
  });
  const testDayError = methods.formState.errors['testDay']?.message;
  const testAntibodiesError =
    methods.formState.errors['testAntibodies']?.message;

  useEffect(() => {
    if (watchTestDay !== undefined || watchTestAntibodies !== undefined) {
      if (testDayError === undefined && testAntibodiesError === undefined) {
        props.setCanProceed(true);
      } else {
        props.setCanProceed(false);
      }
    }
  }, [
    props,
    watchTestDay,
    watchTestAntibodies,
    testDayError,
    testAntibodiesError,
  ]);

  return (
    <FormProvider {...methods}>
      <form>
        <InputText
          name='testDay'
          type='num'
          displayName='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
          placeholder='რიცხვი'
        />
        <InputText
          name='testAntibodies'
          type='num'
          displayName=''
          placeholder='ანტისხეულების რაოდენობა'
        />
      </form>
    </FormProvider>
  );
};

export default ShowOnSecondYes;
