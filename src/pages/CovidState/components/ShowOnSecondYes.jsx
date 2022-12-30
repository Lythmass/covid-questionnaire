import { InputText } from '@/components';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';
import { useError } from '@/hooks';

const ShowOnSecondYes = (props) => {
  const methods = useForm({ mode: 'all' });

  const [watchTestNum, testNumError] = useError('testNum', methods);
  const [watchTestAntibodies, testAntibodiesError] = useError(
    'testAntibodies',
    methods
  );

  useEffect(() => {
    if (watchTestNum !== undefined || watchTestAntibodies !== undefined) {
      if (testNumError === undefined && testAntibodiesError === undefined) {
        props.setCanProceed(true);
      } else {
        props.setCanProceed(false);
      }
    }
  }, [
    props,
    watchTestNum,
    watchTestAntibodies,
    testNumError,
    testAntibodiesError,
  ]);

  useEffect(() => {
    localStorage.setItem('test_date', watchTestNum);
    localStorage.setItem('number', watchTestAntibodies);
  }, [watchTestNum, watchTestAntibodies]);

  return (
    <FormProvider {...methods}>
      <form>
        <InputText
          name='testNum'
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
