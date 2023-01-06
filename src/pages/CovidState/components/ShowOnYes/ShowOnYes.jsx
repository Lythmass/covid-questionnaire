import { RadioBlock, InputRadioValidation } from '@/components';

const ShowOnYes = (props) => {
  return (
    <RadioBlock title='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <InputRadioValidation
        labelText='კი'
        value='yes-2'
        name='done-test'
        defaultValue={props.defaultValue}
      />
      <InputRadioValidation
        labelText='არა'
        value='no-2'
        name='done-test'
        defaultValue={props.defaultValue}
      />
    </RadioBlock>
  );
};

export default ShowOnYes;
