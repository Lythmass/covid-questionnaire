import { RadioBlock, InputRadioValidation } from '@/components';

const ShowOnNoVaccinated = (props) => {
  return (
    <RadioBlock title='რას ელოდები?*'>
      <InputRadioValidation
        labelText='დარეგისტრირებული ვარ და ველოდები რიცხვს'
        name='step'
        value='registered_and_waiting'
        defaultValue={props.defaultValue}
      />
      <InputRadioValidation
        labelText='არ ვგეგმავ'
        name='step'
        value='not_planning'
        defaultValue={props.defaultValue}
      />
      <InputRadioValidation
        labelText='გადატანილი მაქვს და ვგეგმავ აცრას'
        name='step'
        value='had_covid_and_planning_to_be_vaccinated'
        defaultValue={props.defaultValue}
      />
    </RadioBlock>
  );
};

export default ShowOnNoVaccinated;
