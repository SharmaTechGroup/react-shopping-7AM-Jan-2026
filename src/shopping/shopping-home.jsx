import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function ShoppingHome(){

    const [categories, setCategories] = useState([]);


    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
             setCategories(response.data);
        })

    },[])

    return(
        <div>
            <h4>Shopping Home</h4>
            <Link to="/search">Search</Link>
            <ul className="list-group list-unstyled w-25">
              {
                categories.map(category=>
                    <li key={category} > <Link className="list-group-item list-group-item-danger my-1" to={`products/${category}`}  >{category.toUpperCase()}</Link> </li>
                )
              }
            </ul>
        </div>
    )
}