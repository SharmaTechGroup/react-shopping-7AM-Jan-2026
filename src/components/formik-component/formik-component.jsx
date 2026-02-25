import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

export function FormikComponent(){
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik 
             initialValues={{UserName:'', Age:'', Mobile:''}} 
             validationSchema={yup.object({
                         UserName: yup.string().required('Name Required').min(4, 'Name too short..'),
                         Age: yup.number().required('Age Required').min(15, 'Age min 15').max(30, 'Age max 30'),
                         Mobile: yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')
                    })}
              onSubmit={(user)=>{console.log(user)}}      
              >
                {
                    formik =>
                    <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName" /></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                        <dt>Age</dt>
                        <dd><Field type="text" name="Age" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Age" /></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                    </dl>
                    <button disabled={(!formik.isValid)?true:false} type="submit">Submit</button>
                   </Form>
                }
            </Formik>
        </div>
    )
}