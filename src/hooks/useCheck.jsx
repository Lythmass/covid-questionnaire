import { useState } from 'react';

const useCheck = (answer1, answer2, answer3, answer4, answer5) => {
  const [checked, setChecked] = useState('');
  const [secondBlockChecked, setSecondBlockChecked] = useState('');
  const [canProceed, setCanProceed] = useState(false);

  const secondBlockCheckHandler = (text) => {
    if (text === answer2 || text !== answer3 || text !== answer4) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
    setSecondBlockChecked(text);
  };

  const checkHandler = (text) => {
    if (text !== answer1 && text !== answer5) {
      setCanProceed(true);
      setSecondBlockChecked('');
    } else {
      setCanProceed(false);
      setSecondBlockChecked('');
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
