import { RadioBlock, InputRadio } from '@/components';

const ShowOnNoVaccinated = (props) => {
  return (
    <RadioBlock title='რას ელოდები?*'>
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='დარეგისტრირებული ვარ და ველოდები რიცხვს'
        name='step'
        value='registered_and_waiting'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='არ ვგეგმავ'
        name='step'
        value='not_planning'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='გადატანილი მაქვს და ვგეგმავ აცრას'
        name='step'
        value='had_covid_and_planning_to_be_vaccinated'
      />
    </RadioBlock>
  );
};

export default ShowOnNoVaccinated;
