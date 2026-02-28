import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function TodoLogin(props){


    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user_id', 'user_name']);

    const formik = useFormik({
         initialValues: {
            user_id: '',
            user_name: '',
            password:'',
            email:''
         },
         onSubmit: (user)=>{
              axios.get('http://localhost:3000/users')
              .then(response=>{
                   let record = response.data.find(item=> item.user_id===user.user_id);
                   if(record){
                      if(record.password===user.password){
                          setCookie('user_id', user.user_id);
                          setCookie('user_name', record.user_name);
                          navigate('/dashboard');
                      } else {
                          alert('Invalid Password');
                      }
                   } else {
                      alert('Invalid User Id');
                   }
              })
         }
    })

    return(
        <div className={props.align} >
            <form className={props.width} onSubmit={formik.handleSubmit}>
                <h4>User Login</h4>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="user_id" className="form-control" /></dd>
                   
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control" /></dd>
                  
                </dl>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="mt-3">
                    <Link to="/register">New User Register</Link>
                </div>
            </form>
        </div>
    )
}