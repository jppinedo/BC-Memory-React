import React from "react";

const DifficultySelect = ({ changeDifficulty }) => (
  <>
    <h2>Ready to test your memory skills?</h2>
    <p>Choose your challenge:</p>
    <ul className="diff-level">
      <li role="button" tabIndex="0" id="diff-1" onClick={() => changeDifficulty(1)}>Easy Peasy</li>
      <li role="button" tabIndex="0" id="diff-2" onClick={() => changeDifficulty(2)}>Medium Mode</li>
      <li role="button" tabIndex="0" id="diff-3" onClick={() => changeDifficulty(3)}>Hard-as-Nails</li>
    </ul>
  </>
)

export default DifficultySelect;