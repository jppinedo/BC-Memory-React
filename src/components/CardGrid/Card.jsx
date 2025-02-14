import React from "react";

const Card = ({id, index, flipped, paired, onFlip}) => {
  return (
    <li 
      className={`card card-${id} ${paired ? 'card-paired' : ''} ${flipped ? 'card-flipped' : ''}`}
      role="button"
      tabIndex={0}
      onClick={()=> onFlip(index)}
    >
      <div className='card-inner'>
          <div className='card-front'></div>
          <div className='card-back'></div>
      </div>
    </li>
  )
}

export default Card;