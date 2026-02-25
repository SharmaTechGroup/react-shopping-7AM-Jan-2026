import { Link } from "react-router-dom";
import { FoodHome } from "./food-home";


export function FoodIndex(){
    return(
        <div className="container">
            <h3>Food Index</h3>
            <FoodHome/>
            <Link to="/menu"> Menu </Link>
        </div>
    )
}