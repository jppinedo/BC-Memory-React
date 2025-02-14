import { createContext } from 'react';
import Moves from '../components/Controls/Moves';

export const gameState = {
  currentScreen: 1,
  difficulty: 1, 
  gameStarted: false,
  moves: 0,
  totalMoves: 0,
  isWin: false,
  setCurrentScreen: () => {},
  setDifficulty: () => {},
  setGameStarted: () => {},
  setMoves: () => {},
  setTotalMoves: () => {},
  setIsWin: () => {}
}

const GameContext = createContext(gameState);
export default GameContext;