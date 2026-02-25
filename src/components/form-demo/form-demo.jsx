import { useRef, useState } from "react";
import { useFormik } from "formik";

export function FormDemo(){

    function ValidateUser(user)
    {
         let errors = { };

          if(user.UserName.length===0){
               errors.UserName = 'User Name Required';
          } else {
              if(user.UserName.length<4){
                   errors.UserName = 'Name too short - min 4 chars';
              }
          }

          if(user.Age.length===0){
             errors.Age = 'Age Required';
          } else {
             if(isNaN(user.Age)){
                errors.Age = 'Age must be a number';
             } 
          }

          if(user.City==="-1"){
              errors.City = 'Please select your city';
          } 

          if(user.Mobile.length===0){
              errors.Mobile = 'Mobile Required';
          } else {
              if(!user.Mobile.match(/\+91\d{10}/)){
                 errors.Mobile = 'Invalid Mobile';
              } 
          }

          if(!user.Gender){
               errors.Gender = 'Please select gender';
          } 

         return errors;
    }

    const formik = useFormik({
         initialValues: {
             UserName: '',
             Age: '',
             Mobile: '',
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
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} value={formik.values.UserName} onChange={formik.handleChange}  name="UserName" /></dd>
                    <dd className="text-danger">{formik.touched.UserName && formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange}  name="Age"  /></dd>
                    <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" value={formik.values.City} onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.touched.City && formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input checked={formik.values.Gender==="Male"} onChange={formik.handleChange} type="radio" name="Gender" value="Male" /> <label>Male</label>
                        <input checked={formik.values.Gender==="Female"} onChange={formik.handleChange} type="radio" name="Gender" value="Female" /> <label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.touched.Gender && formik.errors.Gender}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}