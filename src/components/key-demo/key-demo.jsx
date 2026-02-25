import axios from "axios";
import { useEffect, useState } from "react"


export function KeyDemo(){

    const [users, setUsers] = useState([{user_name:null}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [strength, setStrength] = useState({width:''});
    const [progressClass, setProgressClass] = useState('');
    const [passport, setPassport] = useState('');

    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    function VerifyUserName(e){
        var result = users.find(user=> user.user_name===e.target.value);
        if(result){
            setMsg('User Name Taken - Try Another');
            setErrorClass('text-danger');
        } else {
            setMsg('User Name Available');
            setErrorClass('text-success');
        }
    }

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/))
        {
            setStrength({width:'100%'});
            setProgressClass('progress-bar bg-success progress-bar-animated progress-bar-striped');
        } else {
            if(e.target.value.length<4){
                setStrength({width:'30%'});   
                setProgressClass('progress-bar bg-danger progress-bar-animated progress-bar-striped');
            } else {
                setStrength({width:'70%'});
                setProgressClass('progress-bar bg-warning progress-bar-animated progress-bar-striped');
            }
        }
    }

    function handleChange(e){
        setPassport(e.target.value);
    }

    function handleBlur(){
        setPassport(passport.toUpperCase());
    }

    return(
        <div className="container-fluid p-4">
            <h3>Register User</h3>
            <dl className="w-25">
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" onKeyUp={VerifyUserName} /></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyUp={VerifyPassword} className="form-control" />
                </dd>
                <dd>
                    <div className="progress">
                        <div className={progressClass} style={strength}>

                        </div>
                    </div>
                </dd>
                <dt>Your Passport Number</dt>
                <dd>
                    <input type="text" onChange={handleChange} value={passport} onBlur={handleBlur} className="form-control" />
                </dd>
            </dl>
        </div>
    )
}