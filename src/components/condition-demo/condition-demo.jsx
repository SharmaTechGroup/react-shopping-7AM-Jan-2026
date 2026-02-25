import { useEffect, useState } from "react"
import { Login } from "../login/login";
import { WeatherApp } from "../weather-app/weather-app";


export function ConditionDemo(){

    const [toggleSignin, setToggleSignin] = useState(true);

    useEffect(()=>{
        setToggleSignin(true);
    },[])

    function handleSigninClick(){
        setToggleSignin(false);
    }
    function handleSignout(){
        setToggleSignin(true);
    }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between align-items-center mt-2 p-3 border border-2 border-secondary">
                <div className="fw-bold fs-4">
                    <span className="bi bi-amazon"> Amazon</span>
                </div>
                <div>
                    <span>Home</span>
                    <span className="mx-4">Offers</span>
                    <span>Contact</span>
                </div>
                <div>
                    {
                        (toggleSignin===true)?
                        <div className="input-group">
                         <input type="text" className="form-control" placeholder="Your mobile" />
                         <button onClick={handleSigninClick} className="btn btn-secondary">Signin</button>
                       </div>
                        :
                        <div>
                         <button onClick={handleSignout} className="btn btn-warning bi bi-person-fill"> Signout </button>
                        </div>
                    }
                   
                   
                </div>
            </header>
        </div>
    )
}