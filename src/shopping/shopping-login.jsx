import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function ShoppingLogin(){

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [uname, setUname] = useState('');
    let navigate = useNavigate();

     function handleNameChange(e){
        setUname(e.target.value);
     }

     function handleLoginClick(){
        setCookie('username', uname);
        navigate('/search');
     }

        return(
        <div>
            <h4>User Login</h4>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} /></dd>
            </dl>
            <button onClick={handleLoginClick}>Login</button>
            <div className="mt-3">
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}