import axios from "axios";
import { useEffect, useState } from "react"
import './event-demo.css';

export function EventDemo(){

  
    const [mobiles, setMobiles] = useState([{img_src:null}]);
    const [preview, setPreview] = useState('m1.png');
  
    function LoadImages(){
        axios.get('mobiles.json')
        .then(response=>{
            setMobiles(response.data);
        })
    }

    useEffect(()=>{
        LoadImages();
    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">

            <div className="row mt-4">
                <div className="col-1">
                    {
                        mobiles.map(mobile=>
                            <div key={mobile} className="my-4">
                                <img src={mobile.img_src} onMouseOver={handleMouseOver} width="100" height="100" className="thumb-nail" />
                            </div>
                        )
                    }
                </div>
                <div className="col-11">
                    <img width="400" src={preview} height="500" />
                </div>
            </div>     
        
        </div>
    )
}