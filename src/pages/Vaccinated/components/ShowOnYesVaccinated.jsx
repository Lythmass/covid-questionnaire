import { RadioBlock, InputRadioValidation } from '@/components';

const ShowOnYesVaccinated = (props) => {
  return (
    <RadioBlock title='აირჩიე რა ეტაპზე ხარ*'>
      <InputRadioValidation
        labelText='პირველი დოზა და დარეგისტრირებული მეორეზე'
        name='step'
        value='first_dosage_and_registered_on_the_second'
        defaultValue={props.defaultValue}
      />
      <InputRadioValidation
        labelText='სრულად აცრილი ვარ'
        name='step'
        value='fully_vaccinated'
        defaultValue={props.defaultValue}
      />
      <InputRadioValidation
        labelText='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
        name='step'
        value='first_dosage_and_not_registered_yet'
        defaultValue={props.defaultValue}
      />
    </RadioBlock>
  );
};

export default ShowOnYesVaccinated;
