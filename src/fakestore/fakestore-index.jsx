import { createContext, useEffect, useState } from "react";
import { FakestoreProducts } from "./fakestore-products";
import axios from "axios";

export let SearchContext = createContext(null);

export function FakestoreIndex(){

    const [searchString, setSearchString] = useState('');
    const [searchData, setSearchData] = useState('all');
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    function handleSearchChange(e){
        setSearchString(e.target.value);
    }   
    function handleSearchClick(){
        setSearchData(searchString);
    }

    function GetDataFromChild(e){
        cartItems.push(e);
        setCartCount(cartItems.length);
    }
    
    return(
        <div className="container-fluid">
            <header className="p-3 fs-5 d-flex justify-content-between align-items-center border border-1 border-secondary mt-2">
                <div className="fw-bold">
                    <span className="bi bi-bag"> Fakestore</span> 
                </div>
                <div>
                    <div className="input-group" style={{width:'500px'}}>
                        <input onChange={handleSearchChange}  type="text" className="form-control" placeholder="Search fakestore" />
                        <button onClick={handleSearchClick} className="bi bi-search btn btn-warning"></button>
                    </div>
                </div>
                <div>
                    <button data-bs-toggle="offcanvas" data-bs-target="#cart" className="btn btn-warning bi bi-cart4 position-relative"> <span className="badge rounded bg-danger rounded-circle position-absolute">{cartCount}</span> </button>
                    <div className="offcanvas offcanvas-end" id="cart">
                      <div className="offcanvas-header">
                          <h4>Your Cart Items</h4>
                          <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                      </div>
                      <div className="offcanvas-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item=>
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td><img width="50" height="50" src={item.image}></img></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            </header>
            <section className="mt-4">
                <SearchContext value={searchData}>
                     <FakestoreProducts onAddClick={GetDataFromChild} />
                </SearchContext>
            </section>
        </div>
    )
}