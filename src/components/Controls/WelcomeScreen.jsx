import React from "react";

const WelcomeScreen = ({ onNextScreen }) => (
  <>
    <h2>Welcome to the Memory Game!</h2>
    <p>Flip over two cards to find matching pairs. If they match, keep them and go again. Keep playing until all pairs are found.</p>
    <p>Ready to test your memory and have fun? Enjoy the challenge! Let's find those pairs!🎴😊</p>
    <button id="start-control" onClick={() => onNextScreen()}>Start Game</button>
  </>
)

export default WelcomeScreen;