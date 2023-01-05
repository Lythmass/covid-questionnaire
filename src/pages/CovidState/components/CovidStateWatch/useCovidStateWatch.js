const useCovidStateWatch = () => {
  const watch = (
    data,
    methods,
    watchHadCovid,
    watchDoneTest,
    setCanProceed
  ) => {
    if (watchHadCovid !== 'yes-1' && watchHadCovid !== 'undefined-1') {
      setCanProceed(true);
      methods.setValue('done-test', '');
      const { had_covid, covid_sickness_date, antibodies, ...excludedData } =
        data.data;
      data.data_handler({
        ...excludedData,
      });
    } else {
      if (watchDoneTest === 'yes-2') {
        const { covid_sickness_date, ...excludedData } = data.data;
        data.data_handler({
          ...excludedData,
        });
        setCanProceed(true);
      } else {
        const { antibodies, ...excludedData } = data.data;
        data.data_handler({
          ...excludedData,
        });
        setCanProceed(false);
      }
    }
  };
  return watch;
};

export default useCovidStateWatch;
