import { RadioBlock, InputRadio, Layout } from '@/components';

const CovidState = () => {
  return (
    <Layout image='vaccinate2' page='2' nextPage='' prevPage='personal-info'>
      <RadioBlock title='გაქვს გადატანილი Covid-19?*'>
        <InputRadio labelText='კი' name='overcame' />
        <InputRadio labelText='არა' name='overcame' />
        <InputRadio labelText='ახლა მაქვს' name='overcame' />
      </RadioBlock>
    </Layout>
  );
};

export default CovidState;
