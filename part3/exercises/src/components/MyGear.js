import React, { useState } from 'react';
import gear from "./../data.json";

export default function MyGear() {
  const [index, setIndex] = useState(0);
  const myListOfGear = gear.gear; // Use gear.gear to access the "gear" array in data.json
  const selectedGear = myListOfGear[index];

  function handleClick() {
    if (index < myListOfGear.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div className="my-gear">
      <button onClick={handleClick}>Next</button>
      <h3>MY GEAR</h3>
      {selectedGear && (
        <div>
          <p><strong>Gear:</strong> {selectedGear.title}</p>
          <p><strong>Brand:</strong> {selectedGear.brand}</p>
          <img src={selectedGear.image} alt={selectedGear.alt} />
        </div>
      )}
    </div>
  );
}