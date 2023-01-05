const useVaccinatedWatch = () => {
  const watch = (data, watchVaccinated, watchStep, setCanProceed) => {
    if (watchVaccinated === 'yes-1' && watchStep[0] !== 'f') {
      const { i_am_waiting, ...excludedData } = data.data;
      data.data_handler({ ...excludedData });
      setCanProceed(false);
    } else if (watchVaccinated === 'no-1' && watchStep[0] === 'f') {
      const { vaccination_stage, ...excludedData } = data.data;
      data.data_handler({ ...excludedData });
      setCanProceed(false);
    } else if (watchStep === false) {
      setCanProceed(false);
    } else {
      setCanProceed(true);
    }
  };
  return watch;
};

export default useVaccinatedWatch;
