import React, { useEffect, useState } from "react";

const Timer = ({  }) => {
  const [ timer, setTimer ] = useState('00:00');

  let seconds = 0;
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const time = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      setTimer(time);
      sessionStorage.setItem('gameTimer', seconds);
    }, 1000);

    return () => {
      clearInterval(interval); // Clear the interval
    };
  }, []);

  return <label className="control-label">Time: <span id="timer">{timer}</span></label>;
}

export default Timer;