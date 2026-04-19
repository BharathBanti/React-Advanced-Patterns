import React, { useState } from 'react';

function CarTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  const styledDiv = {
    "border": "2px solid",
    "height": "40vh"
  }

  return (
    <div style={styledDiv} onMouseMove={handleMouseMove}>
      <p>🚗 Car is at ({position.x}, {position.y})</p>
    </div>
  );
}

export default CarTracker;
