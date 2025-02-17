import React, { useEffect, useState } from "react";
import { useStorage } from "../../hooks/useStorage";
import { useGameContext } from '../../state/GameContext';

const Timer = () => {
  const { Store } = useStorage();
  const { isWin } = useGameContext();
  const [ timer, setTimer ] = useState('00:00');

  let interval;

  useEffect(() => {
    const timeFromSeconds = (_seconds) => {
      const minutes = Math.floor(_seconds / 60);
      const remainingSeconds = _seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    let seconds = Store.getTimer();
    
    if(!isWin) {
      interval = setInterval(() => {
        seconds++;
        const time = timeFromSeconds(seconds);
        setTimer(time);
        Store.updateTimer(seconds);
      }, 1000);
    } else if(interval) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval); // Clear the interval
    };
  }, []);

  return (
    <label className="control-label">Time: <span id="timer">{timer}</span></label>
  );
}

export default Timer;