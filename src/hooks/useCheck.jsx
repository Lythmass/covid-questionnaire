import { useState } from 'react';

const useCheck = (answer1, answer2) => {
  const [checked, setChecked] = useState('');
  const [secondBlockChecked, setSecondBlockChecked] = useState('');
  const [canProceed, setCanProceed] = useState(false);

  const secondBlockCheckHandler = (text) => {
    if (text !== answer2) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
    setSecondBlockChecked(text);
  };

  const checkHandler = (text) => {
    if (text !== answer1) {
      setCanProceed(true);
      setSecondBlockChecked('');
    } else {
      setCanProceed(false);
    }
    setChecked(text);
  };

  return [
    checked,
    secondBlockChecked,
    canProceed,
    setCanProceed,
    checkHandler,
    secondBlockCheckHandler,
  ];
};

export default useCheck;
