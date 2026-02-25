import { useForm } from "react-hook-form"

export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (user) =>{
        console.log(user);
    }

    return(
        <div className="container-fluid">
            <h3>Register New User</h3>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" {...register("UserName", { required:true, minLength:4 })} name="UserName" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")?<span>User Name Required</span>: <span></span>
                            &&
                            (errors.UserName?.type==="minLength")?<span>Name too short</span>: <span></span>
                        }
                    </dd>
                     <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" {...register("Mobile", { required:true, pattern:/^\+91\d{10}$/ })} /></dd>
                     <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")?<span>Mobile Required</span>: <span></span>
                            &&
                            (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>: <span></span>
                        }
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}