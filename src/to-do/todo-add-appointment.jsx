import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function ToDoAddAppointment(){

    const [cookies, setCookie, removeCookie] = useCookies(['user_id','user_name']);
    let navigate = useNavigate();

    const formik = useFormik({
         initialValues: {
            title: '',
            description: '',
            date: '',
            user_id: cookies['user_id']
         },
         onSubmit : (appointment)=>{
             axios.post('http://localhost:3000/appointments', appointment)
             .then(()=>{
                 console.log('addedd..');
             })
             alert('Appointment Added successfully..');
             navigate('/dashboard/details');
         }
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h4>Add New Appointments</h4>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="title" /></dd>
                    <dt>Description</dt>
                    <dd><textarea rows={4}  onChange={formik.handleChange} cols={40} name="description"></textarea></dd>
                    <dt>Date</dt>
                    <dd><input type="date"  onChange={formik.handleChange} name="date" /></dd>
                </dl>
                <button type="submit" className="btn btn-primary"> Add </button>
                <Link to="/dashboard/details" className="btn btn-danger mx-2">Cancel</Link>
            </form>
        </div>
    )
}