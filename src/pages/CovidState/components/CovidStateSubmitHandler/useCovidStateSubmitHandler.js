const useCovidStateSubmitHandler = () => {
  const handleSubmit = (data, watchHadCovid, watchDoneTest) => {
    if (watchHadCovid === 'yes-1' && watchDoneTest === 'yes-2') {
      data.data_handler({
        ...data.data,
        had_covid: 'yes',
        had_antibody_test: true,
        antibodies: {
          test_date: localStorage.getItem('test_date') * 1 || undefined,
          number: localStorage.getItem('number') * 1 || undefined,
        },
      });
    } else if (watchHadCovid === 'yes-1' && watchDoneTest === 'no-2') {
      data.data_handler({
        ...data.data,
        had_covid: 'yes',
        had_antibody_test: false,
        covid_sickness_date: localStorage.getItem('covid_sickness_date'),
      });
    } else {
      data.data_handler({
        ...data.data,
        had_covid: watchHadCovid === 'no-1' ? 'no' : watchHadCovid,
      });
    }
  };

  return handleSubmit;
};

export default useCovidStateSubmitHandler;
