import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [moves, setMoves] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [isWin, setIsWin] = useState(false);

  const gameState = {
    moves, setMoves, totalMoves, setTotalMoves, isWin, setIsWin
  }

  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);