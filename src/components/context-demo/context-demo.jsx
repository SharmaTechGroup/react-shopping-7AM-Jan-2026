import { useState } from "react";


export function ChildComponent({onChildComponentClick}){
    
    function handleButtonClick(){
        let data = 'Hello from child..';
        onChildComponentClick(data);
    }

    return(
        <div className="container bg-danger p-5 text-white">
            <h3>Child Component</h3>
            <button onClick={handleButtonClick} className="btn btn-light">Send Data to Parent</button>
        </div>
    )
}

export function ContextDemo(){

    const [msg, setMsg] = useState('')

    function handleChildData(e){
        setMsg(e);
    }   

    return(
        <div className="container-fluid p-4 bg-dark text-white">
             <h1>Parent Component</h1>
             <p>{msg}</p>
             <ChildComponent onChildComponentClick={handleChildData} />
        </div>
    )
}