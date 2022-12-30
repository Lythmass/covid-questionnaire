import { RadioBlock, InputRadio, Layout } from '@/components';
import { ShowOnYes, ShowOnSecondYes, ShowOnSecondNo } from '@/pages';
import { useCheck } from '@/hooks';
import { useContext } from 'react';
import { SendDataContext } from '@/state';

const CovidState = () => {
  const data = useContext(SendDataContext);
  const [
    checked,
    secondBlockChecked,
    canProceed,
    setCanProceed,
    checkHandler,
    secondBlockCheckHandler,
  ] = useCheck('yes-1', 'yes-2');

  const handleSubmit = () => {
    if (checked === 'yes-1' && secondBlockChecked === 'yes-2') {
      data.data_handler({
        ...data.data,
        had_covid: 'yes',
        had_antibody_test: true,
        antibodies: {
          test_date: localStorage.getItem('test_date') * 1 || undefined,
          number: localStorage.getItem('number') * 1 || undefined,
        },
      });
    } else if (checked === 'yes-1' && secondBlockChecked === 'no-2') {
      data.data_handler({
        ...data.data,
        had_covid: 'yes',
        had_antibody_test: false,
        covid_sickness_date: localStorage.getItem('covid_sickness_date'),
      });
    } else {
      data.data_handler({
        ...data.data,
        had_covid: checked === 'no-1' ? 'no' : checked,
      });
    }
  };

  return (
    <Layout
      canProceed={canProceed}
      image='vaccinate2'
      page='2'
      nextPage='vaccinated'
      prevPage='personal-info'
      handleSubmit={handleSubmit}
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
            value='have_right_now'
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
