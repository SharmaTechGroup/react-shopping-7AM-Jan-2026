import { useRef, useState } from "react"


export function DebounceDemo(){

    const [volume, setVolume] = useState('');
    let thread2 = useRef(null);

    function Level1(){
        setVolume('Volume : 20%');
    }
    function Level2(){
        setVolume('Volume : 60%');
    }
    function Level3(){
        setVolume('Volume : Full');
    }

    
    function handleButtonClick(){
        setTimeout(Level1, 3000);
        thread2.current = setTimeout(Level2, 6000);
        setTimeout(Level3, 10000);
    }
    function handleCancelClick(){
        clearTimeout(thread2.current);
        alert('Canceled 2nd task');
    }

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button onClick={handleButtonClick} className="btn btn-primary bi bi-volume-up-fill"></button>
                <button onClick={handleCancelClick} className="btn btn-danger mx-2">Cancel Level2</button>
                <p>{volume}</p>
            </div>
        </div>
    )
}