import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import DifficultySelect from './DifficultySelect';
import Timer from './Timer';
import Moves from './Moves';
import './Controls.css';



export const Controls = ({ 
  currentScreen, 
  setCurrentScreen, 
  onDifficultyChange
}) => {

  const changeDifficulty = (level) => {
    onDifficultyChange(level);
    setCurrentScreen(3);
  }

  const ControlView = () => {
    switch(currentScreen) {
      case 1:
        return (
          <div id="game-screen-1" className="game-screen blue">
            <WelcomeScreen onNextScreen={() => setCurrentScreen(2)} />
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

  return (
    <div className="controls">
      <div className="controls-container">
        <ControlView />
      </div>
    </div>
  )
}