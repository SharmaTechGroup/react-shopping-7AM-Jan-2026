import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"


export function ShoppingResults(){


    const [products, setProducts] = useState([{id:0, title:null, price:0, category:null, image:null, description:null, rating:{rate:0, count:0}}]);

    let [ref] = useSearchParams();

    useEffect(()=>{
         axios.get(`https://fakestoreapi.com/products/category/${ref.get('searchString')}`)
         .then(res=>{
             setProducts(res.data);
         })
    },[])

    let navigate = useNavigate();

    function handleBackClick(){
        navigate('/search');
    }

    return(
        <div>
            <button onClick={handleBackClick} className="btn bi bi-chevron-left"> Back</button>
            <h3>Results</h3>
            {
                products.map(product=><p key={product.id}>{product.title} <img src={product.image} width="50" height="50" /></p>)
            }

        </div>
    )
}