import { useState, useEffect } from 'react';
import GameContext from './state/GameContext';
import Controls from './components/Controls';
import CardGrid from './components/CardGrid';
import WinModal from './components/WinModal';
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [difficulty, setDifficulty] = useState(0);
  const [moves, setMoves] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const gameState = {
    currentScreen,
    difficulty, 
    gameStarted,
    moves,
    totalMoves,
    isWin,
    setCurrentScreen,
    setDifficulty, 
    setGameStarted,
    setMoves,
    setTotalMoves,
    setIsWin
  };

  useEffect(() => {
    console.log('new diff: ', difficulty);
  }, [difficulty])

  return (
    <GameContext.Provider value={gameState}>
      <main className="container">
      <h3 className="title">Memory game</h3>
        <Controls />
        {gameStarted && <CardGrid difficulty={difficulty} />}
        {isWin && <WinModal />}
      </main>
    </GameContext.Provider>
  )
}

export default App;
