import { RadioBlock, InputRadio } from '@/components';

const ShowOnYesVaccinated = (props) => {
  return (
    <RadioBlock title='აირჩიე რა ეტაპზე ხარ*'>
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='პირველი დოზა და დარეგისტრირებული მეორეზე'
        name='step'
        value='first-dose'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='სრულად აცრილი ვარ'
        name='step'
        value='full-dose'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
        name='step'
        value='first-dose-only'
      />
    </RadioBlock>
  );
};

export default ShowOnYesVaccinated;
