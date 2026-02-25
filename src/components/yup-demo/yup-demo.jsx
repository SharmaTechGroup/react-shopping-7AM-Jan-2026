import { useFormik } from "formik";
import * as yup from "yup";

export function YupDemo(){

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: '',
            Mobile: ''
        },

        validationSchema: yup.object({
             UserName: yup.string().required('Name Required').min(4, 'Name too short..'),
             Age: yup.number().required('Age Required').min(15, 'Age min 15').max(30, 'Age max 30'),
             Mobile: yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')
        }) ,

        onSubmit: (user)=>{
            console.log(user);
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps('UserName')} name="UserName" /></dd>
                    <dd className="text-danger">{formik.touched.UserName && formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" {...formik.getFieldProps('Age')} name="Age" /></dd>
                     <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...formik.getFieldProps('Mobile')} name="Mobile" /></dd>
                     <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}