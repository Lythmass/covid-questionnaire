import { useWatch } from 'react-hook-form';

const useError = (object, methods) => {
  const watchObject = useWatch({
    name: object,
    control: methods.control,
  });
  const objectError = methods.formState.errors[object]?.message;

  return [watchObject, objectError];
};

export default useError;
