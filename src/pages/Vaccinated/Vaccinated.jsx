import { Layout, RadioBlock, InputRadio } from '@/components';
import { useCheck, useTitle } from '@/hooks';
import { ShowOnYesVaccinated, ShowOnNoVaccinated, RegisterLink } from '@/pages';
import { useContext } from 'react';
import { SendDataContext } from '@/state';

const Vaccinated = () => {
  const data = useContext(SendDataContext);
  const [
    checked,
    secondBlockChecked,
    canProceed,
    setCanProceed,
    checkHandler,
    secondBlockCheckHandler,
  ] = useCheck(
    'yes-1',
    'first_dosage_and_registered_on_the_second',
    'first_dosage_and_not_registered_yet',
    'fully_vaccinated',
    'no-1'
  );

  useTitle('Vaccination');

  const handleSubmit = () => {
    if (checked === 'yes-1') {
      data.data_handler({
        ...data.data,
        had_vaccine: checked === 'yes-1' ? true : false,
        vaccination_stage: secondBlockChecked,
      });
    }
    if (checked === 'no-1') {
      data.data_handler({
        ...data.data,
        had_vaccine: checked === 'yes-1' ? true : false,
        i_am_waiting: secondBlockChecked,
      });
    }
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
      <div className='flex flex-col gap-10'>
        <RadioBlock title='უკვე აცრილი ხარ?*'>
          <InputRadio
            checkHandler={checkHandler}
            labelText='კი'
            name='vaccinated'
            value='yes-1'
          />
          <InputRadio
            checkHandler={checkHandler}
            labelText='არა'
            name='vaccinated'
            value='no-1'
          />
        </RadioBlock>
        {checked === 'yes-1' && (
          <>
            <ShowOnYesVaccinated checkHandler={secondBlockCheckHandler} />
            {secondBlockChecked === 'first_dosage_and_not_registered_yet' && (
              <RegisterLink
                answer='yes'
                text='რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი'
              />
            )}
          </>
        )}
        {checked === 'no-1' && (
          <>
            <ShowOnNoVaccinated checkHandler={secondBlockCheckHandler} />
            {secondBlockChecked ===
              'had_covid_and_planning_to_be_vaccinated' && (
              <RegisterLink
                answer='no'
                text='ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.'
              />
            )}
          </>
        )}
      </div>
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
