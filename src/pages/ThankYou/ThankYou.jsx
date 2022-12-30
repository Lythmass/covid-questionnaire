import { SendDataContext } from '@/state';
import { useContext, useEffect } from 'react';

const ThankYou = () => {
  const data = useContext(SendDataContext);
  useEffect(() => {
    fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.data),
    });
  }, [data]);
  return (
    <div>
      <h1>Thank You!</h1>
    </div>
  );
};

export default ThankYou;
