import { RadioBlock, InputRadio } from '@/components';

const ShowOnYesVaccinated = (props) => {
  return (
    <RadioBlock title='აირჩიე რა ეტაპზე ხარ*'>
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='პირველი დოზა და დარეგისტრირებული მეორეზე'
        name='step'
        value='first_dosage_and_registered_on_the_second'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='სრულად აცრილი ვარ'
        name='step'
        value='fully_vaccinated'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
        name='step'
        value='first_dosage_and_not_registered_yet'
      />
    </RadioBlock>
  );
};

export default ShowOnYesVaccinated;
