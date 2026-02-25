import { useState } from 'react';
import './mouse-demo.css';

export function MouseDemo(){

    const [animation, setAnimation] = useState({animationName:'Spin', animationDuration:'5s', animationTimingFunction:'linear', animationIterationCount:'infinite'});
    
    function handleMouseDown(){
        setAnimation({animationName:'Spin', animationDuration:'1s', animationTimingFunction:'linear', animationIterationCount:'infinite'});
    }

    function handleMouseUp(){
        setAnimation({animationName:'Spin', animationDuration:'5s', animationTimingFunction:'linear', animationIterationCount:'infinite'});
    }


    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img src="react.svg" style={animation} onMouseDown={handleMouseDown}  onMouseUp={handleMouseUp} width="200" height="200" />
        </div>
    )
}