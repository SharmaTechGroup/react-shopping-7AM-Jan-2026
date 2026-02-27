
export function TodoLogin(){
    return(
        <div>
            <form>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" className="form-control" /></dd>
                   
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                  
                </dl>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}