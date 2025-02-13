import { useState } from 'react';
import GameContext, { gameState } from './state/GameContext';
import { Controls } from './components/Controls';
import './App.css'

function App() {
  const [difficulty, setDifficulty] = useState(0);

  return (
    <GameContext.Provider value={{difficulty, setDifficulty}}>
      <main className="container">
      <h3 className="title">Memory game</h3>
        <Controls screen={1} />
      </main>
    </GameContext.Provider>
  )
}

export default App;
