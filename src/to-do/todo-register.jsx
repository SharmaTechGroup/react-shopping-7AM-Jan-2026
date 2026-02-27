import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"


export function TodoRegister(){


    let naviagte = useNavigate();

    const formik = useFormik({
        initialValues: {
            user_id : '',
            user_name: '',
            password: '',
            email:''
        },
        onSubmit: (user)=>{
             axios.post(`http://localhost:3000/users`,user)
             .then(()=>{
                  console.log('registered..');
             })
             alert('Registered Successfully..');
             naviagte('/');
        }
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="user_id" className="form-control" /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="user_name" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="email" className="form-control" /></dd>
                </dl>
                <button  type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    )
}