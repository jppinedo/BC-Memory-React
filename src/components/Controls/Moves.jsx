import React, { useEffect, useContext } from "react";
import GameContext from '../../state/GameContext';

const Moves = ({}) => {
  const { moves, totalMoves, setMoves, setTotalMoves } = useContext(GameContext);

  useEffect(() => {
    const updateMovesFromStorage = () => {
      const totalMoves = localStorage.getItem('totalMoves');
      setTotalMoves(totalMoves ? parseInt(totalMoves) : 0);
    }

    updateMovesFromStorage();

    const moves = sessionStorage.getItem('gameMoves');
    setMoves(moves ? parseInt(moves) : 0);

    document.addEventListener('storage', updateMovesFromStorage);

    return () => {
      removeEventListener('storage', updateMovesFromStorage);
    }

  }, []);

  return (
    <>
      <label className="control-label">Game moves: <span id="game-moves">{moves}</span></label>
      <label className="control-label">Total moves: <span id="total-moves">{totalMoves}</span></label>
    </>
  )
}

export default Moves;