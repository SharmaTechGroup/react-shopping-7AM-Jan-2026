import './login.css';

export function Login(){
    return(
        <main className="d-flex justify-content-center">
            <form className='mt-4 alert alert-dismissible alert-warning p-4 border border-2 rounded'>
            <h3>User Login</h3>
            <button data-bs-dismiss="alert" className='btn btn-close'></button>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className='form-control' /></dd>
                <dt>Password</dt>
                <dd><input type="password" className='form-control' /></dd>
            </dl>
            <button className='btn btn-warning w-100'>Login</button>
           </form>
        </main>
    )
}

