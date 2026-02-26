import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";


export function MUIDemo(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleNameChange(e){
        setUser(e.target.value);
    }
    function handlePwdChange(e){
        setPassword(e.target.value);
    }
    function handleLoginClick(){
        console.log(`Name=${user}\nPassword=${password}`);
    }

    return( 
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-6">
                    <h3>Bootstrap</h3>
                    <form className="w-50">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="UserName">User Name</label>
                            <div>
                                <input className="form-control" type="text" name="UserName" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="Password">Password</label>
                            <div>
                                <input className="form-control" type="password" name="Password" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-danger w-100">Login</button>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <h3>MUI</h3>
                    <form className="w-50">
                        <div className="mb-3">
                            <TextField type="text" onChange={handleNameChange} className="w-100" label="User Name" variant="standard" />
                        </div>
                        <div className="mb-3">
                            <TextField onChange={handlePwdChange} type="password" className="w-100" label="Password" variant="standard" />
                        </div>
                        <div className="mb-3">
                            <DatePicker className="w-100" />
                        </div>
                        <div>
                            <Button onClick={handleLoginClick} variant="contained" className="w-100" color="error" > Login </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}