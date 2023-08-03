import React from 'react';
import classes from './ChoresList.module.css'

class ChoresList extends React.Component {
   render() {
      const chores = ["Take out the trash", "Do the dishes", "Clean the bathroom", "Sweep the floors"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>TO DO: Chores List</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ul>
      </div>
      );
   }
}

export default ChoresList