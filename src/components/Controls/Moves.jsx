import React from "react";
import { useGameContext } from '../../state/GameContext';
import { useMovesStorage } from "../../hooks/useStorage";

const Moves = () => {
  useMovesStorage();
  const { moves, totalMoves } = useGameContext();

  return (
    <>
      <label className="control-label">Game moves: <span id="game-moves">{moves}</span></label>
      <label className="control-label">Total moves: <span id="total-moves">{totalMoves}</span></label>
    </>
  );
}

export default Moves;