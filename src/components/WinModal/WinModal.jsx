import React from "react";

const WinModal = ({ onPlayAgain }) => (
  <div class="modal-overlay" id="game-over">
      <div class="modal-content">
        <h2>Congratulations!</h2>
        <h2>You won the game.</h2>
        <button id="play-again" onClick={onPlayAgain}>Play Again</button>
      </div>
  </div>
)

export default WinModal;