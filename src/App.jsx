import React, { useEffect, useState } from 'react';
import { GameProvider } from './state/GameContext';
import { useStorage } from './hooks/useStorage';
import Controls from './components/Controls';
import CardGrid from './components/CardGrid';
import WinModal from './components/WinModal';
import './App.css';

function App() {
  const { Store } = useStorage();

  const storedAppState = Store.getAppState();
  const [currentScreen, setCurrentScreen] = useState(storedAppState.currentScreen);
  const [difficulty, setDifficulty] = useState(storedAppState.difficulty);
  const [gameStarted, setGameStarted] = useState(storedAppState.gameStarted);

  useEffect(() => {
    Store.updateAppState({currentScreen, difficulty, gameStarted});
  }, [currentScreen, difficulty, gameStarted]);

  const onDifficultyChange = (level) => {
    setDifficulty(level);
    setGameStarted(true);
  }

  const onPlayAgain = () => {
    setCurrentScreen(2);
    setGameStarted(false);
    Store.resetGame();
  }

  return (
    <GameProvider>
      <main className="container">
      <h3 className="title">Memory game</h3>
        <Controls 
          currentScreen={currentScreen} 
          setCurrentScreen={setCurrentScreen} 
          onDifficultyChange={onDifficultyChange}
        />
        {gameStarted && (
          <CardGrid 
            difficulty={difficulty} 
          />
        )}
        <WinModal onPlayAgain={onPlayAgain} />
      </main>
    </GameProvider>
  )
}

export default App;
