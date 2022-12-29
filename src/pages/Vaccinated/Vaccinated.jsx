import { Layout, RadioBlock, InputRadio } from '@/components';
import { useCheck } from '@/hooks';
import { ShowOnYesVaccinated, ShowOnNoVaccinated, RegisterLink } from '@/pages';

const Vaccinated = () => {
  const [
    checked,
    secondBlockChecked,
    canProceed,
    setCanProceed,
    checkHandler,
    secondBlockCheckHandler,
  ] = useCheck('yes-1', 'first-dose', 'first-dose-only', 'full-dose', 'no-1');

  return (
    <Layout
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
            {secondBlockChecked === 'first-dose-only' && (
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
            {secondBlockChecked === 'planning' && (
              <RegisterLink
                answer='no'
                text='ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.'
              />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Vaccinated;
