import { RadioBlock, InputRadio, Layout } from '@/components';
import { ShowOnYes, ShowOnSecondYes, ShowOnSecondNo } from '@/pages';
import { useCheck } from '@/hooks';

const CovidState = () => {
  const [
    checked,
    secondBlockChecked,
    canProceed,
    setCanProceed,
    checkHandler,
    secondBlockCheckHandler,
  ] = useCheck('yes-1');

  return (
    <Layout
      canProceed={canProceed}
      image='vaccinate2'
      page='2'
      nextPage='vaccinated'
      prevPage='personal-info'
    >
      <div className='flex flex-col gap-10'>
        <RadioBlock title='გაქვს გადატანილი Covid-19?*'>
          <InputRadio
            checkHandler={checkHandler}
            labelText='კი'
            name='overcame'
            value='yes-1'
          />
          <InputRadio
            checkHandler={checkHandler}
            labelText='არა'
            name='overcame'
            value='no-1'
          />
          <InputRadio
            checkHandler={checkHandler}
            labelText='ახლა მაქვს'
            name='overcame'
            value='not-now'
          />
        </RadioBlock>

        {checked === 'yes-1' && (
          <ShowOnYes checkHandler={secondBlockCheckHandler} />
        )}
        {secondBlockChecked === 'yes-2' && (
          <ShowOnSecondYes setCanProceed={setCanProceed} />
        )}
        {secondBlockChecked === 'no-2' && (
          <ShowOnSecondNo setCanProceed={setCanProceed} />
        )}
      </div>
    </Layout>
  );
};

export default CovidState;
