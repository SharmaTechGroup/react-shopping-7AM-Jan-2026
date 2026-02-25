import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingDetails } from "./shopping-details";
import { ShoppingSearch } from "./shopping-search";
import { ShoppingResults } from "./shopping-results";
import { lazy, Suspense } from "react";
import { ShoppingLogin } from "./shopping-login";

const ShoppingProducts = lazy(()=> import('./shopping-products') );

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
               <header className="fs-2 p-2 border border-2 bg-dark text-white mt-2 fw-bold d-flex justify-content-between">
                   <div>
                     <span className="bi bi-bag"> Shopping </span>
                   </div>
               </header>
               <section className="p-4">
                  <Suspense fallback={<div>Loading please wait..</div>}>
                      <Routes>
                       <Route path="/" element={<ShoppingHome />} />
                       <Route path="products/:category" element={<ShoppingProducts />} >
                            <Route path="details/:id" element={<ShoppingDetails />} />
                       </Route>
                       <Route path="search" element={<ShoppingSearch />} />
                       <Route path="results" element={<ShoppingResults />} />
                       <Route path="login" element={<ShoppingLogin />} />
                     </Routes>
                  </Suspense>
               </section>
            </BrowserRouter>
        </div>
    )
}