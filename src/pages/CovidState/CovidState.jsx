import { RadioBlock, InputRadioValidation, Layout } from '@/components';
import { ShowOnYes, ShowOnSecondYes, ShowOnSecondNo } from '@/pages';
import { useTitle } from '@/hooks';
import { useContext, useEffect, useState } from 'react';
import { SendDataContext } from '@/state';
import { useForm, useWatch, FormProvider } from 'react-hook-form';

const CovidState = () => {
  const [canProceed, setCanProceed] = useState(false);
  useTitle('Covid State');

  const data = useContext(SendDataContext);
  const methods = useForm({ mode: 'all' });

  const watchHadCovid = useWatch({
    name: 'overcame',
    control: methods.control,
    defaultValue:
      data.data.had_covid === 'have_right_now'
        ? data.data.had_covid
        : data.data.had_covid + '-1',
  });
  const watchDoneTest = useWatch({
    name: 'done-test',
    control: methods.control,
    defaultValue:
      data.data.had_antibody_test !== undefined &&
      (data.data.had_antibody_test ? 'yes-2' : 'no-2'),
  });

  useEffect(() => {
    if (watchHadCovid !== 'yes-1' && watchHadCovid !== undefined) {
      setCanProceed(true);
      methods.setValue('done-test', '');
      const { had_covid, covid_sickness_date, antibodies, ...excludedData } =
        data.data;
      data.data_handler({
        ...excludedData,
      });
    } else {
      if (watchDoneTest === 'yes-2') {
        const { covid_sickness_date, ...excludedData } = data.data;
        data.data_handler({
          ...excludedData,
        });
        setCanProceed(true);
      } else {
        const { antibodies, ...excludedData } = data.data;
        data.data_handler({
          ...excludedData,
        });
        setCanProceed(false);
      }
    }
  }, [watchHadCovid, watchDoneTest, methods]);

  const proceedHandler = (value) => {
    setCanProceed(value);
  };

  const handleSubmit = () => {
    if (watchHadCovid === 'yes-1' && watchDoneTest === 'yes-2') {
      data.data_handler({
        ...data.data,
        had_covid: 'yes',
        had_antibody_test: true,
        antibodies: {
          test_date: localStorage.getItem('test_date') * 1 || undefined,
          number: localStorage.getItem('number') * 1 || undefined,
        },
      });
    } else if (watchHadCovid === 'yes-1' && watchDoneTest === 'no-2') {
      data.data_handler({
        ...data.data,
        had_covid: 'yes',
        had_antibody_test: false,
        covid_sickness_date: localStorage.getItem('covid_sickness_date'),
      });
    } else {
      data.data_handler({
        ...data.data,
        had_covid: watchHadCovid === 'no-1' ? 'no' : watchHadCovid,
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
      <FormProvider {...methods}>
        <div className='flex flex-col gap-10'>
          <RadioBlock title='გაქვს გადატანილი Covid-19?*'>
            <InputRadioValidation
              labelText='კი'
              name='overcame'
              value='yes-1'
              defaultValue={watchHadCovid}
            />
            <InputRadioValidation
              labelText='არა'
              name='overcame'
              value='no-1'
              defaultValue={watchHadCovid}
            />
            <InputRadioValidation
              labelText='ახლა მაქვს'
              name='overcame'
              value='have_right_now'
              defaultValue={watchHadCovid}
            />
          </RadioBlock>

          {watchHadCovid === 'yes-1' && (
            <ShowOnYes defaultValue={watchDoneTest} />
          )}
          {watchDoneTest === 'yes-2' && (
            <ShowOnSecondYes
              data={data.data.antibodies}
              setCanProceed={proceedHandler}
            />
          )}
          {watchDoneTest === 'no-2' && (
            <ShowOnSecondNo
              data={data.data.covid_sickness_date}
              setCanProceed={proceedHandler}
            />
          )}
        </div>
      </FormProvider>
      <div className='absolute right-[40rem] top-[24rem]'>
        <img
          className='animate-covid-state-circle'
          src='/assets/images/anim2.png'
          alt='anim2'
        />
      </div>
    </Layout>
  );
};

export default CovidState;
