import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"


export function TodoRegister(props){


    let navigate = useNavigate();

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
             navigate('/login');
        }
    })

    return(
        <div className={props.align}>
            <form className={props.width} onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
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
                <div className="mt-3">
                    <Link to="/login">Have Account?</Link>
                </div>
            </form>
        </div>
    )
}