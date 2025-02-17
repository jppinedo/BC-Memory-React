import React from "react";
import { useStorage } from "../../hooks/useStorage";
import { useGameContext } from '../../state/GameContext';
import Confetti from 'react-confetti';

const WinModal = ({ onPlayAgain }) => {
  const { Store } = useStorage();
  const { isWin, setIsWin } = useGameContext();

  const onButtonClick = () => {
    setIsWin(false);
    Store.updateIsWin(false);
    onPlayAgain();
  }

  if(!isWin) return null;
  return (
    <div className="modal-overlay" id="game-over">
      <Confetti
        numberOfPieces={100}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <h2>You won the game.</h2>
        <button id="play-again" onClick={onButtonClick}>Play Again</button>
      </div>
    </div>
  );
}

export default WinModal;