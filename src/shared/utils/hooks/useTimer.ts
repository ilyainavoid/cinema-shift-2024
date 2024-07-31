import { useEffect, useState } from 'react';

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime / 1000);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [time]);

  const resetTimer = (time: number) => {
    setTime(time / 1000);
  };

  return { time, resetTimer };
};

export default useTimer;
