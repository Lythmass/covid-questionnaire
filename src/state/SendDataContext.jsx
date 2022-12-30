import { createContext, useState } from 'react';

const SendDataContext = createContext({
  first_name: '',
  last_name: '',
  email: '',
  had_covid: '',
  had_antibody_test: false,
  covid_sickness_date: '',
  antibodies: {
    test_date: '',
    number: 0,
  },
  had_vaccine: false,
  vaccination_stage: '',
  i_am_waiting: '',
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
});

export const SendDataContextProvider = (props) => {
  const [data, setData] = useState({});
  const dataHandler = (value) => {
    setData(value);
  };
  return (
    <SendDataContext.Provider
      value={{
        data: data,
        data_handler: dataHandler,
      }}
    >
      {props.children}
    </SendDataContext.Provider>
  );
};

export default SendDataContext;
