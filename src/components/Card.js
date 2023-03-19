import React, { useState } from 'react';
import './card.css'; // You'll need to create this file with your own CSS styles

function Card({ title, imageUrl, text }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`Card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="Card-image">
        <img src='' />
      </div>
      <div classNa e="Card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
