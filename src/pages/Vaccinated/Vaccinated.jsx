import { Layout, RadioBlock, InputRadio } from '@/components';

const Vaccinated = () => {
  return (
    <Layout image='doctor2' page='3' nextPage='' prevPage='covid-state'>
      <RadioBlock title='უკვე აცრილი ხარ?*'>
        <InputRadio labelText='კი' name='vaccinated' value='yes-1' />
        <InputRadio labelText='არა' name='vaccinated' value='no-1' />
      </RadioBlock>
    </Layout>
  );
};

export default Vaccinated;
