import React from "react";
import flipSound from '../../public/sounds/flip.wav';
import flipBackSound from '../../public/sounds/flip_back.wav';
import pairSound from '../../public/sounds/pair.wav';
import winSound from '../../public/sounds/win.wav';

const audio = {
  flipSound: new Audio(flipSound),
  flipBackSound: new Audio(flipBackSound),
  pairSound: new Audio(pairSound),
  winSound: new Audio(winSound),
}

const getRandomPairs = (amount) => {
  const numbers = Array.from({ length: 30 }, (v, k) => k);
  for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  const selectedNumbers = numbers.slice(0, amount);
  const pairs = selectedNumbers.flatMap(num => [num, num]);

  for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
}

const playSound = (soundKey) => {
  audio[soundKey].play();
}

const useGrid = () => {
  return { getRandomPairs, playSound }
}

export default useGrid;