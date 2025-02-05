import styles from './Ingredients.module.css';



export default function RecipeIngredients() {
    let ingredients = ["Chopped white onion", "Garlic", "Olive oil", "Bread crumbs", "Oat milk", "Spices", "Mint & Green onions"];
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
           <li>{ingredients[6]}</li>
        </ul>
     </div> 
    )
};
