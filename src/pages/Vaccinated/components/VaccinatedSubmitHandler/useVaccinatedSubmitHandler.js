const useVaccinatedSubmitHandler = () => {
  const handleSubmit = (data, watchVaccinated, watchStep) => {
    if (watchVaccinated === 'yes-1') {
      data.data_handler({
        ...data.data,
        had_vaccine: watchVaccinated === 'yes-1' ? true : false,
        vaccination_stage: watchStep,
      });
    }
    if (watchVaccinated === 'no-1') {
      data.data_handler({
        ...data.data,
        had_vaccine: watchVaccinated === 'yes-1' ? true : false,
        i_am_waiting: watchStep,
      });
    }
  };

  return handleSubmit;
};

export default useVaccinatedSubmitHandler;
