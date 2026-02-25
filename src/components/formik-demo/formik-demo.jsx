import { useFormik } from "formik"

export function FormikDemo(){

    function ValidateUser(user){
        let errors = { }
        
         if(user.UserName.length===0){
            errors.UserName = 'User Name Required';
         } else {
            if(user.UserName.length<4){
                errors.UserName = 'Name too short - min 4 chars';
            } 
         }

         if(user.City==='-1'){
             errors.City = 'Please select your city';
         }

         if(!user.Gender){
             errors.Gender = 'Please select gender';
         }

        return errors;
    }

    const formik = useFormik({
         initialValues: {
             UserName: '',
             City: '-1',
             Gender: ''
         },
         validate: ValidateUser,
         onSubmit: (user)=>{
            console.log(user);
         }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" /></dd>
                <dd className="text-danger">{formik.touched.UserName && formik.errors.UserName}</dd>
                <dt>Your City</dt>
                <dd>
                    <select onBlur={formik.handleBlur} value={formik.values.City} onChange={formik.handleChange} name="City">
                        <option value="-1">Select City</option>
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.touched.City && formik.errors.City}</dd>
                <dt>Gender</dt>
                <dd>
                    <input type="radio" onBlur={formik.handleBlur} checked={formik.values.Gender==='Male'} onChange={formik.handleChange} name="Gender" value="Male" /> <label>Male</label>
                    <input type="radio" onBlur={formik.handleBlur} checked={formik.values.Gender==='Female'} onChange={formik.handleChange} name="Gender" value="Female" /> <label>Female</label>
                </dd>
                <dd className="text-danger">{formik.touched.Gender && formik.errors.Gender}</dd>
            </dl>
              <button className="mx-2" disabled={(!formik.isValid)?true:false} type="submit">Submit</button>
              <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>

              <div className={(!formik.isValid)?'d-block':'d-none'} style={{marginTop:'50px', color:'red'}}>
                <h3>Please check the following errors</h3>
                <ul>
                  {
                     Object.values(formik.errors).map(error=><li key={error}>{error}</li>)
                  }
                </ul>
              </div>
            </form>
        </div>
    )
}