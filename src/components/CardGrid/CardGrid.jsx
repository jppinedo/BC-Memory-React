import React, { useState, useEffect } from "react";
import { useStorage } from "../../hooks/useStorage";
import Card from './Card';
import useGrid from '../../hooks/useGrid';
import { useGameContext } from '../../state/GameContext';
import './CardGrid.css';

export const CardGrid = ({ difficulty }) => {
  const { Store } = useStorage();
  const { getRandomPairs, playSound } = useGrid();
  const { moves, totalMoves, setTotalMoves, setMoves, setIsWin } = useGameContext();

  let gridSize = 0;
  switch(difficulty) {
    case 1: gridSize = 8; break;
    case 2: gridSize = 16; break;
    case 3: gridSize = 30; break;
  }

  let initialCardState = Store.getCardState();
  if(initialCardState.empty) {
    const itemIds = getRandomPairs(gridSize);
    initialCardState.cardList = itemIds.map(id => ({ id, paired: false, flipped: false }));
    initialCardState.flippedCards = [];
    initialCardState.pairedCount = 0;
  }

  const [ cardList, setCardList ] = useState(initialCardState.cardList);
  const [ flippedCards, setFlippedCards ] = useState(initialCardState.flippedCards);
  const [ pairedCount, setPairedCount ] = useState(initialCardState.pairedCount);
  const [ flipping, setFlipping ] = useState(false);

  const onCardFlip = (index) => {
    if(!cardList[index].flipped && !cardList[index].paired && !flipping) {
      const newCardList = [...cardList ];
      newCardList[index].flipped = true;
      setCardList(newCardList);
      setFlippedCards([...flippedCards, index]);
      playSound('flipSound');
    }
  }

  useEffect(() => {
    Store.updateFlippedCards(flippedCards);
    if(flippedCards.length === 2) {
      const newCardList = [...cardList ];
      const isPair = newCardList[flippedCards[0]].id === newCardList[flippedCards[1]].id;
      setFlipping(true);
      setMoves(moves + 1);
      setTotalMoves(totalMoves + 1);
      Store.updateMoves(moves + 1, totalMoves + 1);
      setTimeout(() => {
        if(isPair) {
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
      }, !isPair ? 1000 : 100);
    }
  }, [flippedCards]);

  useEffect(() => {
    Store.updatePairedCount(pairedCount);
    if(pairedCount === gridSize) {
      playSound('winSound');
      setIsWin(true);
      Store.updateIsWin(true);
    }
  }, [pairedCount]);

  useEffect(() => {
    Store.updateCardList(cardList);
  }, [cardList])

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