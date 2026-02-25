import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { WeatherApp } from "../components/weather-app/weather-app";
import { Details } from "./details";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
               <header className="text-center bg-dark text-white p-2 fs-2 fw-bold">
                  <span className="bi bi-youtube"> Video Tutorial App</span>
                  <div>
                     <Link to="java" className="btn btn-warning"> Java </Link>
                     <Link to="react" className="btn btn-light mx-2"> React </Link>
                     <Link to="weather" className="btn btn-info mx-2"> Weather </Link>
                  </div>
               </header>
               <section className="mt-5 p-4">
                   <Routes>
                      <Route path="/" element={<div><h4>Tutorial Home</h4><p>Java | React</p></div>} />
                      <Route path="java" element={<div><h4>Java Tutorial</h4><p>Core | Advanced</p></div>} />
                      <Route path="react" element={<div><h4>React Tutorial</h4><p>Components | Routing | Hooks</p></div>} />
                      <Route path="weather" element={<WeatherApp />} />
                      <Route path="details/:id/:name/:price" element={<Details />} />
                      <Route path="*" element={<div className="text-danger"><h4>Not Found</h4><p>Requested tutorial not found</p></div>} />
                   </Routes>
               </section>
            </BrowserRouter>
        </div>
    )
}