import { RadioBlock, InputRadio } from '@/components';

const ShowOnNoVaccinated = (props) => {
  return (
    <RadioBlock title='რას ელოდები?*'>
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='დარეგისტრირებული ვარ და ველოდები რიცხვს'
        name='step'
        value='planned'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='არ ვგეგმავ'
        name='step'
        value='not-planning'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='გადატანილი მაქვს და ვგეგმავ აცრას'
        name='step'
        value='planning'
      />
    </RadioBlock>
  );
};

export default ShowOnNoVaccinated;
