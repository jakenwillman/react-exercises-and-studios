import "./styling.css"
import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";


function Button(props) {
   return props.SaveButton ? <SaveButton /> : <ClickedButton />
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 