import recipedata from "./recipe.json";

function IngredientList() {

  const ingredientsListItems = recipedata.map(recipe => {
    return recipe.ingredients.map((ingredients, index) => {
      return <li key={index}>{ingredients}</li>;
    });
  });
   return <div>{ingredientsListItems}</div>
}
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 