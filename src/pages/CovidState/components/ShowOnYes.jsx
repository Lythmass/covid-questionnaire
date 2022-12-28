import { RadioBlock, InputRadio } from '@/components';

const ShowOnYes = (props) => {
  return (
    <RadioBlock title='ანტისხეულების ტესტი გაქვს გაკეთებული?*'>
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='კი'
        value='yes-2'
        name='done-test'
      />
      <InputRadio
        checkHandler={props.checkHandler}
        labelText='არა'
        value='no-2'
        name='done-test'
      />
    </RadioBlock>
  );
};

export default ShowOnYes;
