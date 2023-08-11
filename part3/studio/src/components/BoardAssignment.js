import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "vegan",
         value: "vegan"
      },
      {
         label: "soup",
         value: "soup"
      },
      {
         label: "curry",
         value: "curry"
      }
   
   ];

   const [boardName, setBoardName] = useState('no boards yet!');
   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      <option value="">Select a board</option> 
      {boards.map((board) => {
         return <option key={board.value}value={board.value}>{board.label}</option> 
              
      })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}