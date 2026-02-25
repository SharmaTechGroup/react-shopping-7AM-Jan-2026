import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function CarouselDemo(){

    const [product, setProduct] = useState({id:0, title:null, image:null, description:null, price:0, rating:{rate:0, count:0}, category:null});
    const [status, setStatus] = useState('Slide Show - Manual');

    let productId = useRef(1);
    let thread = useRef(null);

    function LoadProductManually(id)
    {   
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        productId.current = productId.current + 1;
        LoadProductManually(productId.current);
    }

    function handleNextClick(){
        setStatus('Slide Show - Manual');
        productId.current = productId.current + 1;
        LoadProductManually(productId.current);
    }

    function handlePrevClick(){
        productId.current = productId.current - 1;
        LoadProductManually(productId.current);
        setStatus('Slide Show - Manual');
    }
    function handleSeekbarChange(e){
        productId.current = e.target.value;
        LoadProductManually(productId.current);
        setStatus('Slide Show - Manual');
    }

    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show - Running');
    }

    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show - Paused');
    }

    useEffect(()=>{
        LoadProductManually(1);
    },[])

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4 p-2 w-50">
                <div className="card-header text-center overflow-auto" style={{height:'80px'}}>
                    {product.title} 
                    <div className="fw-bold">
                        [{status}]
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePrevClick} className="btn btn-dark bi bi-chevron-left"></button>
                        </div>
                        <div className="col-10 position-relative">
                            <div className="badge bg-danger text-white rounded top-0 end-0 rounded-circle p-3 position-absolute">{product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}</div>
                            <img src={product.image} width="100%" height="300" />
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input type="range" onChange={handleSeekbarChange} value={productId.current} className="form-range" min={1} max={20} />
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handlePlayClick} className="btn btn-warning bi bi-play"></button>
                    <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause mx-2"></button>
                </div>
            </div>
        </div>
    )
}