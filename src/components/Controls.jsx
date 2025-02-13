import React, { useState, useContext } from "react";
import GameContext from '../state/GameContext';

const ControlView = ({index = 0, onChangeView}) => {
  const { difficulty, setDifficulty } = useContext(GameContext);

  const changeDifficulty = (level = 1) => {
    setDifficulty(level);
    onChangeView(3);
  }

  switch(index) {
    case 1:
      return(
        <div id="game-screen-1" className="game-screen blue">
          <h2>Welcome to the Memory Game!</h2>
          <p>Flip over two cards to find matching pairs. If they match, keep them and go again. Keep playing until all pairs are found.</p>
          <p>Ready to test your memory and have fun? Enjoy the challenge! Let's find those pairs!🎴😊</p>
          <button id="start-control" onClick={() => onChangeView(2)}>Start Game</button>
        </div>
      );
    case 2:
      return(
        <div id="game-screen-2" className="game-screen">
          <h2>Ready to test your memory skills?</h2>
          <p>Choose your challenge:</p>
          <ul className="diff-level">
            <li role="button" tabIndex="0" id="diff-1" onClick={() => changeDifficulty(1)}>Easy Peasy</li>
            <li role="button" tabIndex="0" id="diff-2" onClick={() => changeDifficulty(2)}>Medium Mode</li>
            <li role="button" tabIndex="0" id="diff-3" onClick={() => changeDifficulty(3)}>Hard-as-Nails</li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div id="game-screen-3" className="game-screen">
          <label className="control-label">Time: <span id="timer">00:00</span></label>
          <label className="control-label">Game moves: <span id="game-moves">0</span></label>
          <label className="control-label">Total moves: <span id="total-moves">0</span></label>
        </div>
      );
  }
}

export const Controls = ({screen = 1}) => {

  const [screenIndex, setScreenIndex] = useState(screen);

  const changeView = (index) => {
    setScreenIndex(index);
  }

  return (
    <div className="controls-container">
      <ControlView index={screenIndex} onChangeView={changeView} />
    </div>
  )
}