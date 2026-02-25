import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export default function ShoppingProducts(){


    const [products, setProducts] = useState([{id:0, title:null, price:0, category:null, image:null, description:null, rating:{rate:0, count:0}}]);

    let params = useParams();

    const [data, setData] = useState('Route Context Data');

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h4>Products</h4>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-wrap w-50">
                        {
                            products.map(product=>
                                <div key={product.id} className="card m-2 p-2" style={{width:'100px'}}>
                                    <img className="card-img-top" height="100" src={product.image} />
                                    <div className="card-footer">
                                        <Link to={`details/${product.id}`}>Details</Link>
                                    </div>
                                </div>
                            )
                        }
                        <div>
                            <Link to="/">Back to Categories</Link>
                        </div>
                        </div>   
                </div>
                <div className="col">
                      <Outlet context={data} />
                </div>
            </div>
        </div>
    )
}