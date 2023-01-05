const usePersonalInfoWatch = () => {
  const watch = (
    firstName,
    lastName,
    mail,
    firstNameError,
    lastNameError,
    mailError,
    setCanProceed
  ) => {
    if (
      firstName !== undefined &&
      lastName !== undefined &&
      mail !== undefined
    ) {
      if (
        firstNameError === undefined &&
        lastNameError === undefined &&
        mailError === undefined
      ) {
        setCanProceed(true);
      } else {
        setCanProceed(false);
      }
    }
  };
  return watch;
};

export default usePersonalInfoWatch;
