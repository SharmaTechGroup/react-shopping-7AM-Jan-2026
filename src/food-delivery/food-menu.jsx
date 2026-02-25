import { Link, Outlet } from "react-router-dom";


export function FoodMenu(){
    return(
        <div>
            <h3>Food Menu</h3>
            <Link to='details'>Details</Link>
            <hr />
            <Outlet />
        </div>
    )
}