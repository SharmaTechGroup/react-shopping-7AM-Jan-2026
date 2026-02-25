import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { SearchContext } from "./fakestore-index";


export function FakestoreProducts({onAddClick}){

    let context = useContext(SearchContext)
   
    const [products, setProducts] = useState([{id:0, title:null, price:0, category:null, description:null, image:null, rating:{rate:0, count:0}}]);

    function LoadProducts(){
        if(context==='all' || context===''){
            axios.get(`https://fakestoreapi.com/products`)
            .then(response=>{
                setProducts(response.data);
            })
        } else {
            axios.get(`https://fakestoreapi.com/products/category/${context}`)
            .then(response=>{
                setProducts(response.data);
            })
        }
    }

    useEffect(()=>{
        LoadProducts();
    },[context])

    function handleAddClick(product){
        onAddClick(product);
        alert(`${product.title}\nAdded to Cart`);
    }

    return(
        <div className="container-fluid d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
           {
            products.map(product=>
                <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                    <img src={product.image} className="card-img-top" height="120" />
                    <div className="card-header" style={{height:'130px'}}>
                        {product.title}
                    </div>
                    <div className="card-footer">
                        <button onClick={()=>{handleAddClick(product)}} className="btn btn-warning w-100 bi bi-cart4"> Add to Cart</button>
                    </div>
                </div>
            )
           }
        </div>
    )
}