import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    let authorLink = "https://www.foodbymaria.com/plant-based-coconut-curry-meatballs-soup/";
    let authorPhoto = "https://www.foodbymaria.com/wp-content/uploads/2019/07/Collages-FBM-ProfileSide.jpg";
    let authorName = "Maria";
    return (
        <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Photo of Maria, the author of the blog." className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a target="_blank" href={authorLink}>Blog name</a> 
      </div>
   </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
       return (
        <div> 
            <div>
                <h1>Plant-Based Coconut Curry Meatballs With Soup</h1>
                <p>This yummy, creamy Plant-Based Coconut Curry Meatballs Soup is to die for. Loaded with flavour, and filling.</p>
            </div>
        <RecipeAuthor />
     </div>
       );
    }
}

export default RecipeDescription;