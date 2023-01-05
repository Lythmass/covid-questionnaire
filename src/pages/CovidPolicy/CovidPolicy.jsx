import { Layout, RadioBlock, InputRadioValidation } from '@/components';
import { Button, TextArea } from '@/pages';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { SendDataContext } from '@/state';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '@/hooks';

const CovidPolicy = () => {
  const methods = useForm({
    defaultValues: {
      meetings: localStorage.getItem('non_formal_meetings'),
      work: localStorage.getItem('number_of_days_from_office'),
      'area-1': localStorage.getItem('what_about_meetings_in_live') || '',
      'area-2': localStorage.getItem('tell_us_your_opinion_about_us') || '',
    },
  });
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

  useTitle('Covid Policy');

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

  useEffect(() => {
    localStorage.setItem('non_formal_meetings', watchMeetings);
    localStorage.setItem('number_of_days_from_office', watchWork);
    localStorage.setItem('what_about_meetings_in_live', watchArea1);
    localStorage.setItem('tell_us_your_opinion_about_us', watchArea2);
  }, [watchMeetings, watchWork, watchArea1, watchArea2]);

  return (
    <Layout image='bike2' page='4' nextPage='' prevPage='vaccinated'>
      <div className='flex flex-col gap-11 w-[70%] overflow-auto h-[60vh] pr-5 pl-1'>
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
                defaultValue={watchMeetings}
              />
              <InputRadioValidation
                labelText='კვირაში ერთხელ'
                name='meetings'
                value='once_a_week'
                defaultValue={watchMeetings}
              />
              <InputRadioValidation
                labelText='ორ კვირაში ერთხელ'
                name='meetings'
                value='once_in_a_two_weeks'
                defaultValue={watchMeetings}
              />
              <InputRadioValidation
                labelText='თვეში ერთხელ'
                name='meetings'
                value='once_in_a_month'
                defaultValue={watchMeetings}
              />
            </RadioBlock>
            <RadioBlock title='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'>
              <p className='text-orange-600'>
                {methods.formState.errors.work?.message}
              </p>
              <InputRadioValidation
                labelText='0'
                name='work'
                value='0'
                defaultValue={watchWork}
              />
              <InputRadioValidation
                labelText='1'
                name='work'
                value='1'
                defaultValue={watchWork}
              />
              <InputRadioValidation
                labelText='2'
                name='work'
                value='2'
                defaultValue={watchWork}
              />
              <InputRadioValidation
                labelText='3'
                name='work'
                value='3'
                defaultValue={watchWork}
              />
              <InputRadioValidation
                labelText='4'
                name='work'
                value='4'
                defaultValue={watchWork}
              />
              <InputRadioValidation
                labelText='5'
                name='work'
                value='5'
                defaultValue={watchWork}
              />
            </RadioBlock>
            <TextArea
              defaultValue={watchArea1}
              id='area-1'
              name='area-1'
              text='რას ფიქრობ ფიზიკურ შეკრებებზე?'
            />
            <TextArea
              defaultValue={watchArea2}
              id='area-2'
              text='რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
            />
            <Button />
          </form>
        </FormProvider>
      </div>
      <div className='absolute right-[35rem] top-[15.5rem]'>
        <img
          className='animate-covid-policy-heart'
          src='/assets/images/anim4.png'
          alt='anim2'
        />
      </div>
    </Layout>
  );
};

export default CovidPolicy;
