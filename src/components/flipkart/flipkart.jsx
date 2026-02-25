import { useEffect, useState } from "react"
import axios from "axios";

export function Flipkart(){

    const [product, setProduct] = useState({title:null, image:null, price:0, rating:{rate:0, ratings:0, reviews:0}, offers:[]})

    function LoadData(){

           axios.get('product.json')
           .then(response=>{
                setProduct(response.data);
           })

    }

    useEffect(()=>{
        LoadData();
    },[])


    return(
        <div className="container-fluid">
            <div className="mt-5 row">
                <div className="col-3">
                    <img width="100%" src={product.image} height="400" />
                </div>
                <div className="col-9">
                    <div className="fs-3">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="mx-3 fw-bold text-secondary">
                            {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews
                        </span>
                    </div>
                    <div className="my-4 fs-1 fw-bold">
                        {product.price.toLocaleString('en-in',{style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}
                    </div>
                    <div>
                        <h4>Available Offers</h4>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=>
                                    <li className="bi bi-tag-fill my-3 text-success" key={offer}> <span className="text-secondary"> {offer} </span> </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}