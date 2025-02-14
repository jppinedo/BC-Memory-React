import React, { useContext, useState, useEffect } from "react";
import GameContext from '../../state/GameContext';
import Card from './Card';
import useGrid from '../../hooks/useGrid';
import './CardGrid.css';

export const CardGrid = ({ difficulty }) => {
  // const { setDifficulty } = useContext(GameContext);
  const { getRandomPairs, playSound } = useGrid();

  let gridSize = 0;
  switch(difficulty) {
    case 1: gridSize = 8; break;
    case 2: gridSize = 16; break;
    case 3: gridSize = 30; break;
  }

  const itemIds = getRandomPairs(gridSize);
  const initialCardList = itemIds.map(id => ({ id, paired: false, flipped: false }));

  const [ cardList, setCardList ] = useState(initialCardList);
  const [ flippedCards, setFlippedCards ] = useState([]);
  const [ pairedCount, setPairedCount ] = useState(0);
  const [ flipping, setFlipping ] = useState(false);
  const { moves, totalMoves, setMoves, setTotalMoves, setIsWin } = useContext(GameContext);

  const onCardFlip = (index) => {
    if(!cardList[index].flipped && !cardList[index].paired && !flipping) {
      const newCardList = [...cardList ]
      newCardList[index].flipped = true;
      setCardList(newCardList);
      setFlippedCards([...flippedCards, index]);
      playSound('flipSound');
    }
  }

  useEffect(() => {
    if(flippedCards.length === 2) {
      const newCardList = [...cardList ];
      setFlipping(true);
      setMoves(moves + 1);
      setTotalMoves(totalMoves + 1);
      setTimeout(() => {
        if(newCardList[flippedCards[0]].id === newCardList[flippedCards[1]].id) {
          newCardList[flippedCards[0]].paired = true;
          newCardList[flippedCards[1]].paired = true;
          setPairedCount(pairedCount + 1);
          playSound('pairSound');
        } else {
          newCardList[flippedCards[0]].flipped = false;
          newCardList[flippedCards[1]].flipped = false;
          playSound('flipBackSound');
        }
        setFlippedCards([]);
        setCardList(newCardList);
        setFlipping(false);
      }, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    if(pairedCount === gridSize) {
      playSound('winSound');
      setIsWin(true);
    }
  }, [pairedCount]);

  return (
    <ul className="card-list" id="card-list">
      {cardList.map((card, index) => (
        <Card 
          key={`card-${card.id}-${index}`} 
          id={card.id}
          index={index}
          flipped={card.flipped} 
          paired={card.paired} 
          onFlip={onCardFlip}
        />
      ))}
    </ul>
  )
}