import { Layout, RadioBlock, InputRadioValidation } from '@/components';
import { useTitle } from '@/hooks';
import {
  ShowOnYesVaccinated,
  ShowOnNoVaccinated,
  RegisterLink,
  useVaccinatedSubmitHandler,
  useVaccinatedWatch,
} from '@/pages';
import { useContext, useEffect, useState } from 'react';
import { SendDataContext } from '@/state';
import { useWatch, useForm, FormProvider } from 'react-hook-form';

const Vaccinated = () => {
  const data = useContext(SendDataContext);
  const [canProceed, setCanProceed] = useState(false);
  const submit = useVaccinatedSubmitHandler();
  const watch = useVaccinatedWatch();

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      vaccinated:
        data.data.had_vaccine !== undefined &&
        (data.data.had_vaccine ? 'yes-1' : 'no-1'),
      step:
        data.data.had_vaccine !== undefined &&
        (data.data.had_vaccine
          ? data.data.vaccination_stage
          : data.data.i_am_waiting),
    },
  });

  const watchVaccinated = useWatch({
    name: 'vaccinated',
    control: methods.control,
  });
  const watchStep = useWatch({
    name: 'step',
    control: methods.control,
  });

  useEffect(() => {
    watch(data, watchVaccinated, watchStep, setCanProceed);
  }, [methods, watchStep, watchVaccinated]);

  useTitle('Vaccination');

  const handleSubmit = () => {
    submit(data, watchVaccinated, watchStep);
  };

  return (
    <Layout
      handleSubmit={handleSubmit}
      canProceed={canProceed}
      image='doctor2'
      page='3'
      nextPage='covid-policy'
      prevPage='covid-state'
    >
      <FormProvider {...methods}>
        <div className='flex flex-col gap-10'>
          <RadioBlock title='უკვე აცრილი ხარ?*'>
            <InputRadioValidation
              labelText='კი'
              name='vaccinated'
              value='yes-1'
              defaultValue={watchVaccinated}
            />
            <InputRadioValidation
              labelText='არა'
              name='vaccinated'
              value='no-1'
              defaultValue={watchVaccinated}
            />
          </RadioBlock>
          {watchVaccinated === 'yes-1' && (
            <>
              <ShowOnYesVaccinated defaultValue={watchStep} />
              {watchStep === 'first_dosage_and_not_registered_yet' && (
                <RegisterLink
                  answer='yes'
                  text='რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი'
                />
              )}
            </>
          )}
          {watchVaccinated === 'no-1' && (
            <>
              <ShowOnNoVaccinated defaultValue={watchStep} />
              {watchStep === 'had_covid_and_planning_to_be_vaccinated' && (
                <RegisterLink
                  answer='no'
                  text='ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.'
                />
              )}
            </>
          )}
        </div>
      </FormProvider>
      <div className='absolute right-[35rem] top-[11rem]'>
        <img
          className='animate-vaccinated-star'
          src='/assets/images/anim3.png'
          alt='anim2'
        />
      </div>
    </Layout>
  );
};

export default Vaccinated;
