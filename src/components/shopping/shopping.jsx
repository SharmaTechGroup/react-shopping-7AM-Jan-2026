import axios from "axios";
import { useEffect, useState } from "react"

export function Shopping(){

    const [categories, setCategories] = useState(['']);
    const [products, setProducts] = useState([{id:0, title:null, price:0, image:null, description:null, category:null, rating:{rate:0, count:0}}]);
    const [brands] = useState(['Levis', 'US POLO', 'Nike', 'Puma']);

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{

        LoadCategories();
        LoadProducts();

    },[])

    return(
        <div className="container-fluid">
             <header className="d-flex bg-light justify-content-between p-3 align-items-center">
                 <div>
                    <span className="bi bi-bag fs-4 fw-bold"> Shopping </span>
                 </div>
                 <div>
                    <div className="input-group">
                        <button className="btn input-group-text"><span className="bi bi-search"></span></button>
                        <input type="text" placeholder="search products, brands, deals" className="form-control" />
                    </div>
                 </div>
                 <div>
                     <button className="btn">New Arrivals</button>
                     <button className="btn">Best Sellers</button>
                     <button className="btn btn-secondary bi bi-person"></button>
                     <button className="btn btn-secondary mx-2 bi bi-heart"></button>
                     <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="bi btn btn-warning bi-cart4 position-relative"> Cart <span className="badge position-absolute bg-danger text-white rounded rounded-circle">0</span> </button>
                     <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h3>Your Cart Items</h3>
                            <button data-bs-dismiss="offcanvas" className="btn btn-close"></button>
                        </div>
                     </div>
                 </div>
             </header>
             <section className="mt-3">
                 <div className="row">
                    <div className="col-2 bg-light p-3">
                        <h4>Filter Products</h4>
                        <div>
                            <label className="form-label fw-bold">Select Category</label>
                            <div>
                                <select className="form-select">
                                  {
                                    categories.map(category=>
                                        <option value={category} key={category}> {category.toUpperCase()} </option>
                                    )
                                  }
                                </select>
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="form-label fw-bold">By Brand</label>
                            <div>
                               <ul className="list-unstyled">
                                 {
                                    brands.map(brand=>
                                        <li key={brand} className="form-switch my-2"> <input className="form-check-input" type="checkbox" /> <label> {brand} </label> </li>
                                    )
                                 }
                               </ul>
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="form-label fw-bold">By Price</label>
                            <div>
                                <input type="range" className="form-range" min="1" max="1000" value="1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        
                       <main className="d-flex flex-wrap overflow-auto" style={{height:'700px'}}>
                          {
                             products.map(product=>
                                <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                                    <img src={product.image} className="card-img-top" height="120" />
                                    <div className="card-header overflow-auto" style={{height:'100px'}}>
                                        {product.title}
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}</dd>
                                            <dt>Rating</dt>
                                            <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn w-100 btn-warning bi bi-cart4"> Add to Cart</button>
                                    </div>
                                </div> 
                             )
                          }
                       </main>
                    </div>
                 </div>
             </section>
        </div>
    )
}

