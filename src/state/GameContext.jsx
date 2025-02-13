import { createContext } from 'react';

export const gameState = {
    difficulty: 1, 
    setDifficulty: () => {}
}

const GameContext = createContext(gameState);
export default GameContext;