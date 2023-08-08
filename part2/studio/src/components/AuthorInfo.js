import recipedata from "./recipe.json";
import "./styling.css"

function AuthorInfo() {
  const recipeAuthor = recipedata.map((data) => {
    <div key = {data.name}>{data.author}</div>
  });

  const recipeAuthorImage = recipedata.map((data) => (
    <div key={data.name}>
       <img src={data.authorImage} alt={data.author} className="authorImage" />
 </div>

   return;
 }
 
 export default AuthorInfo;
 

 //image, name, website
 //css for styling image
 