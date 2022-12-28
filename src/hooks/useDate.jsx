import { useState } from 'react';

const useDate = (type) => {
  const [isDate, setIsDate] = useState(type);

  const focusHandler = () => {
    setIsDate('date');
  };
  return [isDate, focusHandler];
};

export default useDate;
