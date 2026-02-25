import { useEffect, useRef, useState } from "react"

export function ThrottleDemo(){

    const [ms, setMs] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hrs, setHrs] = useState(0);

    let thread = useRef(null);

    let milliSeconds = 0;
    let seconds = 0;
    function StartWatch(){
        
        
        let minutes = 0;
        let hours = 0;
        
        setMs(milliSeconds);
        if(milliSeconds===999){
            seconds++;
            
            milliSeconds = 0;
            if(seconds===59){
                minutes++;
                seconds = 0;
            }
        }
         milliSeconds++;
         setSec(seconds);
         setMin(minutes);
    }

    function handleStartClick(){
       thread.current =  setInterval(StartWatch,1);
    }

    function handleStopClick(){
        clearInterval(thread.current);
    }

    useEffect(()=>{
    },[])

    return(
        <div className="container-fluid d-flex justify-content-center">
           
           <div>
               <div className="row p-3 mt-5 bg-primary text-white">
                    <div className="col" style={{width:'100px'}}>
                        00
                    </div>
                    <div className="col" style={{width:'100px'}}>
                        :
                    </div>
                    <div className="col" style={{width:'100px'}}>
                        {min}
                    </div>
                    <div className="col" style={{width:'100px'}}>
                        :
                    </div>
                    <div className="col" style={{width:'100px'}}>
                        {sec}
                    </div>
                    <div className="col" style={{width:'100px'}}>
                        :
                    </div>
                    <div className="col" style={{width:'100px'}}>
                        {ms}
                    </div>
               </div>
               <button onClick={handleStartClick} className="btn btn-primary mt-3">Start</button>
           </div>
        </div>
    )
}