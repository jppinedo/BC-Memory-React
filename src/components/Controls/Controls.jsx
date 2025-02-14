import React, { useState, useContext } from 'react';
import GameContext from '../../state/GameContext';
import WelcomeScreen from './WelcomeScreen';
import DifficultySelect from './DifficultySelect';
import Timer from './Timer';
import Moves from './Moves';
import './Controls.css';

const ControlView = () => {

  const { setDifficulty, setGameStarted, currentScreen, setCurrentScreen } = useContext(GameContext);

  const changeDifficulty = (level) => {
    setDifficulty(level);
    setGameStarted(true);
    setCurrentScreen(3);
  }

  switch(currentScreen) {
    case 1:
      return (
        <div id="game-screen-1" className="game-screen blue">
          <WelcomeScreen onNextScreen={() => setScreenIndex(2)} />
        </div>
      );
    case 2:
      return (
        <div id="game-screen-2" className="game-screen">
          <DifficultySelect changeDifficulty={changeDifficulty} />
        </div>
      );
    case 3:
      return (
        <div id="game-screen-3" className="game-screen">
          <Timer />
          <Moves />
        </div>
      );
  }
}

export const Controls = () => {
  return (
    <div className="controls">
      <div className="controls-container">
        <ControlView />
      </div>
    </div>
  )
}