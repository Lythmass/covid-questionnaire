import { Layout, RadioBlock, InputRadioValidation } from '@/components';
import { Button, TextArea } from '@/pages';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { SendDataContext } from '@/state';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CovidPolicy = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const data = useContext(SendDataContext);

  const watchMeetings = useWatch({
    name: 'meetings',
    control: methods.control,
  });
  const watchWork = useWatch({
    name: 'work',
    control: methods.control,
  });
  const watchArea1 = useWatch({
    name: 'area-1',
    control: methods.control,
  });
  const watchArea2 = useWatch({
    name: 'area-2',
    control: methods.control,
  });

  const submitHandler = () => {
    data.data_handler({
      ...data.data,
      non_formal_meetings: watchMeetings,
      number_of_days_from_office: watchWork,
      what_about_meetings_in_live: watchArea1,
      tell_us_your_opinion_about_us: watchArea2,
    });
    navigate('/thank-you');
  };
  return (
    <Layout image='bike2' page='4' nextPage='' prevPage='vaccinated'>
      <div className='flex flex-col gap-11 w-[70%]'>
        <p className='text-[1.375rem]'>
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის. <br /> <br />
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
        <FormProvider {...methods} className='w-full'>
          <form
            onSubmit={methods.handleSubmit(submitHandler)}
            className='flex flex-col gap-11 w-full'
          >
            <RadioBlock title='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'>
              <p className='text-orange-600'>
                {methods.formState.errors.meetings?.message}
              </p>
              <InputRadioValidation
                labelText='კვირაში ორჯერ'
                name='meetings'
                value='twice_a_week'
              />
              <InputRadioValidation
                labelText='კვირაში ერთხელ'
                name='meetings'
                value='once_a_week'
              />
              <InputRadioValidation
                labelText='ორ კვირაში ერთხელ'
                name='meetings'
                value='once_in_a_two_weeks'
              />
              <InputRadioValidation
                labelText='თვეში ერთხელ'
                name='meetings'
                value='once_in_a_month'
              />
            </RadioBlock>
            <RadioBlock title='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
              <p className='text-orange-600'>
                {methods.formState.errors.work?.message}
              </p>
              <InputRadioValidation labelText='0' name='work' value={0} />
              <InputRadioValidation labelText='1' name='work' value={1} />
              <InputRadioValidation labelText='2' name='work' value={2} />
              <InputRadioValidation labelText='3' name='work' value={3} />
              <InputRadioValidation labelText='4' name='work' value={4} />
              <InputRadioValidation labelText='5' name='work' value={5} />
            </RadioBlock>
            <TextArea id='area-1' text='რას ფიქრობ ფიზიკურ შეკრებებზე?' />
            <TextArea
              id='area-2'
              text='რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
            />
            <Button />
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default CovidPolicy;
