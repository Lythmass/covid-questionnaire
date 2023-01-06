import { useWatch } from 'react-hook-form';

const useError = (object, methods, data) => {
  const watchObject = useWatch({
    name: object,
    control: methods.control,
    defaultValue: data,
  });
  const objectError = methods.formState.errors[object]?.message;

  return [watchObject, objectError];
};

export default useError;
