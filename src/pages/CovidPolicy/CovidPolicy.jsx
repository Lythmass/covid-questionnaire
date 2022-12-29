import { Layout, RadioBlock, InputRadio } from '@/components';
import { Button, TextArea } from '@/pages';

const CovidPolicy = () => {
  return (
    <Layout image='bike2' page='4' nextPage='' prevPage='vaccinated'>
      <div className='flex flex-col gap-11 w-[60%]'>
        <p className='text-[1.375rem]'>
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის. <br /> <br />
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
        <RadioBlock title='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'>
          <InputRadio labelText='კვირაში ორჯერ' name='meetings' value='twice' />
          <InputRadio labelText='კვირაში ერთხელ' name='meetings' value='once' />
          <InputRadio
            labelText='ორ კვირაში ერთხელ'
            name='meetings'
            value='twice-once'
          />
          <InputRadio
            labelText='თვეში ერთხელ'
            name='meetings'
            value='once-month'
          />
        </RadioBlock>
        <RadioBlock title='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
          <InputRadio labelText='0' name='work' value='zero' />
          <InputRadio labelText='1' name='work' value='one' />
          <InputRadio labelText='2' name='work' value='two' />
          <InputRadio labelText='3' name='work' value='three' />
          <InputRadio labelText='4' name='work' value='four' />
          <InputRadio labelText='5' name='work' value='five' />
        </RadioBlock>
        <TextArea id='area-1' text='რას ფიქრობ ფიზიკურ შეკრებებზე?' />
        <TextArea
          id='area-2'
          text='რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
        />
        <Button />
      </div>
    </Layout>
  );
};

export default CovidPolicy;
